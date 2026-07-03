type InputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  suffix?: React.ReactNode;
  autoFocus?: boolean;
};

export const Input = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  suffix,
  autoFocus,
}: InputProps) => {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium tracking-widest uppercase text-foreground-muted">
        {label}
      </label>

      <div
        className="flex items-center justify-center rounded-lg"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "rgba(26, 26, 26, 0.08)",
        }}
      >
        <input
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          autoFocus={autoFocus}
          className="flex-1 px-4 py-3 bg-transparent text-sm text-slate-300 placeholder:text-muted-foreground outline-none"
        />
        {suffix && <div className="pr-3 flex-shrink-0">{suffix}</div>}
      </div>
    </div>
  );
};
