import { SidebarContext } from "@/contexts"
import { useContext } from "react"

export const Root = ({ children }) => {
    const { isOpen } = useContext(SidebarContext);

    return (
        <aside className={`lg:min-w-64 min-w-48 bg-white shadow-md border-r border-gray-50 z-10 sm:block ${isOpen ? 'block absolute h-full' : 'hidden'} lg:block`}>
            { children }
            <footer>
            </footer>
        </aside>
    )
}