import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// generated by shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// created by chatgpt
export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}


export function calculateWidth(windowWidth: number) {
    if (windowWidth <= 390) {
      return [300, 180];
    }

    if (windowWidth <= 680 && windowWidth > 450) {
      return [390, 230];
    }

    if (windowWidth <= 450) {
      return [350, 200];
    }
    
    return [640, 360];
}

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${time} - ${formattedDate}`;
}

export const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
