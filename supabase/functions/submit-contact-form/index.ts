
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.10";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Insert into database
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          property_address: formData.propertyAddress,
        },
      ]);

    if (error) {
      console.error("Database error:", error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log("Form data saved to database successfully");

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "Cozy Home Partners <noreply@resend.dev>",
      to: ["charles@cozyhomepartners.com"],
      subject: "New Contact Form Submission - Cozy Home Partners",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Property Address:</strong> ${formData.propertyAddress}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in submit-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
