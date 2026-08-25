import { routes } from "@/core/routes/routes";
import { Menu } from "lucide-react"
import { useLocation } from "react-router-dom";

interface AdminHeaderProps {
    onOpenMenu: () => void;
}

export const AdminHeader = ({ onOpenMenu }: AdminHeaderProps) => {
    const location = useLocation();

    const layout = routes.find((route) => route.path === "/admin");

    const currentRoute = layout?.children.find((child) => {
        const fullPath = child.path === "" ? "/admin" : `/admin/${child.path}`;
        return fullPath === location.pathname;
    })

    const pageTitle = currentRoute?.label || "Overview";

    return (
        <header className="h-16 border-b border-foreground-muted/10 flex items-center gap-4 px-6 flex-shrink-0 bg-[#121212]">
            <button
                className="lg:hidden text-foreground-muted hover:text-background transition-colors"
                onClick={onOpenMenu}
            >
                <Menu size={20} />
            </button>
            <h1 className="text-base font-medium text-background">{pageTitle}</h1>
        </header>

    )
}