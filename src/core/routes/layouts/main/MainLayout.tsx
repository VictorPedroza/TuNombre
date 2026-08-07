import { Footer, Header } from "@/shared/components";
import { Outlet } from "react-router-dom";

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
