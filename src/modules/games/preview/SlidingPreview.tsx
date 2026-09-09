export const SlidingPreview = () => {
    const tiles = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="flex h-24 items-center justify-center">
            <div className="grid grid-cols-3 gap-0.5">
                {tiles.map((index) => (
                    <div
                        key={index}
                        className="h-[22px] w-[22px] border border-black/10 bg-white"
                    />
                ))}
            </div>
        </div>
    );
};
