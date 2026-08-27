import { useState } from "react";
import { Button, Input } from "@/shared/components/";
import { CheckBox } from "@/shared/components/common/check-box/CheckBox";
import { useMoments } from "@timeline/hooks";

interface TimelineModalProps {
    closeModal: () => void;
}

export const TimelineModal = ({ closeModal }: TimelineModalProps) => {
    const { uploadTimelineImage } = useMoments();

    const [hasImage, setHasImage] = useState(false);

    const [form, setForm] = useState({
        date: "",
        title: "",
        description: "",
        emoji: "✨",
        image: null as File | null
    });

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        setForm((prev) => ({
            ...prev,
            image: file,
        }));
    }

    const handleSaveTimelineEvent = async () => {
        let finalImagePath = "";

        try {
            if(hasImage) {
                if(form.image) {
                    const uploadedPath = await uploadTimelineImage(form.image);

                    if(!uploadedPath) return;
                    finalImagePath = uploadedPath;
                } else {
                    return;
                }
            }

            console.log(finalImagePath);
        } catch (err) {
            console.error(err);
        }
    }

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
                                Imagem do Momento
                            </label>

                            {form.image && (
                                <div className="mb-3 h-32 w-48 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                                    <img
                                        src={URL.createObjectURL(form.image)}
                                        alt="Preview"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white file:mr-4 file:rounded-md file:border-0 file:bg-emerald-700 file:px-3 file:py-1 file:text-xs file:font-medium file:text-white hover:file:bg-emerald-600 outline-none focus:border-emerald-600"
                                onChange={handleImageChange}
                            />
                        </div>

                    )}
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <Button label="Cancelar" onClick={closeModal} variant="outline" />
                    <Button label="Salvar" onClick={handleSaveTimelineEvent} variant="success" />
                </div>
            </div>
        </div>
    );
};