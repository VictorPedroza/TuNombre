import { NavLink } from "react-router-dom"

export const Desktop = () => {
    return (
        <nav className="hidden md:flex space-x-4">
            <NavLink to="/" className="text-primary-500 text-xl font-semibold hover:underline">Início</NavLink>
            <NavLink to="/about" className="text-primary-500 text-xl font-semibold hover:underline">Sobre Nós</NavLink>
        </nav>
    )
}