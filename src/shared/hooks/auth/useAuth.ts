import { useContext } from "react";

import { AuthContext } from "@/core/contexts";

/**
 * Hook para utilização do contexto de autenticação
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-07-06
 * @version 1.0.0
 * 
 **/
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};