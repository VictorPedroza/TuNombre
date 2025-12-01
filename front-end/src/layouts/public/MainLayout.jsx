import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return(
        <main>
            <h1>Layout</h1>
            <Outlet />
        </main>
    )
}