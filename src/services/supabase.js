import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://coemfrvfidrcdznpubir.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZW1mcnZmaWRyY2R6bnB1YmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyNTQzOTksImV4cCI6MjAxMjgzMDM5OX0.HN6zESekRvuK-8uCN_FnKPi-IQHtUCIuEvv1GMtdGQA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
