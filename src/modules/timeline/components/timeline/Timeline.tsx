import { TimelineDesktop, TimelineMobile } from "@modules/timeline/components"
import { useMoments } from "@modules/timeline/hooks";

export const Timeline = () => {
    const { events, loading, error } = useMoments();

    return (
        <>
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
                    <TimelineDesktop events={events} />
                    <TimelineMobile events={events} />
                </>
            )}
        </>
    )
}