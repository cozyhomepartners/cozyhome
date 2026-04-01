
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
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const formData: ContactFormData = await req.json();

    // Input validation
    if (!formData.name || typeof formData.name !== 'string' || formData.name.trim().length === 0 || formData.name.length > 200) {
      return new Response(JSON.stringify({ error: "Invalid name" }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    if (!formData.email || typeof formData.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || formData.email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    if (!formData.phone || typeof formData.phone !== 'string' || formData.phone.trim().length === 0 || formData.phone.length > 30) {
      return new Response(JSON.stringify({ error: "Invalid phone" }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    if (!formData.propertyAddress || typeof formData.propertyAddress !== 'string' || formData.propertyAddress.trim().length === 0 || formData.propertyAddress.length > 500) {
      return new Response(JSON.stringify({ error: "Invalid property address" }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    if (formData.message && (typeof formData.message !== 'string' || formData.message.length > 2000)) {
      return new Response(JSON.stringify({ error: "Invalid message" }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    // Sanitize inputs
    const sanitize = (val: string | undefined) => val ? val.trim().slice(0, 500) : null;

    console.log("Received valid form submission");

    // Insert into database
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: formData.name.trim().slice(0, 200),
          email: formData.email.trim().slice(0, 255),
          phone: formData.phone.trim().slice(0, 30),
          property_address: formData.propertyAddress.trim().slice(0, 500),
          street_address: sanitize(formData.street),
          unit: sanitize(formData.unit),
          city: sanitize(formData.city),
          state: sanitize(formData.state),
          zipcode: sanitize(formData.zipcode),
        },
      ]);

    if (error) {
      console.error("Database error:", error);
      throw new Error("Failed to save submission");
    }

    console.log("Form data saved to database successfully");

    // Escape HTML to prevent injection in email
    const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    // Send email notification using verified domain
    const emailResponse = await resend.emails.send({
      from: "Cozy Home Partners <onboarding@resend.dev>",
      to: ["charles@cozyhomepartners.com"],
      subject: `Inbound - ${esc(formData.propertyAddress)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(formData.name)}</p>
        <p><strong>Email:</strong> ${esc(formData.email)}</p>
        <p><strong>Phone:</strong> ${esc(formData.phone)}</p>
        <p><strong>Property Address:</strong> ${esc(formData.propertyAddress)}</p>
        
        <h3>Detailed Address Information:</h3>
        ${formData.street ? `<p><strong>Street Address:</strong> ${esc(formData.street)}</p>` : ''}
        ${formData.unit ? `<p><strong>Unit/Apt:</strong> ${esc(formData.unit)}</p>` : ''}
        ${formData.city ? `<p><strong>City:</strong> ${esc(formData.city)}</p>` : ''}
        ${formData.state ? `<p><strong>State:</strong> ${esc(formData.state)}</p>` : ''}
        ${formData.zipcode ? `<p><strong>Zip Code:</strong> ${esc(formData.zipcode)}</p>` : ''}
        
        ${formData.message ? `<p><strong>Message:</strong> ${esc(formData.message)}</p>` : ''}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Email sent successfully");

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
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
