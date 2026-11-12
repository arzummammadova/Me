// Services offered, project catalogue and tech stack.
// Project facts for Readly, AION Timer, arzu-toast-modal, Hubfolio,
// AION Analyze, Voice Control Demo and Metraj.az come from the old portfolio
// (arzumammadova.vercel.app and its public /api/projects endpoint).

export const serviceGroups = ["dev", "design", "growth"] as const;

export const services = [
  { id: "web", group: "dev", icon: "code", tags: ["Next.js", "React", "TypeScript", "REST API"] },
  { id: "figma", group: "dev", icon: "pen", tags: ["Figma", "Tailwind CSS", "SCSS", "Responsive"] },
  { id: "dashboard", group: "dev", icon: "grid", tags: ["React", "Redux Toolkit", "Zustand", "React Hook Form"] },
  { id: "i18n", group: "dev", icon: "globe", tags: ["next-intl", "AZ / EN / RU", "Intl API"] },
  { id: "pwa", group: "dev", icon: "offline", tags: ["Service Worker", "Web Worker", "Cache API", "PWA"] },
  { id: "uiux", group: "design", icon: "uiux", tags: ["Figma", "Wireframe", "Prototype", "Design system"] },
  { id: "aivideo", group: "design", icon: "aivideo", tags: ["AI video", "Reels", "Promo", "Higgsfield", "ElevenLabs"] },
  { id: "landing", group: "design", icon: "spark", tags: ["GSAP", "ScrollTrigger", "Next.js"] },
  { id: "performance", group: "growth", icon: "gauge", tags: ["Core Web Vitals", "srcset", "lazy", "fetchpriority"] },
  { id: "seo", group: "growth", icon: "seo", tags: ["Technical SEO", "Metadata", "Sitemap", "Open Graph"] },
  { id: "a11y", group: "growth", icon: "eye", tags: ["Semantic HTML", "ARIA", "Focus", "Keyboard"] },
] as const;

export const processSteps = ["discuss", "design", "develop", "launch"] as const;

export type ProjectLink = { kind: "live" | "github" | "figma" | "video" | "npm"; url: string };

export const portfolioProjects: {
  id: string;
  name: string;
  image?: string;
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
  {
    id: "goldHospital",
    name: "Gold Hospital",
    tech: ["Next.js", "Tailwind CSS", "FormSubmit"],
    links: [],
  },
  {
    id: "glabbe",
    name: "GLABBE",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    links: [],
  },
  {
    id: "loyalty",
    name: "Loyalty System",
    tech: ["React", "Tailwind CSS", "shadcn/ui", "Zustand", "PWA", "React Native", "NativeWind", "Expo"],
    links: [],
  },
  {
    id: "boulvard",
    name: "Boulvard Clinic",
    tech: ["Next.js", "Tailwind CSS", "i18n"],
    links: [],
  },
  {
    id: "foodlens",
    name: "FoodLens",
    tech: ["React Native", "Node.js", "AI integration"],
    links: [],
  },
  {
    id: "evisa",
    name: "Evisa",
    tech: [],
    links: [],
  },
  {
    id: "clomni",
    name: "Clomni",
    tech: [],
    links: [],
  },
  {
    id: "alfinx",
    name: "AlfinX",
    tech: [],
    links: [],
  },
  {
    id: "walkstep",
    name: "WalkStep",
    tech: [],
    links: [],
  },
];

// Smaller projects listed on the CV without details.
export const alsoBuilt = ["ItsTour", "Karma", "HexasShop", "OnlineBookShop"];

// Tech stack, grouped. Most icons come from the old portfolio site; the AI
// tool, TypeScript, GSAP and Zustand icons are the services' official favicons.
export type TechItem = { name: string; icon?: string };
export const techGroups: { id: "frontend" | "backend" | "design" | "ai"; items: TechItem[] }[] = [
  {
    id: "frontend",
    items: [
      { name: "HTML", icon: "hmtlpng.png" },
      { name: "CSS", icon: "css.png" },
      { name: "JavaScript", icon: "js.png" },
      { name: "TypeScript", icon: "typescript.png" },
      { name: "React", icon: "react.svg.png" },
      { name: "Next.js", icon: "next.png" },
      { name: "React Native", icon: "reactnative.png" },
      { name: "Redux Toolkit", icon: "redux.png" },
      { name: "Zustand", icon: "zustand.png" },
      { name: "React Router", icon: "reactrouter.png" },
      { name: "Tailwind CSS", icon: "tailwind.png" },
      { name: "SASS / SCSS", icon: "sass.png" },
      { name: "Bootstrap", icon: "bootstrap.png" },
      { name: "Material UI", icon: "material.png" },
      { name: "shadcn/ui", icon: "shadcn.png" },
      { name: "Ant Design" },
      { name: "GSAP", icon: "gsap.png" },
      { name: "next-intl" },
      { name: "React Hook Form", icon: "rhf.png" },
      { name: "Formik & Yup", icon: "formikyup.png" },
      { name: "Axios", icon: "axios.png" },
      { name: "PWA" },
      { name: "Vite", icon: "vite.png" },
    ],
  },
  {
    id: "backend",
    items: [
      { name: "Node.js", icon: "nodejs.png" },
      { name: "Express.js", icon: "express.png" },
      { name: "NestJS", icon: "nestjs.png" },
      { name: "Supabase", icon: "supabase.png" },
      { name: "MongoDB", icon: "mongo.png" },
      { name: "REST API" },
      { name: "JWT", icon: "jwt.png" },
      { name: "Joi" },
      { name: "Cloudflare", icon: "cloudflare.png" },
    ],
  },
  {
    id: "design",
    items: [
      { name: "Figma", icon: "figma.png" },
      { name: "Git", icon: "git.webp" },
      { name: "GitHub", icon: "github.png" },
      { name: "GitLab", icon: "gitlab.png" },
      { name: "VS Code", icon: "vscode.png" },
      { name: "Chrome DevTools", icon: "devtools.png" },
      { name: "Postman", icon: "postman.webp" },
      { name: "npm", icon: "npm.png" },
      { name: "Vercel", icon: "vercel.png" },
      { name: "Render", icon: "render.jpg" },
      { name: "Slack", icon: "slack.png" },
      { name: "Linear", icon: "linear.png" },
      { name: "Trello", icon: "trello.png" },
      { name: "Notion", icon: "notion.png" },
      { name: "YouGile", icon: "yougile.png" },
    ],
  },
  {
    id: "ai",
    items: [
      { name: "Cursor", icon: "cursor.png" },
      { name: "Claude Code", icon: "claude.png" },
      { name: "GitHub Copilot", icon: "copilot.png" },
      { name: "Antigravity", icon: "antigravity.png" },
      { name: "Codex", icon: "codex.png" },
      { name: "ChatGPT", icon: "chatgpt.png" },
      { name: "Grok", icon: "grok.png" },
      { name: "ElevenLabs", icon: "elevenlabs.png" },
      { name: "Higgsfield", icon: "higgsfield.png" },
    ],
  },
];
