import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";

import { DecorativeCard } from "./DecorativeCard";

type ImageProps = {
  src: string | null;
  alt?: string;
};

export function DecorativeCarousel({ images = [] }: { images: ImageProps[] }) {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  const items: ImageProps[] =
    images.length > 0
      ? images
      : Array.from({ length: 4 }, () => ({ src: null, alt: "" }));

  useEffect(() => {
    if (!trackRef.current) return;
    const width = trackRef.current.scrollWidth / 2;

    controlsRef.current = animate(x, [0, -width], {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    });

    return () => controlsRef.current?.stop();
  }, [items.length, x]);

  useEffect(() => {
    if (isPaused) {
      controlsRef.current?.pause();
    } else {
      controlsRef.current?.play();
    }
  }, [isPaused]);

  return (
    <div
      className="relative mt-16 -mx-6 overflow-x-hidden overflow-y-visible py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-20" />

      <motion.div ref={trackRef} style={{ x }} className="flex gap-10 px-6">
        {[...items].map((item, i) => (
          <DecorativeCard
            key={i}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </motion.div>
    </div>
  );
}
