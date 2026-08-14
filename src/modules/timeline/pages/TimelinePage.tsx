
import type { TimelineEvent } from "@/shared/types";
import { TimelineDesktop, TimelineHead, TimelineMobile } from "../components";

const timelineEvents: TimelineEvent[] = [
    { date: "Março 2023", title: "Primeiro Olhar", description: "O universo conspirou para que nossos caminhos se cruzassem. Naquele momento, algo mudou para sempre.", emoji: "✨", image: "/images/photo-1518199266791-5375a83190b7.jpg" },
    { date: "Abril 2023", title: "Primeiro Beijo", description: "Sob uma noite estrelada, com a cidade como cenário, aprendi o que significa ter papillons no coração.", emoji: "💋", image: "/images/photo-1474552226712-ac0f0961a954.jpg" },
    { date: "Junho 2023", title: "Primeira Viagem", description: "Malas, risadas e a certeza de que viajar ao seu lado é sempre a melhor decisão possível.", emoji: "✈️", image: "/images/photo-1476514525535-07fb3b4ae5f1.jpg" },
    { date: "Setembro 2023", title: "Seis Meses", description: "Brindamos ao amor, ao futuro e a tudo o que ainda está por vir. Com taças erguidas e corações plenos.", emoji: "🥂", image: "/images/photo-1510812431401-41d2bd2722f3.jpg" },
    { date: "Dezembro 2023", title: "Primeiro Natal", description: "Luzes, frio, chocolate quente e você do meu lado. O melhor presente que poderia ter ganho.", emoji: "🎄", image: "/images/photo-1512389142860-9c449e58a543.jpg" },
    { date: "Março 2024", title: "Um Ano de Amor", description: "365 dias de aventuras, abraços e descobertas. Que venham mais 365, e depois mais 365...", emoji: "🎉", image: "/images/photo-1464366400600-7168b8af9bc3.jpg" },
];

/**
 *  Interface da Página da História
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-13
 * @version 1.0.0
 * 
 **/
export const TimelinePage = () => {
    return (
        <div className="pt-16">
            <div className="max-w-4xl mx-auto px-6 py-14">
                {/* Head de História */}
                <TimelineHead />

                {/* Linha do Tempo - Desktop */}
                <TimelineDesktop events={timelineEvents} />
                {/* Linha do Tempo - Mobile */}
                <TimelineMobile events={timelineEvents} />
            </div>
        </div>
    )
}