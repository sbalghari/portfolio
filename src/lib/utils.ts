import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { TAG_COLORS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashIdx = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % TAG_COLORS.length;
};
