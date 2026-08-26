type ButtonVariant = "default" | "success" | "error" | "outline"

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: ButtonVariant;
}

const styles: Record<ButtonVariant, string> = {
    default: "bg-slate-50 text-slate-900 hover:bg-slate-300",
    success: "bg-emerald-700 text-white hover:bg-emerald-600",
    outline: "border border-white/10 text-white/70 hover:bg-white/5",
    error: "border border-red-500/20 bg-red-500/10 text-red-300 transition-colors hover:bg-red-500/20"
}

/**
 * Componente global de botão
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-22
 * @version 1.0.1
 * 
 **/
export const Button = ({label, onClick, variant = "default"}: ButtonProps) => {
    return(
        <button
            onClick={onClick}
            className={`rounded-lg py-2 px-4 text-sm font-medium transition-colors disabled:opacity-50 ${styles[variant]}`}
        >
            {label}
        </button>
    )
}