import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import { useDropdown } from "@/hooks";

export const MainLayout = () => {
    const { isOpen, setIsOpen, dropdownRef } = useDropdown();

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