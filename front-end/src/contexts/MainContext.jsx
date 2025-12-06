import { createContext } from "react";
import { SidebarProvider } from "./sidebar/SidebarContext";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    return (
        <MainContext.Provider value={{ /* valores do contexto */ }}>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </MainContext.Provider>
    );
};
