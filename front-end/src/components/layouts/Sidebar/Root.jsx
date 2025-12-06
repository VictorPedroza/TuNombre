import { SidebarContext } from "@/contexts"
import { useContext } from "react"

/**
 * Corpo da Barra Lateral (Sidebar)
 * 
 * Este componente representa a Barra Lateral da Aplicação. Ele utiliza o `SidebarContext` para gerenciar o estado de 
 * exibição da Barra (Aberta/Fechada), alterando sua visibilidade com base no valor de `isOpen`.
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 06/12/2025
 * @version 1.0.0
 * 
 * @param {React.ReactNode} children - Componentes filhos que serão renderizados dentro do Corpo
 * 
 * @returns {JSX.Element} O componente `Root`, que representa a Barra Lateral (Sidebar)
 * 
**/
export const Root = ({ children }) => {
    const { isOpen } = useContext(SidebarContext);

    return (
        <aside className={`lg:min-w-64 min-w-48 bg-white shadow-md border-r border-gray-50 z-10 sm:block ${isOpen ? 'block absolute h-full' : 'hidden'} lg:block`}>
            { children }
            <footer>
            </footer>
        </aside>
    )
}