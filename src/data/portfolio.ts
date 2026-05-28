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

// Projects Screenshots — these paths reference assets that don't ship with
// this remix. Replace the values below by dropping real files into
// src/assets/screenshots/ and re-importing them, e.g.:
//   import screenshot1 from "@/assets/screenshots/serp.png";
const screenshot1 = "/placeholder.svg";
const screenshot2 = "/placeholder.svg";
const screenshot3 = "/placeholder.svg";
const screenshot4 = "/placeholder.svg";

// Profile Picture — placeholder until a real photo is provided.
const ProfilePic = "/placeholder.svg";

// About ----------------------------------------------------------------
export const About = {
  name: "Saifullah Balghari",
  titles: {
    1: "a Full-Stack Developer",
    2: "a College Student",
    3: "an Aspiring ML Engineer",
  } as Record<number, string>,
  description:
    "Hi, I am Saifullah Balghari based in Skardu, GB, Pakistan. I am currently studying Computer Science from Army Public School and College System, Skardu. I've learned various programming languages online. I have a strong foundation in Python and its simplicity and extensive libraries make it my favorite. I also know C++, JavaScript, SQL, etc., and have intermediate knowledge in CS concepts like DSA, DB, OS, and VC.",
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
    institution: "APSACS, Skardu",
    name: "SSC - High School",
    year: "2020-2022",
    description:
      "I got the secondary school certificate in June 2022 with a grade of A and 776 out of 1100 marks.",
  },
  {
    institution: "APSACS, Skardu",
    name: "HSSC - College",
    year: "2022-Now",
    description: "I am pursuing the higher secondary school certificate.",
  },
  {
    institution: "Self Taught",
    name: "Online Learning",
    year: "2021-Now",
    description:
      "I am currently learning Python, its AI-related libraries, and web development from online sources.",
  },
];

// Experience -----------------------------------------------------------
export const experienceData = [
  {
    company: "Project Development",
    year: "2022-Now",
    position: "Self Employed",
    description:
      "I am building various GUI, CLI and Web applications using Python, C++, ReactJS, TailwindCSS and others.",
  },
];

// Projects -------------------------------------------------------------
export const projectsData = [
  {
    Name: "SERP-Manager",
    Description:
      "Student Examination Results and Paper Manager is a GUI application for organising results and papers.",
    Technologies_used: "Python, SQLite, Customtkinter",
    screenshot: screenshot1,
    Link: "https://github.com/Saifullah-Balghari/SERP-Manager",
    filter: "Desktop",
  },
  {
    Name: "Calculator",
    Description:
      "A simple GUI application that can perform various arithmetic operations.",
    Technologies_used: "Python, Tkinter",
    screenshot: screenshot2,
    Link: "https://github.com/Saifullah-Balghari/Arithmetic-Calculater",
    filter: "Desktop",
  },
  {
    Name: "Library Manager",
    Description:
      "A simple CLI application made with C++ capable of performing various library operations.",
    Technologies_used: "C++",
    screenshot: screenshot3,
    Link: "https://github.com/Saifullah-Balghari/LibraryManager",
    filter: "Others",
  },
  {
    Name: "Portfolio Website",
    Description: "A personal portfolio website built with React and TailwindCSS.",
    Technologies_used: "ReactJS, TailwindCSS, JavaScript",
    screenshot: screenshot4,
    Link: "https://github.com/Saifullah-Balghari/Portfolio",
    filter: "Web",
  },
];

// Skills ---------------------------------------------------------------
// Using react-icons in place of the original PNG icon paths because the
// asset files (src/assets/icons/*.png) are not present in this project.
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
