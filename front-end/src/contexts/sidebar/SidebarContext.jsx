import { createContext, useState } from "react";

/**
 * Contexto para gerenciamento da Barra Lateral (Sidebar) 
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 06/12/2025
 * @version 1.0.0
 * 
 * @param {boolean} isOpen - Estado atual da Barra Lateral (Verdadeiro/Falso)
 * @param {Function} toggleSidebar - Função que altera o estado da Barra Lateral (Verdadeiro/Falso)
 * 
**/ 
export const SidebarContext = createContext();

/**
 * Provedor do Contexto da Barra Lateral (Sidebar)
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 06/12/2024
 * @version 1.0.0
 *
 * @param {React.ReactNode} children - Componentes filhos que serão renderizados dentro do SidebarProvider
 * 
 * @returns {JSX.Element} O componente `SidebarProvider` com o contexto para os filhos 
 * 
**/
export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};
