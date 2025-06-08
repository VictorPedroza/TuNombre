import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components";

export const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    // Fecha o menu ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
            <Header.Root>
                {/* Titulo */}
                <Header.Title />
                <Header.Menu>
                    {/* Menu Mobile */}
                    <Header.Mobile dropdownRef={dropdownRef}>
                        <Header.Button setIsOpen={setIsOpen} isOpen={isOpen} />
                        <Header.MobileList isOpen={isOpen}>
                            <Header.MobileItem to="/" text="Início" setIsOpen={setIsOpen} />
                            <Header.MobileItem to="/About" text="Sobre" setIsOpen={setIsOpen} />
                        </Header.MobileList>
                    </Header.Mobile>
                    {/* Menu Desktop */}
                    <Header.Desktop>
                        <Header.DesktopItem to="/" text="Início" />
                        <Header.DesktopItem to="/about" text="Sobre" />
                    </Header.Desktop>
                </Header.Menu>
            </Header.Root>
            <Outlet />
        </div>
    );
};