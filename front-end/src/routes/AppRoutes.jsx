import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layouts"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<div>Hello</div>} />
            </Route>    
        </Routes>
    )
}