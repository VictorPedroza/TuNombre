import { useWordle } from "@/modules/games/hooks";

interface WordleHistoryProps {
    setIsOpen: (isOpen: boolean) => void;
}

export const WordleHistory = ({ setIsOpen }: WordleHistoryProps) => {
    const { restartsUsed, history } = useWordle();

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-500/50 p-4 backdrop-blur-[2px]">
            <div className="w-full max-w-lg rounded-3xl bg-[#FDFAF5] p-8 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-foreground">Histórico</h2>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-muted-foreground hover:text-foreground underline"
                    >
                        Fechar
                    </button>
                </div>

                {history.length === 0 ? (
                    <p className="text-sm text-foreground">Nenhuma partida finalizada.</p>
                ) : (
                    <>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Reinícios usados hoje: {restartsUsed} de 3.
                        </p>
                        <div className="max-h-80 space-y-3 overflow-y-auto">
                            {[...history].reverse().map((entry, index) => (
                                <div
                                    key={`${entry.playedAt}-${index}`}
                                    className="flex items-center justify-between border-b border-border pb-3 text-sm"
                                >
                                    <div>
                                        <p className={`${entry.status === "won" ? "text-green-600" : "text-red-600"}`}>
                                            {entry.status === "won" ? "Vitória" : "Derrota"}
                                        </p>
                                    </div>
                                    <span className="text-muted-foreground">
                                        {entry.guesses} {entry.guesses === 1 ? "tentativa" : "tentativas"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}