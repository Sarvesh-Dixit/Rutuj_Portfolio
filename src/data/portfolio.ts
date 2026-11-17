/**
 * Central content for the portfolio.
 * Edit text here — components only read from this file.
 *
 * ⚠️  REPLACE BEFORE PUBLISHING
 *  - `profile.email` is a placeholder address on the reserved example.com domain.
 *  - `profile.socials[].url` are `null` until real profile URLs are supplied.
 *    A social with `url: null` is shown as "link coming soon" instead of a fake link.
 */

export type Social = {
  label: string;
  /** Full profile URL, or null while it has not been supplied. */
  url: string | null;
};

export const profile = {
  name: "Rutuj Patil",
  firstName: "Rutuj",
  initials: "RP",
  roles: ["Developer", "Design Thinker", "Digital Builder"],
  email: "rutuj.patil@example.com", // REPLACE with the real address
  availability: "Available for opportunities",
  socials: [
    { label: "LinkedIn", url: null },
    { label: "GitHub", url: null },
  ] as Social[],
};

export type NavLink = {
  id: string;
  label: string;
  /** Section ids that should mark this nav item as active. */
  covers: string[];
};

export const navLinks: NavLink[] = [
  { id: "about", label: "About", covers: ["about", "education", "skills"] },
  { id: "work", label: "Work", covers: ["work"] },
  { id: "journey", label: "Journey", covers: ["journey", "achievements"] },
  { id: "contact", label: "Contact", covers: ["contact"] },
];

export const hero = {
  label: "Portfolio / 2026",
  description:
    "I am Rutuj Patil, a developer interested in transforming ideas into thoughtful digital experiences through technology, design, and continuous exploration.",
  meta: ["Clean engineering", "Considered design", "Continuous learning"],
};

export const about = {
  paragraphs: [
    "Hello, I'm Rutuj — a technology enthusiast and aspiring software developer with a growing interest in building meaningful digital products.",
    "My journey through computer science has introduced me to the relationship between engineering and creativity. I enjoy exploring technologies, solving practical problems, and developing applications that make everyday experiences more intuitive.",
    "I believe good software is not just about functionality. It is about how thoughtfully an idea is translated into something people can use.",
  ],
  philosophy: ["Think clearly.", "Build intentionally.", "Improve continuously."],
  facts: [
    { label: "Discipline", value: "Computer Science" },
    { label: "Currently", value: "B.Tech, in progress" },
    { label: "Focus", value: "Web development" },
    { label: "Approach", value: "Engineering × Design" },
  ],
};

export type EducationMilestone = {
  stage: string;
  period: string;
  institution: string;
  qualification: string;
  score: { value: number; decimals: number; suffix: string; caption: string };
  description: string;
  current?: boolean;
};

/** Only details that were supplied are shown. No completion dates are invented. */
export const education: EducationMilestone[] = [
  {
    stage: "I",
    period: "Schooling",
    institution: "Twinkle Star English High School",
    qualification: "Secondary School Education",
    score: { value: 85, decimals: 0, suffix: "%", caption: "Overall score" },
    description:
      "Where the curiosity started — a grounding in mathematics, science and the habit of disciplined study.",
  },
  {
    stage: "II",
    period: "Diploma",
    institution: "Viva College",
    qualification: "Diploma",
    score: { value: 87, decimals: 0, suffix: "%", caption: "Overall score" },
    description:
      "A first hands-on chapter in technical education, where fundamentals of computing turned into practical work.",
  },
  {
    stage: "III",
    period: "2025 — 2028",
    institution: "St. John College of Engineering and Management",
    qualification: "Bachelor of Technology (B.Tech)",
    score: { value: 9.5, decimals: 1, suffix: "", caption: "CGPA · latest semester" },
    description:
      "Currently pursuing engineering — deepening knowledge of software, systems and how well-built products come together.",
    current: true,
  },
];

export type JourneyEntry = { year: string; title: string; text: string };

/** Academic and learning milestones — not employment history. */
export const journey: JourneyEntry[] = [
  {
    year: "2022",
    title: "Academic Foundation",
    text: "Started building a foundation in computer science and technology.",
  },
  {
    year: "2025",
    title: "Degree Journey",
    text: "Began pursuing a bachelor's degree in engineering.",
  },
  {
    year: "2026",
    title: "Building & Exploring",
    text: "Expanding technical knowledge through personal projects, experimentation, and hands-on development.",
  },
];

export type Stat = {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  source: string;
};

export const stats: Stat[] = [
  { value: 85, decimals: 0, suffix: "%", label: "School Performance", source: "Twinkle Star English High School" },
  { value: 87, decimals: 0, suffix: "%", label: "Diploma Performance", source: "Viva College" },
  { value: 9.5, decimals: 1, suffix: "", label: "Latest Semester CGPA", source: "B.Tech · St. John College of Engineering and Management" },
];

/** Non-numeric achievements — deliberately not turned into invented numbers. */
export const statements = [
  { title: "Multiple learning projects", text: "Concepts built end to end to understand how interfaces, data and logic fit together." },
  { title: "Continuous technical exploration", text: "New tools are tried, compared and kept only when they earn their place." },
  { title: "A growing development journey", text: "Each semester and each project adds another layer of depth." },
];

export const contact = {
  heading: ["Have an idea?", "Let's give it direction."],
  text: "Good things begin with a conversation. Whether you have a project in mind, an opportunity to discuss, or simply want to exchange ideas, I'd be glad to hear from you.",
};
