/**
 * Página de Administração da Linha do Tempo
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-18
 * @version 1.0.0 
 * 
 **/
export const AdminTimelinePage = () => {
    return (
        <div className="min-h-screen px-6 py-10 text-white sm:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-white">
                            Linha do Tempo
                        </h1>
                        <p className="mt-1 text-sm text-white/50">
                            Gerenciamento dos nossos momentos especiais.
                        </p>
                    </div>
                    <button
                        className="flex shrink-0 items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                    >
                        <span className="text-base leading-none">+</span> Adicionar
                    </button>
                </div>
            </div>
        </div>
    )
}