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
      
      <main className="w-full min-h-screen p-4 bg-zinc-50">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
