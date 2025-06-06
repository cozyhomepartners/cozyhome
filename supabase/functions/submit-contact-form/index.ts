
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
  street?: string;
  unit?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  message?: string;
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
          street_address: formData.street || null,
          unit: formData.unit || null,
          city: formData.city || null,
          state: formData.state || null,
          zipcode: formData.zipcode || null,
        },
      ]);

    if (error) {
      console.error("Database error:", error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log("Form data saved to database successfully");

    // Send email notification using verified domain
    const emailResponse = await resend.emails.send({
      from: "Cozy Home Partners <onboarding@resend.dev>",
      to: ["charles@cozyhomepartners.com"],
      subject: `Inbound - ${formData.propertyAddress}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Property Address:</strong> ${formData.propertyAddress}</p>
        
        <h3>Detailed Address Information:</h3>
        ${formData.street ? `<p><strong>Street Address:</strong> ${formData.street}</p>` : ''}
        ${formData.unit ? `<p><strong>Unit/Apt:</strong> ${formData.unit}</p>` : ''}
        ${formData.city ? `<p><strong>City:</strong> ${formData.city}</p>` : ''}
        ${formData.state ? `<p><strong>State:</strong> ${formData.state}</p>` : ''}
        ${formData.zipcode ? `<p><strong>Zip Code:</strong> ${formData.zipcode}</p>` : ''}
        
        ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
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
