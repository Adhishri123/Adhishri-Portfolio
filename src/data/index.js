// All your personal content lives here. Edit this file to update the website.
import {
  FaJava, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs,
  FaGitAlt, FaJira, FaGithub, FaLinkedin, FaEnvelope,
} from "react-icons/fa";
import {
  SiSpringboot, SiHibernate, SiMysql, SiTailwindcss, SiFramer,
  SiExpo, SiKeycloak, SiSpring,
} from "react-icons/si";

export const profile = {
  name: "Adhishri Deshmukh",
  fullName: "Adhishri Rajkumar Deshmukh",
  role: "Software Engineer",
  tagline: "Full Stack Developer Portfolio",
  location: "Pune, Maharashtra, India",
  about:
    "Software Engineer with 2.4 years of experience at Config Server LLP. I build full stack web and mobile applications using Java, Spring Boot, microservices and React.",
  // about:
  //   "I am a Software Engineer at Config Server LLP, Pune, with 2.5+ years of experience designing and building full stack web and mobile applications. I enjoy turning real business needs into reliable, easy-to-use products. I work across the whole stack: REST APIs and microservices with Java and Spring Boot, data storage with MySQL and Hibernate, secure login with Spring Security, JWT and Keycloak, and responsive interfaces with React, Angular and React Native (Expo). At Config Server LLP I have worked on three products: Officers-Pro, an officer management platform with an admin panel and an officer app; an AI-powered HR assistant with a mobile app; and an E-learning platform with role-based access. I care about clean code, accessible and responsive design, and steady delivery in Agile teams using Git and Jira. I hold an M.Sc in Mathematics and completed Full Stack Java Development training, which gives me a strong problem-solving base. I am now looking to take on larger responsibility and build high-impact products.",
  email: "deshmukhadhishri123@gmail.com",
  phone: "9325396144",
  github: "https://github.com/Adhishri123",
  linkedin: "https://linkedin.com/in/adhishri141",
};

export const socials = [
  { name: "GitHub", href: profile.github, Icon: FaGithub },
  { name: "LinkedIn", href: profile.linkedin, Icon: FaLinkedin },
  { name: "Email", href: `mailto:${profile.email}`, Icon: FaEnvelope },
];

// Each row of icons in the Skills section
export const skillGroups = [
  {
    title: "Backend",
    items: [
      { name: "Java", Icon: FaJava, color: "#f89820" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
      { name: "Spring", Icon: SiSpring, color: "#6db33f" },
      { name: "Hibernate", Icon: SiHibernate, color: "#bcae79" },
      { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
      { name: "Keycloak", Icon: SiKeycloak, color: "#4d4d4d" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML 5", Icon: FaHtml5, color: "#e34f26" },
      { name: "CSS 3", Icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
      { name: "React", Icon: FaReact, color: "#61dafb" },
      { name: "Angular", Icon: FaAngular, color: "#dd0031" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Framer Motion", Icon: SiFramer, color: "#ffffff" },
    ],
  },
  {
    title: "Mobile & Tools",
    items: [
      { name: "React Native", Icon: FaReact, color: "#61dafb" },
      { name: "Expo", Icon: SiExpo, color: "#ffffff" },
      { name: "Git", Icon: FaGitAlt, color: "#f05032" },
      { name: "Jira", Icon: FaJira, color: "#2684ff" },
    ],
  },
];

// Project descriptions are overall (no module names), as you wanted for your resume.
export const projects = [
  {
    title: "Officers-Pro",
    description:
      "A web platform to manage officers with an admin panel and an officer app. Built on Spring Boot microservices behind an API gateway, with secure login using Keycloak.",
    tags: ["Java", "Spring Boot", "React", "Keycloak", "MySQL"],
    gradient: "from-purple-700 via-indigo-700 to-cyan-600",
    link: "",
  },
  {
    title: "HRMS AI Agent (Shrija AI)",
    description:
      "An AI-powered HR assistant. A React Native (Expo) mobile app chats with a Spring Boot multi-service backend, with JWT-secured login.",
    tags: ["React Native", "Expo", "Spring Boot", "MySQL", "JWT"],
    gradient: "from-fuchsia-700 via-purple-700 to-blue-600",
    link: "",
  },
  {
    title: "E-learning Platform",
    description:
      "A learning platform where learners browse courses, enroll and track progress. Includes role-based login for learners and administrators, and REST APIs.",
    tags: ["Java", "Spring Boot", "React", "MySQL", "Spring Security"],
    gradient: "from-blue-700 via-violet-700 to-pink-600",
    link: "",
  },
];

export const education = [
  "M.Sc Mathematics (2023) - Sant Gadge Baba Amravati University",
  "B.Sc Mathematics (2021) - Sant Gadge Baba Amravati University",
  "Full Stack Java Development training (Feb 2024) - Core Java, Spring Boot, Microservices, Hibernate, React, Angular, MySQL",
];

