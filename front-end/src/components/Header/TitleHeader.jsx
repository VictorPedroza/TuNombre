import { Link } from "react-router-dom"

export const Title = () => {
    return (
        <div className="flex items-center">
            <Link to='/' className="text-xl font-bold text-primary-500">
                Tu<span className="text-secondary-500">Nombre</span>
            </Link>
        </div>
    )
}