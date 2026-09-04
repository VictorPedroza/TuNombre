import { useState } from "react";
import { useMoments } from "@modules/timeline/hooks";
import { TimelineModal } from "./TimelineModal";
import { type TimelineEvent } from "@modules/timeline/constants";
import { Button } from "@/shared/components";

export const TimelineTable = () => {
    const { events, loading, deleteTimelineEvent, loadMoments } = useMoments();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventToEdit, setEventToEdit] = useState<TimelineEvent | null>(null);

    const handleEdit = (event: TimelineEvent) => {
        setEventToEdit(event);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Tem certeza que deseja excluir este momento?")) {
            await deleteTimelineEvent({ id });
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEventToEdit(null);
    };

    return (
        <>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs font-medium uppercase tracking-wide text-white/40 sm:px-6">
                    <span>Linha do tempo</span>
                    <div className="flex items-center gap-4">
                        <span>{events.length} momentos</span>
                    </div>
                </div>

                {!loading && events.length === 0 && (
                    <div className="px-4 py-10 text-center text-sm text-white/40 sm:px-6">
                        Ainda não há momentos na linha do tempo. Adicione o primeiro.
                    </div>
                )}

                {loading && (
                    <div className="px-4 py-12 text-center text-sm text-white/40 sm:px-6">
                        A carregar momentos...
                    </div>
                )}

                {!loading &&
                    events.map((event, index) => (
                        <div
                            key={event.id}
                            className="flex flex-col gap-4 border-b border-white/5 px-4 py-5 transition-colors hover:bg-white/[0.02] last:border-b-0 sm:flex-row sm:items-start sm:gap-4 sm:px-6"
                        >
                            <div className="flex items-start gap-4">
                                {event.image ? (
                                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-24 sm:w-24">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl sm:h-24 sm:w-24 sm:text-3xl">
                                        {event.emoji}
                                    </div>
                                )}

                                <div className="min-w-0 flex-1 pt-1 sm:hidden">
                                    <p className="truncate text-[15px] font-semibold text-white">
                                        {event.image && (
                                            <span className="mr-1.5">{event.emoji}</span>
                                        )}
                                        {event.title}
                                    </p>

                                    <div className="mt-2 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/50">
                                            {event.date}
                                        </span>
                                        <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-mono text-white/30">
                                            #{index + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Container principal das informações no desktop */}
                            <div className="hidden min-w-0 flex-1 pt-1 sm:block">
                                <p className="truncate text-[15px] font-semibold text-white">
                                    {event.image && (
                                        <span className="mr-1.5">{event.emoji}</span>
                                    )}
                                    {event.title}
                                </p>

                                {event.description && (
                                    <p className="mt-1 text-sm leading-relaxed text-white/50">
                                        {event.description}
                                    </p>
                                )}

                                <div className="mt-3 flex items-center gap-2">
                                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/50">
                                        {event.date}
                                    </span>
                                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-mono text-white/30">
                                        #{index + 1}
                                    </span>
                                </div>
                            </div>

                            {event.description && (
                                <p className="text-sm leading-relaxed text-white/50 sm:hidden">
                                    {event.description}
                                </p>
                            )}

                            {/* Botões de Ação (Editar e Excluir) */}
                            <div className="mt-2 flex items-center gap-4 sm:ml-auto sm:mt-1 sm:flex-col sm:gap-2">
                                <Button
                                    label="Editar"
                                    onClick={() => handleEdit(event)}
                                    variant="outline"
                                />
                                <Button
                                    label="Apagar"
                                    onClick={() => handleDelete(event.id)}
                                    variant="error"

                                />
                            </div>
                        </div>
                    ))}
            </div>
            {isModalOpen && (
                <TimelineModal
                    closeModal={handleCloseModal}
                    eventToEdit={eventToEdit}
                    onSuccess={loadMoments}
                />
            )}
        </>
    );
};