import type { Mode, Theme } from "./vo";

export interface User {
    id: string;
    name: string;
    email: string;
    createDate: number;
    theme: keyof typeof Theme;
    mode: keyof typeof Mode;
    removed: boolean;
}
