-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Only authenticated users can view contact submissions" ON public.contact_submissions;

-- Create a restrictive SELECT policy - only service_role can read submissions (via Supabase dashboard)
CREATE POLICY "Only service role can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO service_role
USING (true);