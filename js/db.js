import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://ojnpfgekugdrodkawenp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbnBmZ2VrdWdkcm9ka2F3ZW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4Njk0ODcsImV4cCI6MjA4OTQ0NTQ4N30.yqVbSD5vQ8uHm9JKgDp2VYLCem4E-hLt-s-dqxftzgw'
)

export default supabase;