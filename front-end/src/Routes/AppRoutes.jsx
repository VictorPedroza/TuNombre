import { Routes, Route } from 'react-router-dom';

import { Home, HelloWorld } from '../Pages';

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/HelloWorld' element={<HelloWorld/>}/>
            </Routes>
        </>
    )
}