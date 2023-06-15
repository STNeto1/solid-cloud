import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const parseTextInput = (val: string, def = 0) => {
  const parsed = parseFloat(val);
  if (isNaN(parsed)) return def;
  return parsed;
};

export const formatCurrency = (val: number) => {
  return val.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
