// ─────────────────────────────────────────────
//  ABOUT SECTION — Leela Ranga Prasad (Verified Profile)
// ─────────────────────────────────────────────

import {
  SiPython, SiFlask, SiGit, SiGithub,
  SiPostman, SiLinux,
} from "react-icons/si";
import {
  TbBrain, TbApi, TbBinaryTree, TbCpu, TbCode,
  TbBrandVscode,
} from "react-icons/tb";

export const SECTION = {
  label: "Background & Systems",
};

export const HEADING = {
  line1: "Engineering",
  line2: "Intelligent",
  line3: "Systems.",   // ghost (outline) style
};

// *word* = highlighted/bold in BlurText
export const BIO = [
  "I am an *Artificial Intelligence & Data Science* undergraduate at *VR Siddhartha Engineering College* (2024–2028), dedicated to engineering production-grade *AI systems*, intelligent workflows, and scalable backends.",
  "My technical focus centers on *Backend AI Systems*, *Natural Language Processing (NLP)* pipelines, *API orchestration*, and *Applied Machine Learning*. I specialize in bridging the gap between machine learning models and robust, reliable software.",
  "Beyond core development, I actively represent and lead tech communities as a *Google Student Ambassador* and former Campus Ambassador for *IIT Delhi eDC*.",
  "My primary objective is building high-impact software as an engineer specializing in *AI & Data Engineering*, designing resilient systems that process data, automate workflows, and deliver measurable intelligence."
];

export const RESUME_URL = "/resume.pdf";

export const TECH = [
  { name: "Python",          icon: SiPython },
  { name: "Flask",           icon: SiFlask },
  { name: "Machine Learning",icon: TbBrain },
  { name: "NLP Pipelines",   icon: TbCpu },
  { name: "REST APIs",       icon: TbApi },
  { name: "Data Structures", icon: TbBinaryTree },
  { name: "Git & GitHub",    icon: SiGithub },
];

export const CREATIVE = [
  { name: "VS Code",         icon: TbBrandVscode },
  { name: "Postman",         icon: SiPostman },
  { name: "Linux / Bash",    icon: SiLinux },
  { name: "Git Versioning",  icon: SiGit },
  { name: "System Design",   icon: TbCode },
];

export const EXPERIENCE = [
  { role: "Google Android Developer Intern", company: "EduSkills Foundation", period: "Jan 2026 – Mar 2026" },
  { role: "Campus Ambassador",               company: "IIT Delhi eDC",         period: "Dec 2025 – Feb 2026" },
  { role: "Student Representative",          company: "Google Student Ambassadors India", period: "Dec 2025 – Jan 2026" },
];

export const EDUCATION = [
  { degree: "B.Tech in Artificial Intelligence & Data Science", school: "VR Siddhartha Engineering College", period: "2024 – 2028" },
  { degree: "Intermediate / Higher Secondary",                school: "Sri Chaitanya College of Education", period: "Completed" },
];

export const CERTIFICATIONS = [
  "Snowflake Data Engineering",
  "Microsoft PM Certification",
  "Introduction to BIM",
  "Quantum Fundamentals Phase 1",
  "Python Essentials 1",
];
