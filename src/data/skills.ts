import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  GitPullRequest,
  Layers,
  Leaf,
  Network,
  Palette,
  PenTool,
  Route,
  Send,
  Server,
  SquareTerminal,
  Wind,
} from "lucide-react";

/**
 * Skills & technologies.
 *
 * ⚠️  REVIEW BEFORE PUBLISHING — these are illustrative.
 * `level` keeps confirmed skills separate from ones still being explored:
 *   - "working"   → used in real practice / projects (confirmed)
 *   - "exploring" → being learned; NOT presented as professional expertise
 * Move a skill to "working" only once it is genuinely confirmed.
 */

export type SkillLevel = "working" | "exploring";

export type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
  level: SkillLevel;
};

export type SkillCategory = {
  id: string;
  title: string;
  summary: string;
  skills: Skill[];
};

export const skillLevels: Record<SkillLevel, string> = {
  working: "Working knowledge",
  exploring: "Currently exploring",
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    summary: "Interfaces people see and touch.",
    skills: [
      { name: "HTML5", icon: Code2, level: "working", description: "Semantic, accessible structure as the base of every page." },
      { name: "CSS3", icon: Palette, level: "working", description: "Layout, typography and motion — Grid, Flexbox and custom properties." },
      { name: "JavaScript", icon: Braces, level: "working", description: "The language of the web: DOM, events, async logic and modules." },
      { name: "React", icon: Atom, level: "exploring", description: "Component-driven UIs with hooks, state and composition." },
      { name: "Tailwind CSS", icon: Wind, level: "exploring", description: "Utility-first styling with consistent design tokens." },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    summary: "Logic and services behind the screen.",
    skills: [
      { name: "Node.js", icon: Server, level: "exploring", description: "JavaScript on the server for APIs and tooling." },
      { name: "Express.js", icon: Route, level: "exploring", description: "Minimal routing and middleware for REST services." },
      { name: "Python", icon: SquareTerminal, level: "exploring", description: "Scripting, problem solving and quick prototypes." },
      { name: "REST APIs", icon: Network, level: "exploring", description: "Designing and consuming resource-based HTTP endpoints." },
    ],
  },
  {
    id: "data",
    title: "Database & Cloud",
    summary: "Where information lives and scales.",
    skills: [
      { name: "MySQL", icon: Database, level: "exploring", description: "Relational modelling, joins and structured queries." },
      { name: "PostgreSQL", icon: Layers, level: "exploring", description: "A robust relational database with powerful SQL features." },
      { name: "MongoDB", icon: Leaf, level: "exploring", description: "Document storage for flexible, JSON-like data." },
      { name: "Supabase", icon: Cloud, level: "exploring", description: "Postgres with auth, storage and real-time out of the box." },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    summary: "How the work gets done, and shipped.",
    skills: [
      { name: "Git", icon: GitBranch, level: "working", description: "Version control: branches, commits and clean history." },
      { name: "GitHub", icon: GitPullRequest, level: "working", description: "Hosting code, collaboration and pull requests." },
      { name: "VS Code", icon: FileCode2, level: "working", description: "Daily editor, tuned with extensions and shortcuts." },
      { name: "Figma", icon: PenTool, level: "exploring", description: "Wireframes and interface ideas before code." },
      { name: "Postman", icon: Send, level: "exploring", description: "Testing and documenting API requests." },
    ],
  },
];

