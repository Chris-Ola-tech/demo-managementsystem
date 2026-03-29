const SUPABASE_URL  = 'https://xavwqgyrynrmmdxestjn.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhdndxZ3lyeW5ybW1keGVzdGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MjAwNTEsImV4cCI6MjA5MDI5NjA1MX0.w-mZ8fSEIOf9JuKSdWCTLkbrrgxKosq_fPz87wMzZdQ';
 
if (typeof supabase === 'undefined') {
  var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
}
 