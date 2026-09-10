import { ArrowLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

interface GameHeadProps {
    title: string;
    description: string;
}

export const GameHead = ({ title, description }: GameHeadProps) => {
    return (
        <div className="mb-16">
            <NavLink to="/games" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-green-600 mb-10 transition-colors">
                <ArrowLeft size={14} /> Voltar
            </NavLink>
            <h1 className="text-4xl md:text-5xl text-foreground mb-3 serif font-semibold">{title}</h1>
            <p className="text-muted-foreground text-sm italic">{description}</p>
        </div>
    )
}