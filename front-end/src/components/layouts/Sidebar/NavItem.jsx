import { Link } from "react-router-dom"

export const NavItem = ({ to='/', icon: Icon, label }) => {
    return (
        <Link to={to} className='w-full text-green-700 px-4 py-2 rounded-2xl flex items-center gap-2 '>
            <Icon className='text-2xl text-red-700' />
            <p className='text-xl font-semibold'>{label}</p>
        </Link>

    )
}