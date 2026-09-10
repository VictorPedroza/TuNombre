export const MemoryPreview = () => {
  const sample = ["🌹", "💌", "🍷", "🎶", "🍷", "💌", "🌹", "🎶"];
  const flipped = [0, 6];

  return (
    <div className="flex h-28 items-center justify-center">
      <div className="grid grid-cols-4 gap-[5px]">
        {sample.map((e, i) => {
          const isFlipped = flipped.includes(i);

          return (
            <div
              key={i}
              className={`flex h-6 w-6 items-center justify-center text-sm ${
                isFlipped
                  ? "bg-white text-inherit shadow-lg"
                  : "bg-[#C8372D] text-transparent"
              }`}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};
