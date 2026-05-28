import {
  FaGithub, FaInstagram, FaFacebook, FaLinkedin,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaNodeJs,
  FaGitAlt, FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss, SiCplusplus, SiC, SiMysql, SiMongodb, SiPandas,
  SiNumpy, SiJupyter, SiGnubash, SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandPython } from "react-icons/tb";
import type { IconType } from "react-icons";

// Projects Screenshots —————————————————————————————————————————————————
const screenshot3 = "screenshots/serp.png";
const screenshot4 = "screenshots/libmngr.png";

// Profile Picture
const ProfilePic = "/me.png";

// About ----------------------------------------------------------------
export const About = {
  name: "Saifullah Balghari",
  titles: {
    1: "a Junior Systems Engineer",
    2: "a University Student",
    3: "an Aspiring AI/ML Engineer",
    4: "an Open Source Contributor"
  } as Record<number, string>,
  picture: ProfilePic,
};

// Socials --------------------------------------------------------------
export const socialLinks: { icon: IconType; link: string; label: string }[] = [
  { icon: FaGithub,   link: "https://github.com/sbalghari",                          label: "GitHub" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/saifullah-balghari/",       label: "LinkedIn" },
  { icon: FaInstagram,link: "https://www.instagram.com/saifullahbalghari/",          label: "Instagram" },
  { icon: FaFacebook, link: "https://www.facebook.com/Saifullah.BlghaRi/",           label: "Facebook" },
];

// Education ------------------------------------------------------------
export const educationData = [
  {
    institution: "University of Baltistan, Skardu",
    name: "Bachelors in AI",
    year: "March, 2026 - Expected Graduation 2030",
    description:
      "I am doing bachelors in artificial inteligence (AI) from the University of Baltistan, Skardu. currently in 1st semsitor",
  },
  {
    institution: "APSACS, Skardu",
    name: "Fsc",
    year: "2020-2024",
    description: "I did my higher scondary schooling in CS from Army Public School Skardu. Got around 80 %age in CS subjects.",
  },
];

// Experience -----------------------------------------------------------
export const experienceData = [
  {
    company: "Open Source",
    year: "2024-Now",
    position: "Creator/Countributor",
    description:
      "Active on github, building collaburative projects and contributing to open source projects.",
  },
  {
    company: "Self Employed",
    year: "2022-Now",
    position: "Project Development",
    description:
      "I am building various projects using Python, C++, ReactJS, TailwindCSS and others.",
  },
];

// Projects -------------------------------------------------------------
export const projectsData = [
  {
    Name: "SERP Manager",
    Description:
      "SERP Manager is a GUI application for managing results, papers, datesheets of different examinations with role-based access, database integeration and etc.",
    Technologies_used: "Python, SQLite, Customtkinter",
    screenshot: screenshot3,
    Link: "https://github.com/sbalghari/SERP-Manager",
    filter: "Desktop",
  },
  {
    Name: "Library Manager",
    Description:
      "A simple CLI application made with C++ which tries to do some basic library management operations like add/get books, update books, etc.",
    Technologies_used: "C++",
    screenshot: screenshot4,
    Link: "https://github.com/sbalghari/LibraryManager",
    filter: "Others",
  },
];

// Skills ---------------------------------------------------------------
export type Skill = { label: string; icon: IconType };

export const skillsData: Record<string, Skill[]> = {
  Frontend: [
    { label: "HTML",         icon: FaHtml5 },
    { label: "CSS",          icon: FaCss3Alt },
    { label: "JavaScript",   icon: FaJs },
    { label: "CustomTkinter",icon: TbBrandPython },
    { label: "TailwindCSS",  icon: SiTailwindcss },
    { label: "React JS",     icon: FaReact },
    { label: "Bootstrap",    icon: FaBootstrap },
  ],
  Backend: [
    { label: "C-Language",   icon: SiC },
    { label: "C++",          icon: SiCplusplus },
    { label: "NodeJS",       icon: FaNodeJs },
    { label: "MySQL",        icon: SiMysql },
    { label: "MongoDB",      icon: SiMongodb },
  ],
  AI: [
    { label: "Python",            icon: FaPython },
    { label: "Pandas",            icon: SiPandas },
    { label: "Numpy",             icon: SiNumpy },
    { label: "Matplotlib",        icon: TbBrandPython },
    { label: "Jupyter Notebook",  icon: SiJupyter },
  ],
  Others: [
    { label: "Git",     icon: FaGitAlt },
    { label: "GitHub",  icon: SiGithub },
    { label: "Linux",   icon: FaLinux },
    { label: "Bash",    icon: SiGnubash },
    { label: "VS Code", icon: VscVscode },
  ],
};

// Section nav -----------------------------------------------------------
export const navSections = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "education",  label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "skills",     label: "Skills" },
  { id: "contact",    label: "Contact" },
];
