import { useState } from "react";
import { supabase } from "@/shared/lib";
import { useNavigate } from "react-router-dom";

/**
 * Hook para Autenticação do Usuário
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-07-03
 * @version 1.0.0
 *  
 **/
export const useLoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: supabaseError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (supabaseError) throw supabaseError;

      console.log("Usuário logado: ", data);
      navigate("/admin");
      // eslint-disable-next-line
    } catch (err: any) {
      if (err.message === "Invalid login credentials") {
        setError("Email ou senha incorretos");
      } else {
        setError(err.message || "Erro ao realizar login");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  };
};
