import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = process.env.REACT_APP_SUPABASEURL;
export const supabaseKey = process.env.REACT_APP_SUPABASEKEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
