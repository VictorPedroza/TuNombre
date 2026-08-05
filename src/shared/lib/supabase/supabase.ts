import { createClient } from '@supabase/supabase-js';

import { environment } from '@/core/env';

export const supabase = createClient(environment.supabaseUrl, environment.supabasePublishableKey);