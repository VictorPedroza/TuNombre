import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Mobile = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <button
                className="p-2 rounded-md md:hidden focus:outline-none text-primary-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaBars className="w-6 h-6" />
            </button>
            <ul
                className={`
                absolute right-0 m-2 w-64 bg-white border-1 border-black/20 shadow-md rounded-md flex flex-col py-2 z-50 md:hidden
                transition-all duration-300 origin-top
                ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
            `}
            >
                <li>
                    <NavLink to="/" className="block px-4 py-2 font-semibold text-primary-500 hover:bg-green-200" onClick={() => setIsOpen(false)}>Início</NavLink>
                </li>
                <li>
                    <hr className="w-[90%] ml-2" />
                </li>
                <li>
                    <NavLink to="/about" className="block px-4 py-2 font-semibold text-primary-500 hover:bg-green-200" onClick={() => setIsOpen(false)}>Sobre Nós</NavLink>
                </li>
            </ul>
        </>
    );
};

