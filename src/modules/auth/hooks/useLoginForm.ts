import { useState } from "react";
import { supabase } from "@/shared/lib";

export const useLoginForm = () => {
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
      alert("Usuário logado com sucesso");
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
