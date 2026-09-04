import { useState } from "react";
import { Button } from "@shared/components";
import { TimelineModal, TimelineTable } from "@modules/timeline/components";

export const AdminTimelinePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <div>
            {/* HEADER */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-white">
                        Linha do tempo
                    </h1>

                    <p className="mt-1 text-sm text-white/50">
                        Gerencie os momentos especiais.
                    </p>
                </div>

                <Button
                    label="Novo Momento"
                    onClick={() => openModal()}
                    variant="success"
                />
            </div>

            <TimelineTable />

            {isModalOpen && (
                <TimelineModal
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};
