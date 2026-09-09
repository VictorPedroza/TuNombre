export const PuzzlePiece = ({ value, image, onClick }: { value: number, image: string, onClick: () => void }) => {
    if (value === 0) {
        return <div style={{ width: 120, height: 120 }} className="bg-background"/>;
    }

    return (
        <div 
            onClick={onClick}
            className="hover:opacity-90"
            style={{
                width: 120, height: 120, cursor: "pointer",
                backgroundImage: `url(${image})`,
                backgroundSize: `${120 * 3}px ${120 * 3}px`,
                backgroundPosition: `-${((value - 1) % 3) * 120}px -${Math.floor((value - 1) / 3) * 120}px`,
                transition: "opacity 0.15s",
            }}
        />
    );
};