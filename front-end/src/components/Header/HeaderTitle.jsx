import { Link } from "react-router-dom";

export const Title = () => {
    return (
        <div className="flex items-center">
            <Link to='/' className="text-2xl font-bold text-primary-500">
                <p className="text-shadow-md">Tu<span className="text-secondary-500">Nombre</span></p>
            </Link>
        </div>
    );
};