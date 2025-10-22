// Importação para Criação do Contexto
import { createContext } from "react";

import { NotificationProvider } from '../Notification/NotifficationContext';
import { SidebarProvider } from '../Sidebar/SidebarContext';

// Main Context
export const MainContext = createContext();

// Main Provider
export function MainProvider({ children }) {
    return (
        <MainContext.Provider value={{}}>
            <NotificationProvider>
                <SidebarProvider>
                    {children}
                </SidebarProvider>
            </NotificationProvider>
        </MainContext.Provider>
    )
}