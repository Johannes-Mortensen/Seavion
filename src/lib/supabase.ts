import { createClient } from '@supabase/supabase-js';

// Default to empty strings if env vars are not set
const supabaseUrl = "https://pavjnepxzpucmehoidey.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhdmpuZXB4enB1Y21laG9pZGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNjE4NDMsImV4cCI6MjA0ODczNzg0M30.AXI8Aa9he-Bsj1zCKD0c6DrLGRyQimQdDO9_1fuamQ8";

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};