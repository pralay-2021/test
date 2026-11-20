// GitHub Pages-এ সাইট সাব-ফোল্ডারে (/test/) চলে, তাই "/france.jpg" লিখলে ছবি পাওয়া যায় না।
// এই helper ছবির path-এর আগে vite.config.ts-এর `base` বসিয়ে দেয়।
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
