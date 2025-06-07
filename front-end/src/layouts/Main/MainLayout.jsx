import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header } from '@/components';

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
                <Header.Title />
                <Header.Menu isOpen={isOpen} setIsOpen={setIsOpen} dropdownRef={dropdownRef} />
            </Header.Root>
            <Outlet />
        </div>
    );
};