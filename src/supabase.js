import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tgipnlrtyqzzveynzrea.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaXBubHJ0eXF6enZleW56cmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwNDUyMTgsImV4cCI6MTk5MTYyMTIxOH0.3NniNGAOxX1CFp4crpaAc9-LS7QQmUGan5zbrGyGjvw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
