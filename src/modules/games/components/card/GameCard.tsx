import type { GamePreview } from "@games/constants";

export const GameCard = ({
    title,
    description,
    preview: Preview,
}: GamePreview) => {
    return (
        <button
            className="text-left rounded-2xl bg-slate-50 shadow border border-border overflow-hidden transition-all duration-200 hover:-translate-y-0.5 group"
        >
            <div className="border-b border-border bg-slate-100/30">
                <Preview />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-semibold text-green-600 mb-1 serif">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {description}
                </p>
                <span className="text-sm text-primary font-medium group-hover:underline group-hover:text-red-500 underline-offset-2">
                    Jogar →
                </span>
            </div>
        </button>
    );
};
