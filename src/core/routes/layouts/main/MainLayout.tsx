import { Outlet } from "react-router-dom";

import { Footer, Header } from "@shared/components";

/**
 * Layout Principal da Aplicação 
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-07-03
 * @version 1.0.0
 * 
 **/
export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
