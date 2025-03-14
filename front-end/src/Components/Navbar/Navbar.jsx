import { useState } from "react";
import { NavLink } from 'react-router-dom';

import './Navbar.css';

import { RiDashboardFill } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => setIsOpen(!isOpen);

    return(
        <>
            <div className="tittle-header">
                <h1>
                    Tu<span>Nombre</span>
                </h1>
                <button onClick={openMenu}>
                    <RiDashboardFill />
                </button>
            </div>
            <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <NavLink to='/'>
                            <h1>Início</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/HelloWorld'>
                            <h1>Tradutor</h1>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;