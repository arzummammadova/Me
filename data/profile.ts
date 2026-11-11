export const profile = {
  name: "Arzu Mammadova",
  email: "arzuuimammadova@gmail.com",
  phone: "+994 55 514 01 99",
  linkedin: "https://www.linkedin.com/in/arzu-mammadova-892b25269/",
  github: "https://github.com/arzummammadova",
  cv: "/documents/Arzu-Mammadova-CV.pdf",
};
export const projects = [
  {
    id: "ingri",
    name: "INGRI",
    screen: "ingri-screen.png",
    left: "ingri-mascot.png",
    right: "translate.png",
    url: "https://ingri-front.vercel.app/",
    stack: ["Next.js", "React", "i18n"],
  },
  {
    id: "vribbe",
    name: "VRIBBE",
    screen: "vribbe-screen.png",
    left: "sushi.png",
    right: "rose.png",
    url: "https://vribbe.com/",
    stack: ["Next.js", "React", "Supabase", "NestJS"],
  },
] as const;
export const skills = [
  "HTML5",
  "CSS3 / SCSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Redux Toolkit",
  "Zustand",
  "REST APIs",
  "React Hook Form",
  "Git",
  "Figma",
];
export const articleIds = ["portfolio"] as const;
// export const articleIds = ["portfolio", "interfaces", "motion", "localization"] as const;

export const mediumArticles = [
  {
    id: "srcset",
    url: "https://medium.com/@arzuuimammadova/srcset-sizes-lazy-fetchpriority-fa174a415431",
    title: "Srcset, sizes, lazy, fetchpriority",
    excerpt:
      "Sənin bank saytın var: yuxarıda böyük kampaniya şəkli, aşağıda isə loqo.",
    date: "2026-11-03",
    category: "CSS",
    image: null,
  },
  {
    id: "outline",
    url: "https://medium.com/@arzuuimammadova/outline-none-il%C9%99-focus-u-silm%C9%99k-5aea4f834cc5",
    title: "Outline: none ilə focus-u silmək??",
    excerpt:
      "outline: none düymə və ya input seçiləndə ətrafında görünən fokus çərçivəsini gizlədir. Bu, accessibility xətası sayılır və müsahibədə tələ sualı kimi soruşulur.",
    date: "2026-11-01",
    category: "HTML",
    image: null,
  },
  {
    id: "workers",
    url: "https://medium.com/@arzuuimammadova/web-worker-v%C9%99-service-worker-%C3%BCmumi-bax%C4%B1%C5%9F-45058c9e2363",
    title: "Web Worker və Service Worker (ümumi baxış)",
    excerpt:
      "İkisi də arxa planda işləyir, amma işləri tam fərqlidir: Web Worker hesablama aparır, Service Worker isə şəbəkəni idarə edir.",
    date: "2026-10-31",
    category: "JavaScript",
    image: "/assets/medium-workers.png",
  },
] as const;
