import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGnubash,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandPython } from "react-icons/tb";
import type { IconType } from "react-icons";

// Projects Screenshots —————————————————————————————————————————————————
const screenshot1 = "screenshots/sbdots.png";
const screenshot2 = "screenshots/treeva.png";
const screenshot3 = "screenshots/serp.png";
const screenshot4 = "screenshots/libmngr.png";

// Profile Picture
const ProfilePic = "/me.png";

// About ----------------------------------------------------------------
export const About = {
  name: "Saifullah Balghari",
  email: "sbalghari@proton.me",
  titles: {
    1: "Junior Systems Engineer",
    2: "University Student",
    3: "Aspiring AI/ML Engineer",
    4: "Open Source Enthusiast",
  } as Record<number, string>,
  about_texts: [
    "BSAI student at University of Baltistan, Skardu.",
    "Self-taught programmer through online resources and projects.",
    "Strong interest in Linux, system internals, and desktop customization.",
    "Proficient in Python; Confortable with C++, JS, and SQL.",
    "Building projects like SBDots (System enviroment setup) and Treeva (codebase analysis tool).",
    "Comfortable with DSA, OS, databases, and version control fundamentals.",
  ],
  picture: ProfilePic,
};

// Socials --------------------------------------------------------------
export const socialLinks: { icon: IconType; link: string; label: string }[] = [
  { icon: FaGithub, link: "https://github.com/sbalghari", label: "GitHub" },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/saifullah-balghari/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/saifullahbalghari/",
    label: "Instagram",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/Saifullah.BlghaRi/",
    label: "Facebook",
  },
];

// Education ------------------------------------------------------------
export const educationData = [
  {
    institution: "University of Baltistan, Skardu",
    name: "BS Artificial Intelligence",
    year: "2026 - Expected 2030",
    description:
      "Currently pursuing a bachelors degree in artificial inteligence (AI) from the University of Baltistan, Skardu.",
  },
  {
    institution: "APSACS, Skardu",
    name: "FSc Computer Science",
    year: "2020 - 2024",
    description:
      "Completed higher secondary education in Computer Science with strong interest in programming.",
  },
];

// Experience -----------------------------------------------------------
export const experienceData = [
  {
    company: "Open Source",
    year: "2024 - Now",
    position: "Contributor & Builder",
    description:
      "Building personal projects, experimenting with ideas, and contributing to open source whenever something breaks badly enough to annoy me and its simple enough for me.",
  },
  {
    company: "Self Employed",
    year: "2022 - Now",
    position: "Developer",
    description:
      "Working on projects using Python, C++, React, TailwindCSS, and Linux-based tooling. Mostly focused on system tweaking, automation, and developer tools.",
  },
];

// Projects -------------------------------------------------------------
export const projectsData = [
  {
    Name: "SBDots",
    Description:
      "A Hyprland setup focused on automation and a clean Linux desktop experience. Includes dotfiles management, desktop components, and system tooling built mainly with Python.",
    Technologies_used: "Python, Bash, Hyprland, Linux",
    screenshot: screenshot1,
    Link: "https://github.com/sbalghari/sbdots",
    filter: "Linux",
  },
  {
    Name: "Treeva",
    Description:
      "A CLI tool for analyzing codebases and directories with support for filesystem scanning, metadata extraction, language detection, and structured output formats.",
    Technologies_used: "Python, Tree-sitter, CLI, TUI",
    screenshot: screenshot2,
    Link: "https://github.com/sbalghari/treeva",
    filter: "Developer Tools",
  },
  {
    Name: "SERP Manager",
    Description:
      "A desktop application for managing exam results, papers, datesheets, and records with role-based access and database integration.",
    Technologies_used: "Python, SQLite, Customtkinter, GUI",
    screenshot: screenshot3,
    Link: "https://github.com/sbalghari/SERP-Manager",
    filter: "Others",
  },
  {
    Name: "Library Manager",
    Description:
      "A simple CLI-based library management system built in C++ with features like adding, updating, and managing book records.",
    Technologies_used: "C++, CLI",
    screenshot: screenshot4,
    Link: "https://github.com/sbalghari/LibraryManager",
    filter: "Others",
  },
];

// Skills ---------------------------------------------------------------
export type Skill = { label: string; icon: IconType };

export const skillsData: Record<string, Skill[]> = {
  Frontend: [
    { label: "HTML", icon: FaHtml5 },
    { label: "CSS", icon: FaCss3Alt },
    { label: "JavaScript", icon: FaJs },
    { label: "CustomTkinter", icon: TbBrandPython },
    { label: "TailwindCSS", icon: SiTailwindcss },
    { label: "React JS", icon: FaReact },
    { label: "Bootstrap", icon: FaBootstrap },
  ],
  Backend: [
    { label: "C-Language", icon: SiC },
    { label: "C++", icon: SiCplusplus },
    { label: "NodeJS", icon: FaNodeJs },
    { label: "MySQL", icon: SiMysql },
    { label: "MongoDB", icon: SiMongodb },
  ],
  AI: [
    { label: "Python", icon: FaPython },
    { label: "Pandas", icon: SiPandas },
    { label: "Numpy", icon: SiNumpy },
    { label: "Matplotlib", icon: TbBrandPython },
    { label: "Jupyter Notebook", icon: SiJupyter },
  ],
  Others: [
    { label: "Git", icon: FaGitAlt },
    { label: "GitHub", icon: SiGithub },
    { label: "Linux", icon: FaLinux },
    { label: "Bash", icon: SiGnubash },
    { label: "VS Code", icon: VscVscode },
  ],
};

// Section nav -----------------------------------------------------------
export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
