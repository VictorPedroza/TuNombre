export * from "./games";
export * from "./wordle";

import type { ComponentType } from "react";

export interface GamePreview {
    title: string;
    description: string;
    preview: ComponentType;
    to: string;
}
