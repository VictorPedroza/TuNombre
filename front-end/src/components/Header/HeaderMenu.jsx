import { Mobile, Desktop } from "./Menu"; // Ajuste o caminho conforme necessário

export const Menu = ({ isOpen, setIsOpen, dropdownRef }) => {
    return (
        <>
            <div className="relative" ref={dropdownRef}>
                <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <Desktop />
        </>
    )
}    