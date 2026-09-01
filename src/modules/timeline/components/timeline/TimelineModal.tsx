import { useState } from "react";
import { Button, Input } from "@/shared/components/";
import { CheckBox } from "@/shared/components/common/check-box/CheckBox";
import { useMoments } from "@timeline/hooks";
import { type TimelineEvent } from "@timeline/constants"; // Ajuste o caminho do seu type

interface TimelineModalProps {
    closeModal: () => void;
    eventToEdit?: TimelineEvent | null;
    onSuccess?: () => void;
}

export const TimelineModal = ({ closeModal, eventToEdit, onSuccess }: TimelineModalProps) => {
    const { uploadTimelineImage, saveTimelineEvent, updateTimelineEvent } = useMoments();

    // Inicia como true se o evento tiver imagem
    const [hasImage, setHasImage] = useState(!!eventToEdit?.image);

    // Inicia com os dados do evento (se for edição)
    const [form, setForm] = useState({
        date: eventToEdit?.date || "",
        title: eventToEdit?.title || "",
        description: eventToEdit?.description || "",
        emoji: eventToEdit?.emoji || "✨",
        image: null as File | null,
    });

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        setForm((prev) => ({ ...prev, image: file }));
    };

    const handleSaveTimelineEvent = async () => {
        let finalImagePath = eventToEdit?.image || "";

        try {
            if (hasImage) {
                if (form.image) {
                    // Se o usuário selecionou uma NOVA imagem, faz o upload
                    const uploadedPath = await uploadTimelineImage(form.image);

                    if (!uploadedPath) {
                        alert("Erro ao fazer upload da imagem.");
                        return;
                    }
                    finalImagePath = uploadedPath;
                }
                // ATENÇÃO: Não coloque 'else { return }' aqui! 
                // Se a pessoa quer manter a imagem antiga, form.image é null e ele passa direto.
            } else {
                // Se o usuário desmarcou a caixa de imagem, removemos do banco
                finalImagePath = "";
            }

            let success = false;

            if (eventToEdit) {
                // MODO EDIÇÃO
                success = await updateTimelineEvent({
                    id: eventToEdit.id,
                    date: form.date,
                    title: form.title,
                    description: form.description,
                    emoji: form.emoji,
                    image: finalImagePath,
                });
            } else {
                // MODO CRIAÇÃO
                success = await saveTimelineEvent({
                    date: form.date,
                    title: form.title,
                    description: form.description,
                    emoji: form.emoji,
                    imageUrl: finalImagePath,
                });
            }

            // SÓ fecha o modal se a ação no Supabase deu certo
            if (success) {
                if (onSuccess) onSuccess(); 
                closeModal();
            } else {
                alert("Erro ao salvar! Verifique o console (F12) para ver o erro do Supabase.");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#111111] p-6 shadow-2xl">
                <h2 className="text-lg font-semibold text-white">
                    {eventToEdit ? "Editar Momento" : "Novo Momento"}
                </h2>
                <p className="mt-1 text-sm text-white/50">
                    {eventToEdit ? "Modifique os detalhes deste momento" : "Adicione um novo momento"}
                </p>

                <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-[1fr_90px] gap-3">
                        <div>
                            <Input
                                label="Data"
                                placeholder="Ex: Março 2025"
                                value={form.date}
                                onChange={(value) => setForm((prev) => ({ ...prev, date: value }))}
                            />
                        </div>
                        <div>
                            <Input
                                label="Emoji"
                                value={form.emoji}
                                onChange={(value) => setForm((prev) => ({ ...prev, emoji: value }))}
                                className="text-center"
                            />
                        </div>
                    </div>

                    <div>
                        <Input
                            label="Titulo"
                            placeholder="Ex: Primeiro Olhar"
                            value={form.title}
                            onChange={(value) => setForm((prev) => ({ ...prev, title: value }))}
                        />
                    </div>

                    <div>
                        <Input
                            label="Descrição"
                            placeholder="Um pequeno texto sobre nosso momento..."
                            value={form.description}
                            onChange={(value) => setForm((prev) => ({ ...prev, description: value }))}
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

                            {/* Mostra o preview da nova imagem selecionada OU da imagem que já estava no banco */}
                            {(form.image || eventToEdit?.image) && (
                                <div className="mb-3 h-32 w-48 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                                    <img
                                        src={form.image ? URL.createObjectURL(form.image) : eventToEdit?.image}
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