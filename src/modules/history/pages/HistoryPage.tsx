/**
 *  Interface da Página da História
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-13
 * @version 1.0.0
 * 
 **/
export const HistoryPage = () => {
    return (
        <div className="pt-16">
            <div className="max-w-4xl mx-auto px-6 py-14">
                {/* Head de História */}
                <div className="mb-16 text-center">
                    <p className="text-md tracking-[0.2em] text-green-600 uppercase mb-5 font-semibold">la nostra storia</p>
                    <h1 className="text-4xl md:text-5xl text-foreground mb-3 serif font-semibold">Nossa <span className="text-red-600 serif" >História</span></h1>
                    <p className="text-foreground-muted text-sm italic">Cada momento que nos trouxe até aqui.</p>
                </div>
                
            </div>
        </div>
    )
}