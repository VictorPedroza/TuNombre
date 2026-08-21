import { useState } from "react";
import { AdminButton } from "@/shared/components/admin";
import { CheckBox } from "@/shared/components";

interface TimelineModalProps {
    closeModal: () => void;
}

export const TimelineModal = ({ closeModal }: TimelineModalProps) => {
    const [hasImage, setHasImage] = useState(false);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#111111] p-6 shadow-2xl">
                <h2 className="text-lg font-semibold text-white">
                    Novo Momento
                </h2>
                <p className="mt-1 text-sm text-white/50">
                    Adicione um novo momento
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
                            rows={5}
                            placeholder="Um pequeno texto sobre este momento"
                            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-600"
                        />
                    </div>

                    {/* Checkbox estilizado */}
                    <CheckBox
                        checked={hasImage}
                        onChange={setHasImage}
                        label="Adicionar imagem a esse momento"
                    />

                    {/* Campo renderizado condicionalmente */}
                    {hasImage && (
                        <div>
                            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/40">
                                Imagem (URL ou caminho no Storage)
                            </label>
                            <input
                                placeholder="https://..."
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-600"
                            />
                        </div>
                    )}
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <AdminButton label="Cancelar" onClick={closeModal} variant="outline" />
                    <AdminButton label="Salvar" onClick={() => alert("Sucess")} />
                </div>
            </div>
        </div>
    );
};