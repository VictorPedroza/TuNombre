import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#121212]">
        Admin Layout
        <Outlet />
    </div>
  );
};
