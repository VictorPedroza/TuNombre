import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    function toggleSidebar() {
        setIsSidebarOpen((prev) => !prev);
    }

    return(
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            { children }
        </SidebarContext.Provider>
    )
}