import { FaBars } from "react-icons/fa6"

export const Button = ({ setIsOpen, isOpen }) => {
    return (
        <button
            className="p-2 rounded-md md:hidden focus:outline-none text-primary-500"
            onClick={() => setIsOpen(!isOpen)}
        >
            <FaBars className="w-6 h-6" />
        </button>
    )
}