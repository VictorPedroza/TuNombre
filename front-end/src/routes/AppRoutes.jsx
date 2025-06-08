import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layouts"
import { Main } from "@/pages"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Main />} />
            </Route>    
        </Routes>
    )
}