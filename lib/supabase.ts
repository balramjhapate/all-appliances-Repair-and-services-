import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Lead {
  name: string;
  phone: string;
  city: string;
  service: string;
  message?: string;
  gclid?: string | null;
  utm_source?: string | null;
  utm_campaign?: string | null;
  utm_keyword?: string | null;
  landing_page?: string | null;
  device?: string;
}

export async function insertLead(lead: Lead) {
  const { data, error } = await supabase.from('leads').insert([lead]);
  return { data, error };
}
