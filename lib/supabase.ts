import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = 'https://foepnledherxhsxnrjid.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvZXBubGVkaGVyeGhzeG5yamlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NTU5OTcsImV4cCI6MjA2NjEzMTk5N30.uhzEcFInNTtBWy92imS2bFnPby_O2cNUxUxdL_mCgn8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

