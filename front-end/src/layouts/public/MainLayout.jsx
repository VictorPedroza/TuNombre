import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";

import { Sidebar } from '@/components';
import { routes } from '@/routes';
import { SidebarContext } from '@/contexts';

/**
 * Layout Principal da Aplicação
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 01/12/2025
 * @version 1.0.1
**/
export const MainLayout = () => {
    const { isOpen, toggleSidebar } = useContext(SidebarContext);

    return (
        <main className='w-full h-full bg-gray-50 lg:rounded-2xl overflow-hidden shadow-xl flex'>
            <Sidebar.Root>
                <Sidebar.Head />
                <Sidebar.Navigation>
                    {routes.map((page, index) => (
                        <Sidebar.NavItem key={index} to={page.to} icon={page.icon} label={page.label} />
                    ))}
                </Sidebar.Navigation>
            </Sidebar.Root>
            <div className='w-full h-full flex flex-col'>
                <header className='w-full h-14 bg-white/90 border-b border-gray-100 flex items-center px-4 justify-between'>
                    <h1 className='text-xl font-semibold text-green-700'>Header</h1>
                    <button className='block sm:hidden text-4xl text-green-600' onClick={() => toggleSidebar()}>
                        {isOpen ? (<IoClose />) : (<IoMenu />)}
                    </button>
                </header>
                <div className='w-full h-full px-4 py-3'>
                    <Outlet />
                </div>
            </div>
        </main>
    )
}