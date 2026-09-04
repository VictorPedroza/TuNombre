import { games } from "@modules/games/constants"

import { GameCard } from "../components/"

export const GamePage = () => {
    return (
        <div className="pt-10">
            <div className="max-w-4xl mx-auto px-6 py-14">
                {/* Cabeçalho */}
                <div className="mb-16">
                    <p className="text-md tracking-[0.2em] text-green-600 uppercase mb-5 font-semibold">giochiamo insieme</p>
                    <h1 className="text-4xl md:text-5xl text-foreground mb-3 serif font-semibold">Centro de <span className="text-red-600 serif" >Jogos</span></h1>
                    <p className="text-foreground-muted text-sm italic">Minijogos feitos especialmente para nós. Escolha um e divirta-se..</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {games.map((game, index) => (
                        <GameCard key={index} {...game} />
                    ))}
                </div>
            </div>
        </div>
    )
}