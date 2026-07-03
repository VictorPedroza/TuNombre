import { useState } from "react";
import { Input } from "../../components";
import { Eye, EyeOff } from "lucide-react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form>
      <div
        className="rounded-2xl border p-8 space-y-5"
        style={{
          border: "rgba(26, 26, 26, 0.08)",
          background: "#1C1C1C",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        <Input
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="Digite o email"
          autoFocus
        />
        <Input
          label="Senha"
          value={password}
          type={ showPassword ? "text" : "password"}
          onChange={setPassword}
          placeholder="Digite a senha"
          autoFocus
          suffix={
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="text-foreground-muted transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />
        <button
          type="submit"
          className="w-full py-3.5 rounded-lg text-sm font-medium text-slate-300 transition-all duration-200 hover:opacity-90 disabled:opacity-60 mt-2"
          style={{
            background: "#3D6B4F",
            boxShadow: "0 4px 20px rgba(61,107,79,0.3)",
          }}
        >
          Entrar
        </button>
      </div>
    </form>
  );
};
