import { Route, Routes } from "react-router-dom";

import { Main } from "@app/layouts";
import { Home } from "@/shared/pages";
import { routes } from "@/config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path={routes.home.path} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
