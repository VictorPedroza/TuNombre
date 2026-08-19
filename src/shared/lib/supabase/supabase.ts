import { createClient } from '@supabase/supabase-js';

import { environment } from '@/core/env';

/**
 * Instância do supabase
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com
 * @since 2026-07-03
 * @version 1.0.0
 * 
 **/
export const supabase = createClient(environment.supabaseUrl, environment.supabasePublishableKey);