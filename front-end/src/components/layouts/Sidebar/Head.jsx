import { SidebarContext } from '@/contexts';
import { motion } from 'motion/react';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa6';

/**
 * Cabeçalho da Barra Lateral  
 * 
 * @author Victor Alexandre <victor242206@gmail.com>
 * @since 22/10/2025
 * @version 1.0.0
 *  
**/

export const Head = () => {
    
    const { isSidebarOpen } = useContext(SidebarContext);
    
    return (
        <div className="w-full h-12 flex items-center justify-center gap-2 cursor-pointer" >
            <FaHeart className="w-8 h-8 text-green-600" />
            {
                isSidebarOpen
                    ? (<motion.h1
                        animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-bold text-2xl text-green-600 text-shadow"
                    >
                        Tu<span className="text-red-500">Nombre</span>
                    </motion.h1>)
                    : ("")
            }
        </div>
    )
}