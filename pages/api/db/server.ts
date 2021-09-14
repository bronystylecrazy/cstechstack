import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseMasterKey = process.env.NEXT_MASTER_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl,supabaseMasterKey);