-- Drop the overly permissive public INSERT policy
DROP POLICY IF EXISTS "Anyone can create contact submissions" ON public.contact_submissions;

-- Create a restrictive INSERT policy - only service_role can insert (via edge function)
CREATE POLICY "Only service role can insert contact submissions"
ON public.contact_submissions
FOR INSERT
TO service_role
WITH CHECK (true);