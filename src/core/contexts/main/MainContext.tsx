import type { ReactNode } from "react";

import { AuthProvider } from "@core/contexts";

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