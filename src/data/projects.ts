/**
 * Selected works.
 *
 * These are DEMONSTRATION / CONCEPT projects. They are presented as concept
 * studies — not client work or deployed products. When a project gets a real
 * deployment or repository, fill in `liveUrl` / `githubUrl` and update `status`;
 * the buttons switch from "coming soon" to real links automatically.
 */

export type ProjectVisualKey = "nova" | "verde" | "taskflow" | "aura" | "voyage";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  status: string;
  description: string;
  stack: string[];
  highlights: string[];
  visual: ProjectVisualKey;
  visualAlt: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "nova-finance",
    number: "01",
    title: "Nova Finance",
    category: "FinTech / Dashboard",
    year: "2026",
    status: "Concept study",
    description:
      "A modern financial management dashboard designed to bring clarity to personal finances. The interface combines real-time expense visualization, transaction management, and intelligent financial summaries into a unified workspace.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    highlights: [
      "Balance and spending overview organised around a single, calm dashboard",
      "Expense trends visualised as charts instead of raw tables",
      "Transaction list with categories, search and filtering",
      "Monthly summaries that explain where money went",
    ],
    visual: "nova",
    visualAlt: "Illustrated dark finance dashboard with a gold area chart, account card and spending bars",
  },
  {
    id: "verde",
    number: "02",
    title: "Verde",
    category: "E-Commerce / Lifestyle",
    year: "2026",
    status: "Concept study",
    description:
      "An elegant digital storefront concept for a sustainable lifestyle brand. Designed around clean product presentation, intuitive browsing, and a seamless shopping experience.",
    stack: ["React", "JavaScript", "CSS", "Node.js"],
    highlights: [
      "Editorial product presentation with generous whitespace",
      "Category browsing and product detail flow",
      "Cart and checkout journey kept to as few steps as possible",
      "Simple Node.js API for products and orders",
    ],
    visual: "verde",
    visualAlt: "Illustrated warm-neutral storefront with an arched product frame, a ceramic vase and product tiles",
  },
  {
    id: "taskflow",
    number: "03",
    title: "Taskflow",
    category: "Productivity / SaaS",
    year: "2026",
    status: "Concept study",
    description:
      "A productivity workspace concept designed to simplify project planning, task allocation, and team collaboration through an organized and responsive interface.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    highlights: [
      "Kanban board with drag-friendly columns",
      "Timeline view for planning work across a week",
      "Task assignment, priorities and due dates",
      "Supabase for authentication and real-time data",
    ],
    visual: "taskflow",
    visualAlt: "Illustrated kanban workspace with cream task cards on a wine background and a timeline strip",
  },
  {
    id: "aura",
    number: "04",
    title: "Aura",
    category: "AI / Web Application",
    year: "2026",
    status: "Concept study",
    description:
      "An AI-powered content workspace concept that helps users organize ideas, generate structured content, and manage their creative workflow in one place.",
    stack: ["Next.js", "TypeScript", "Node.js", "AI API"],
    highlights: [
      "Prompt workspace with structured, editable output",
      "Idea library organised into collections",
      "Outline-first generation for long-form content",
      "Server-side API layer to keep keys off the client",
    ],
    visual: "aura",
    visualAlt: "Illustrated AI writing workspace with a sidebar, prompt field, generated outline and a ringed orb",
  },
  {
    id: "voyage",
    number: "05",
    title: "Voyage",
    category: "Travel / Booking Platform",
    year: "2026",
    status: "Concept study",
    description:
      "A travel discovery and booking interface concept designed to make exploring destinations more intuitive through curated experiences and a streamlined reservation journey.",
    stack: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    highlights: [
      "Curated destination collections with editorial cards",
      "Interactive booking panel with dates and guests",
      "Destination detail pages driven by a REST API",
      "Responsive layout designed mobile-first",
    ],
    visual: "voyage",
    visualAlt: "Illustrated travel booking interface with a sunset coastal landscape, destination cards and a booking panel",
  },
];
