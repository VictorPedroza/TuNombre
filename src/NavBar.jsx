import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  const [isOpend, setIsOpend] = useState(false);

  const toggleMenu = () => {
    setIsOpend(!isOpend);
  };

  return (
    <nav>
      <header>
        <div className="logo">
          <h1>
            <span>Tu</span>
          </h1>
          <h1>Nombre</h1>
        </div>
        <div className="menuMobile">
          <button className="menu" onClick={toggleMenu}>
            <IoMenu size={30} />
          </button>
        </div>
      </header>

      <ul className={isOpend ? "open" : ""}>
        <li>
          <NavLink to="/">Início</NavLink>
        </li>
        <li>
          <NavLink to="/jogos">Jogos</NavLink>
        </li>
        <li>
          <NavLink to="/meses">Meses</NavLink>
        </li>
        <li>
          <NavLink to="/anos">Anos</NavLink>
        </li>
      </ul>
    </nav>
  );
}
