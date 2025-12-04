import { Routes, Route } from 'react-router-dom';

import { AuthLayout, MainLayout } from '@/layouts';

/**
 * Controlador das Rotas da Aplicação 
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 01/12/2025
 * @version 1.0.1
**/
export const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<h1>Teste</h1>} />
                </Route>
                <Route path="auth" element={<AuthLayout />}>
                    <Route path="login" element={<h1>Login</h1>}/>
                </Route>
            </Routes>
        </>
    )
}