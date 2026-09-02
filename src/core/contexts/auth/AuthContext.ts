import { createContext } from "react";

import type { User } from "@supabase/supabase-js";

/**
 * Contexto de Autenticação do Usuário
 * 
 * @param user - Objeto do usuário autenticado
 * @param loading - Indica se o estado de autenticação está sendo carregado
 * @param logout - Função para deslogar o usuário
 * 
 **/
interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
