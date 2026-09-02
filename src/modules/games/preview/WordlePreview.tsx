export const WordlePreview = () => {
    const rows: (string | null)[][] = [
        [null, null, null, null, null],
        ["green", "gray", "red", null, null],
        [null, null, null, null, null],
    ];

    const colors: Record<string, string> = {
        green: "bg-green-500",
        gray: "bg-foreground",
        red: "bg-red-500",
    };

    return (
        <div className="flex h-24 flex-col items-center justify-center gap-1">
            {rows.map((row, ri) => (
                <div key={ri} className="flex gap-1">
                    {row.map((color, index) => (
                        <div
                            key={index}
                            className={`h-5 w-5 rounded-[3px] ${color ? colors[color] : "bg-white"
                                } ${color
                                    ? "border-transparent"
                                    : "border-[1.5px] border-[rgba(26,26,26,0.14)]"
                                }`}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
