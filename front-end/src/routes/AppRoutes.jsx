import { Routes, Route } from 'react-router-dom';

import { MainLayout } from '@/layouts';

export const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<h1>Teste</h1>} />
                </Route>
            </Routes>
        </>
    )
}