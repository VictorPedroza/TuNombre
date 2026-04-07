import { Header } from "@/shared/components";
import { Outlet } from "react-router-dom";

import { routes } from "@config/routes";

const MainLayout = () => {
  return (
    <div className="bg-zinc-50 w-screen h-screen">
      <Header>
        {Object.values(routes).map((route) => (
          <Header.Item
            key={route.title}
            icon={route.icon}
            text={route.title}
            to={route.path}
          />
        ))}
      </Header>
      
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
