import type { ReactNode } from "react";
import { AuthProvider } from "../auth/AuthProvider";

type MainContextProviderType = {
  children: ReactNode;
};

export const MainContextProvider = ({ children }: MainContextProviderType) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}