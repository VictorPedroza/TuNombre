interface HomeQuoteProps {
    quote: string;
    description: string;
}

export const HomeQuote = ({ quote, description }: HomeQuoteProps) => {
    return (
        <section className="max-w-5xl mx-auto px-6 mb-14 mt-14">
            <div
                className="rounded-2xl bg-card border border-border p-8 md:p-12 text-center"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
            >
                <p
                    className="text-2xl md:text-3xl text-foreground leading-relaxed serif italic"
                    style={{ fontWeight: 400 }}
                >
                    {quote}
                </p>
                <p className="text-muted-foreground text-sm mt-5 tracking-wide">
                    {description}
                </p>
            </div>
        </section>
    )
}