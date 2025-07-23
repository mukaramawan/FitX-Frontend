import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL= "https://afnsgcexasoekfszyrnu.supabase.co";
const SUPABASE_ANON_KEY= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbnNnY2V4YXNvZWtmc3p5cm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0NjgzMDAsImV4cCI6MjA2MzA0NDMwMH0.pZGaJDwE5WUE1mCa60L_eOd8k5Zsa3lCnui7JoYAUbY"

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);