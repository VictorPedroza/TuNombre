import { useId } from "react"

interface CheckBoxProps {
    id?: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckBox = ({ id, label, checked, onChange }: CheckBoxProps) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <label htmlFor={inputId} className="flex items-center gap-3 cursor-pointer group select-none">
            <div className="relative flex items-center justify-center">
                <input
                    type="checkbox"
                    id={inputId}
                    className="sr-only peer"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <div className="h-5 w-5 rounded-md border border-white/20 bg-white/5 transition-all peer-checked:border-green-600 peer-checked:bg-green-600 group-hover:border-white/40 peer-focus-visible:ring-2 peer-focus-visible:ring-green-600/50" />
                <svg
                    className="absolute h-3.5 w-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            {label && (
                <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                    {label}
                </span>
            )}
        </label>
    )
}