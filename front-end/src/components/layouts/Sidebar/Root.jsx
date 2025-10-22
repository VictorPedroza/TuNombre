import { motion } from 'motion/react';
import { useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { SidebarContext } from "@/contexts";

/**
 * Raiz do Componente da Barra Lateral
 * 
 * @author Victor Alexandre <victor242206@gmail.com>
 * @since 22/10/2025
 * @version 1.0.0
 * 
 * @param {React.JSX} children - Componente a ser renderizado dentro da Raiz
 * 
**/

export const Root = ({ children }) => {

    const { toggleSidebar, isSidebarOpen } = useContext(SidebarContext);

    return (
        <motion.aside
            className={`${isSidebarOpen ? "w-64" : "w-16"} h-full bg-white border-r border-gray-800/15 shadow-lg z-10 rounded-r-2xl px-3 py-2 flex flex-col items-center relative`}
            initial={{ width: 64 }}
            animate={{ width: isSidebarOpen ? 256 : 64 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <motion.button
                onClick={() => toggleSidebar()}
                className="absolute top-4 -right-4 w-7 h-7 bg-white shadow-md border-2 border-gray-200 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: isSidebarOpen ? 360 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {
                    isSidebarOpen
                        ? (<FaChevronLeft className="w-3 h-3" />)
                        : (<FaChevronRight className="w-3 h-3" />)
                }
            </motion.button>
            { children }
        </motion.aside>
    )
}