import { Outlet } from 'react-router-dom';

/**
 * Layout Principal da Aplicação
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 01/12/2025
 * @version 1.0.0
**/
export const MainLayout = () => {
    return(
        <main>
            <h1>Layout</h1>
            <Outlet />
        </main>
    )
}