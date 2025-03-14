import { NavLink } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="waves">
                <div className="wave" id="wave1" ></div>
                <div className="wave" id="wave2" ></div>
                <div className="wave" id="wave3" ></div>
                <div className="wave" id="wave4" ></div>
            </div>
            <ul className="social-icon">
                <li>
                    <a href="#">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Footer;