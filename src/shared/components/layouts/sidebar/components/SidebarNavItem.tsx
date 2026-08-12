import { useLocation, useNavigate } from "react-router-dom";

interface SidebarNavItemProps {
  label: string;
  path: string;
  icon?: React.ElementType;
  onClose: () => void;
}

export const SidebarNavItem = ({
  label,
  path,
  icon: Icon,
  onClose,
}: SidebarNavItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const fullPath = path === "" ? "/admin" : `/admin/${path}`;
  const isActive = location.pathname === fullPath;

  const handleClick = () => {
    navigate(fullPath);
    onClose();
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 ${
        isActive
          ? "text-green-500 font-medium bg-[#3d6b4f]/15"
          : "text-foreground-muted hover:text-background"
      }`}
    >
      {Icon && (
        <span
          className={`flex-shrink-0 transition-colors ${
            isActive ? "text-green-500" : "text-foreground-muted"
          }`}
        >
          <Icon className="w-6 h-6" />
        </span>
      )}

      <span>{label}</span>

      {isActive && (
        <div className="ml-auto w-1 h-1 rounded-full bg-green-400/80" />
      )}
    </button>
  );
};
