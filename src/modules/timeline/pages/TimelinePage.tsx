import { useTimelineEvents } from "@/modules/timeline/hooks/useTimelineEvents";
import { TimelineDesktop, TimelineHead, TimelineMobile } from "../components";

/**
 * Interface da Página da História
 *
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-14
 * @version 1.0.0
 *
 **/
export const TimelinePage = () => {
    const { events, loading, error } = useTimelineEvents();

    return (
        <div className="pt-16">
            <div className="max-w-4xl mx-auto px-6 py-14">
                {/* Head de História */}
                <TimelineHead />

                {loading && (
                    <div className="pt-16 flex justify-center items-center min-h-[200px]">
                        <p className="text-gray-500 animate-pulse">
                            Carregando momentos especiais...
                        </p>
                    </div>
                )}

                {error && (
                    <div className="pt-16 flex justify-center items-center min-h-[200px]">
                        <p className="text-red-500 italic">
                            Erro ao carregar a linha do tempo. Tente novamente mais tarde.
                        </p>
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <div className="hidden md:block">
                            <TimelineDesktop events={events} />
                        </div>

                        <div className="block md:hidden">
                            <TimelineMobile events={events} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
