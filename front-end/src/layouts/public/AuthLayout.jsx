import { Outlet } from 'react-router-dom';

/**
 * Layout de Autenticação da Aplicação
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 04/12/2025
 * @version 1.0.0
**/

export const AuthLayout = () => {
    return(
        <main>
            <h1>AuthLayout</h1>
            <Outlet />
        </main>
    )
}