import { Outlet } from "react-router-dom";
import { AuthHead } from "./components";

/**
 * Layout de Autenticalçao da Aplicação 
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-07-03
 * @version 1.0.0
 * 
 **/
export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#121212]">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(61,107,79,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-sm">
        <AuthHead />
        <Outlet />
      </div>
    </div>
  );
};
