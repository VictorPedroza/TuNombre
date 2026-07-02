import { Route, Routes } from "react-router-dom";

import { routes } from "@/core/routes/routes";

import { NotFound } from "@/shared/components";

/**
 * AppRoutes - Componente responsável por renderizar as rotas da aplicação, incluindo layouts e páginas.
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-07-01
 * @version 1.0.0 
 * 
**/
export function AppRoutes() {
  return (
    <Routes>
      {/* Rotas da aplicação (Layouts + Pages) */}
      {routes.map((route) => {
        const Layout = route.component;
        return (
          <Route key={route.path} path={route.path} element={<Layout />}>
            {/** Mapeamento das Rotas **/}
            {route.children?.map((child) => {
              const Child = child.component;
              return (
                <Route
                  key={child.path || "index"}
                  index={child.path === ""}
                  path={child.path || undefined}
                  element={<Child />}
                />
              );
            })}
          </Route>
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
