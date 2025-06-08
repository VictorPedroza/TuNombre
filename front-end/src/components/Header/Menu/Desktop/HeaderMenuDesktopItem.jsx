import { NavLink } from "react-router-dom"

export const DesktopItem = ({ to, text }) => {
    return (
        <NavLink to={to} className="text-primary-500 font-bold text-xl  hover:underline">{text}</NavLink>
    )
}