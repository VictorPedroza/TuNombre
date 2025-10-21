// Importação para Criação do Contexto
import { createContext } from "react";

import { NotificationProvider } from '../Notification/NotifficationContext';

// Main Context
export const MainContext = createContext();

// Main Provider
export function MainProvider({ children }) {
    return (
        <MainContext.Provider value={{}}>
            <NotificationProvider>
                {children}
            </NotificationProvider>
        </MainContext.Provider>
    )
}