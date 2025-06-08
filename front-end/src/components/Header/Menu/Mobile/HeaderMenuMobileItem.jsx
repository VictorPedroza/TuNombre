import { NavLink } from "react-router-dom"

export const MobileItem = ({ to, text, setIsOpen }) => {
    return (
        <li>
            <NavLink to={to} className="block px-4 py-2 text-blue-500 hover:bg-green-200" onClick={() => setIsOpen(false)}>{text}</NavLink>
        </li>

    )
}