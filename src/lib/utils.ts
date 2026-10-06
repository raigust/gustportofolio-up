<<<<<<< HEAD
import { clsx  } from "clsx";
import type {ClassValue} from "clsx";
=======
import { clsx, type ClassValue } from "clsx";
>>>>>>> a3b46a5e338e404a84131df6c3c725feacd87bb7
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
