import { useState } from "react";

/**
 * Página de Administração da Linha do Tempo
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-18
 * @version 1.0.0 
 * 
 **/
export const AdminTimelinePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }
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
                        onClick={() => openModal()}
                        className="flex shrink-0 items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                    >
                        <span className="text-base leading-none">+</span> Adicionar
                    </button>
                </div>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
                    <div className="grid grid-cols-[1fr_120px_100px_180px] gap-4 border-b border-white/10 px-6 py-3 text-xs font-medium uppercase tracking-wide text-white/40">
                        <span>Momento</span>
                        <span>Data</span>
                        <span>Ordem</span>
                        <span className="text-right">Ações</span>
                    </div>
                    <div className="px-6 py-10 text-center text-sm text-white/40">
                        Ainda não há momentos na linha do tempo. Adicione o primeiro.
                    </div>
                    <div className="px-6 py-3 text-xs text-white/30">
                        0 momentos no total
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                    <div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#111111] p-6 shadow-2xl">
                        <h2 className="text-lg font-semibold text-white">
                            Novo Momento
                        </h2>
                        <p className="mt-1 text-sm text-white/50">
                            Adicion eum novo momento
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="grid grid-cols-[1fr_90px] gap-3">
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/40">
                                        Data
                                    </label>
                                    <input
                                        placeholder="Ex: Março 2023"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-600"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/40">
                                        Emoji
                                    </label>
                                    <input
                                        placeholder="✨"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/40">
                                    Título
                                </label>
                                <input
                                    placeholder="Ex: Primeiro Olhar"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-600"
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/40">
                                    Descrição
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Um pequeno texto sobre este momento"
                                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-600"
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/40">
                                    Imagem (URL ou caminho no Storage)
                                </label>
                                <input
                                    placeholder="https://..."
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-600"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 disabled:opacity-50"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}