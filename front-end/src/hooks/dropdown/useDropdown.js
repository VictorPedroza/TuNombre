import { useState, useEffect, useRef } from "react";

export const useDropdown = (initialIsOpen = false) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); 
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return {
        isOpen,
        setIsOpen,
        dropdownRef
    };
};
