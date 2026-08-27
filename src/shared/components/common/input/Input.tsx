import type { ReactNode } from "react";

export interface InputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    className?: string;
    suffix?: ReactNode;
    autoFocus?: boolean;
    textarea?: boolean;
    rows?: number;
}

export const Input = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder,
    className = "",
    suffix,
    autoFocus,
    textarea = false,
    rows = 4,
}: InputProps) => {

    return (
        <div className={`space-y-1.5 ${className}`}>
            {label && (
                <label className="block text-xs font-medium uppercase tracking-wide text-white/40">
                    {label}
                </label>
            )}

            <div className="flex w-full items-center overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors focus-within:border-emerald-600">
                {textarea ? (
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        rows={rows}
                        className={`w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 resize-none ${className}`}
                    />
                ) : (
                    <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type={type}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        className={`w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 ${className}`}
                    />
                )}

                {suffix && (
                    <div className="flex shrink-0 items-center pr-3 text-white/50">
                        {suffix}
                    </div>
                )}
            </div>
        </div>
    );
};