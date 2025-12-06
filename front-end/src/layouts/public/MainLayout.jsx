import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import { GoHome } from "react-icons/go";
/**
 * Layout Principal da Aplicação
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 01/12/2025
 * @version 1.0.1
**/
export const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <main className='w-full h-full bg-gray-50 lg:rounded-2xl overflow-hidden shadow-xl flex'>
            <aside className={`lg:min-w-64 min-w-48 bg-white shadow-md border-r border-gray-50 z-10 sm:block ${isOpen ? 'block absolute h-full' : 'hidden'} lg:block`}>
                <div className='w-full h-12 mt-2 flex items-center justify-center'>
                    <Link
                        to='/'
                        className='text-3xl font-bold text-green-600 flex'
                    >
                        <p>Tu</p>
                        <span className='text-red-600'>Nombre</span>
                    </Link>
                </div>
                <nav className='w-full mt-6'>
                    <ul className='w-full h-full flex flex-col px-8'>
                        <Link to='/' className='w-full text-slate-700 bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-0 px-4 py-2 rounded-2xl flex items-center gap-2 '>
                            <GoHome className='text-2xl' />
                            <p className='text-xl font-semibold'>Início</p>
                        </Link>
                    </ul>
                </nav>
                <div>
                    
                </div>
            </aside>
            <main className='w-full h-full flex flex-col'>
                <header className='w-full h-12 bg-white/90 border-b border-gray-100 flex items-center px-4 justify-between'>
                    <h1 className='text-xl font-semibold text-green-700'>Header</h1>
                    <button className='block sm:hidden text-4xl text-green-600' onClick={() => toggleSidebar()}>
                        {isOpen ? (<IoClose />) : (<IoMenu />)}
                    </button>
                </header>
                <div className='w-full h-full px-4 py-3'>
                    <Outlet />
                </div>
            </main>
        </main>
    )
}