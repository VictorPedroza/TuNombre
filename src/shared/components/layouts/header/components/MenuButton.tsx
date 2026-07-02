import { MenuIcon, XIcon } from "lucide-react";

type MenuButtonProps = {
    open: boolean;
    toggleMenu: () => void;
}

export const MenuButton = ({ open, toggleMenu }: MenuButtonProps) => {
  return (
    <button className="md:hidden p-2 text-green-600" onClick={toggleMenu}>
      {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
    </button>
  );
};
