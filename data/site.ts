// Services offered, project catalogue and tech stack.
// Project facts for Readly, AION Timer, arzu-toast-modal, Hubfolio,
// AION Analyze, Voice Control Demo and Metraj.az come from the old portfolio
// (arzumammadova.vercel.app and its public /api/projects endpoint).

export const services = [
  { id: "web", icon: "code", tags: ["Next.js", "React", "TypeScript", "REST API"] },
  { id: "figma", icon: "pen", tags: ["Figma", "Tailwind CSS", "SCSS", "Responsive"] },
  { id: "landing", icon: "spark", tags: ["GSAP", "ScrollTrigger", "Next.js"] },
  { id: "dashboard", icon: "grid", tags: ["React", "Redux Toolkit", "Zustand", "React Hook Form"] },
  { id: "performance", icon: "gauge", tags: ["Core Web Vitals", "srcset", "lazy", "fetchpriority"] },
  { id: "a11y", icon: "eye", tags: ["Semantic HTML", "ARIA", "Focus", "Keyboard"] },
  { id: "i18n", icon: "globe", tags: ["next-intl", "AZ / EN / RU", "Intl API"] },
  { id: "pwa", icon: "offline", tags: ["Service Worker", "Web Worker", "Cache API", "PWA"] },
] as const;

export const processSteps = ["discuss", "design", "develop", "launch"] as const;

export type ProjectLink = { kind: "live" | "github" | "figma" | "video" | "npm"; url: string };

export const portfolioProjects: {
  id: string;
  name: string;
  image: string;
  featured?: boolean;
  tech: string[];
  links: ProjectLink[];
}[] = [
  {
    id: "ingri",
    name: "INGRI",
    image: "/assets/ingri-screen.png",
    featured: true,
    tech: ["Next.js", "React", "i18n"],
    links: [{ kind: "live", url: "https://ingri-front.vercel.app/" }],
  },
  {
    id: "vribbe",
    name: "VRIBBE",
    image: "/assets/vribbe-screen.png",
    featured: true,
    tech: ["Next.js", "React", "Vite", "Supabase", "NestJS"],
    links: [{ kind: "live", url: "https://vribbe.com/" }],
  },
  {
    id: "readly",
    name: "Readly",
    image: "/assets/projects/readly.png",
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Material UI", "Formik-Yup", "Cloudinary", "SCSS"],
    links: [
      { kind: "github", url: "https://github.com/arzummammadova/Readly-Front-back" },
      { kind: "figma", url: "https://www.figma.com/design/LmPlPyQ2uZxdvoh5Qn4ctr/Arzu-READLY--Community-?node-id=260-2" },
      { kind: "video", url: "https://drive.google.com/file/d/1wsRM2GCxE24k6N7GBHLxOJAFQ-cEBr6l/view?usp=sharing" },
    ],
  },
  {
    id: "aionTimer",
    name: "AION Timer",
    image: "/assets/projects/aion-timer.png",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Redux", "Zod", "JWT", "MongoDB"],
    links: [
      { kind: "live", url: "https://aion-eosin.vercel.app/" },
      { kind: "github", url: "https://github.com/arzummammadova/AION" },
      { kind: "video", url: "https://drive.google.com/file/d/15C4aiUOaqxkwZV_ucOUwN-mjW4cUWv-p/view?usp=sharing" },
    ],
  },
  {
    id: "toast",
    name: "arzu-toast-modal",
    image: "/assets/projects/toast.png",
    tech: ["TypeScript", "npm", "React / Next.js"],
    links: [
      { kind: "npm", url: "https://www.npmjs.com/package/arzu-toast-modal" },
      { kind: "github", url: "https://github.com/arzummammadova/arzu-toast-modal" },
      { kind: "figma", url: "https://www.figma.com/community/file/1523304266707961935/toast-desing" },
    ],
  },
  {
    id: "hubfolio",
    name: "Hubfolio",
    image: "/assets/projects/hubfolio.png",
    tech: ["HTML", "CSS", "Vanilla JS", "Scroll Animations"],
    links: [
      { kind: "live", url: "https://hubfolio-hazel.vercel.app/" },
      { kind: "github", url: "https://github.com/arzummammadova/Hubfolio" },
    ],
  },
  {
    id: "aionAnalyze",
    name: "AION Analyze",
    image: "/assets/projects/aion-analyze.png",
    tech: ["Next.js", "Node.js", "FastAPI"],
    links: [
      { kind: "github", url: "https://github.com/arzummammadova/AION-Analyze" },
      { kind: "video", url: "https://drive.google.com/file/d/1bMPSKwojQ_g54HJI5jeaPdDWMwxyUnyP/view?usp=sharing" },
    ],
  },
  {
    id: "voice",
    name: "Voice Control Demo",
    image: "/assets/projects/voice.png",
    tech: ["Next.js", "Tailwind CSS", "Web Speech API", "Annyang.js"],
    links: [
      { kind: "live", url: "https://voice-control-demo.vercel.app/" },
      { kind: "github", url: "https://github.com/arzummammadova/VoiceControlDemo" },
    ],
  },
  {
    id: "metraj",
    name: "Metraj.az",
    image: "/assets/projects/metraj.png",
    tech: ["Fastify", "Tailwind CSS", "Responsive Design"],
    links: [],
  },
];

// Tech stack: icons are the ones used on the old portfolio site.
export const techStack: { name: string; icon?: string }[] = [
  { name: "HTML", icon: "hmtlpng.png" },
  { name: "CSS", icon: "css.png" },
  { name: "JavaScript", icon: "js.png" },
  { name: "TypeScript" },
  { name: "React", icon: "react.svg.png" },
  { name: "Next.js", icon: "next.png" },
  { name: "Redux", icon: "redux.png" },
  { name: "Zustand" },
  { name: "Tailwind CSS", icon: "tailwind.png" },
  { name: "SASS / SCSS", icon: "sass.png" },
  { name: "Bootstrap", icon: "bootstrap.png" },
  { name: "Material UI", icon: "material.png" },
  { name: "GSAP" },
  { name: "next-intl" },
  { name: "Formik & Yup", icon: "formikyup.png" },
  { name: "Figma", icon: "figma.png" },
  { name: "Git", icon: "git.webp" },
  { name: "Node.js", icon: "nodejs.png" },
  { name: "Express.js", icon: "express.png" },
  { name: "MongoDB", icon: "mongo.png" },
  { name: "JWT", icon: "jwt.png" },
  { name: "Postman", icon: "postman.webp" },
  { name: "Vercel", icon: "vercel.png" },
  { name: "Render", icon: "render.jpg" },
];
