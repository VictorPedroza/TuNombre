type AdminButtonVariant = "default" | "success" | "outline"

interface AdminButtonProps {
    label: string;
    onClick: () => void;
    variant?: AdminButtonVariant;
}

const styles: Record<AdminButtonVariant, string> = {
    default: "bg-slate-50 text-slate-900 hover:bg-slate-300",
    success: "bg-emerald-700 text-white hover:bg-emerald-600 disabled:opacity-50",
    outline: "border border-white/10 text-white/70 hover:bg-white/5 disabled:opacity-50"
}

export const AdminButton = ({label, onClick, variant = "default"}: AdminButtonProps) => {
    return(
        <button
            onClick={onClick}
            className={`rounded-lg py-2 px-4 text-sm font-medium transition-colors ${styles[variant]}`}
        >
            {label}
        </button>
    )
}