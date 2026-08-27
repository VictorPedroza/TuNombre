import { useState } from "react";
import { Button, Input } from "@/shared/components/";
import { CheckBox } from "@/shared/components/common/check-box/CheckBox";

interface TimelineModalProps {
    closeModal: () => void;
}

export const TimelineModal = ({ closeModal }: TimelineModalProps) => {
    const [hasImage, setHasImage] = useState(false);

    const [form, setForm] = useState({
        date: "",
        title: "",
        description: "",
        emoji: "✨"
    });


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
                            <Input
                                label="Data"
                                placeholder="Ex: Março 2025"
                                value={form.date}
                                onChange={(value) =>
                                    setForm((prev) => ({ ...prev, date: value }))
                                }
                            />
                        </div>
                        <div>
                            <Input
                                label="Emoji"
                                value={form.emoji}
                                onChange={(value) =>
                                    setForm((prev) => ({ ...prev, emoji: value }))
                                }
                                className="text-center"
                            />
                        </div>
                    </div>

                    <div>
                        <Input
                            label="Titulo"
                            placeholder="Ex: Primeiro Olhar"
                            value={form.title}
                            onChange={(value) =>
                                setForm((prev) => ({ ...prev, title: value }))
                            }
                        />
                    </div>

                    <div>
                        <Input
                            label="Descrição"
                            placeholder="Um pequeno texto sobre nosso momento..."
                            value={form.title}
                            onChange={(value) =>
                                setForm((prev) => ({ ...prev, description: value }))
                            }
                            textarea
                        />
                    </div>

                    <CheckBox
                        checked={hasImage}
                        onChange={setHasImage}
                        label="Adicionar imagem a esse momento"
                    />

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
                    <Button label="Cancelar" onClick={closeModal} variant="outline" />
                    <Button label="Salvar" onClick={() => alert("Sucess")} variant="success" />
                </div>
            </div>
        </div>
    );
};