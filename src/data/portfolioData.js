import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiHtml5
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// ================= SKILLS =================
export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", proficiency: 85, icon: FaJava },
      { name: "JavaScript", proficiency: 80, icon: SiJavascript },
      { name: "Python", proficiency: 75, icon: SiPython }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", proficiency: 80, icon: FaReact },
      { name: "HTML", proficiency: 90, icon: SiHtml5 },
      { name: "CSS", proficiency: 85, icon: FaCss3Alt },
      { name: "Responsive Design", proficiency: 85, icon: FaReact }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", proficiency: 75, icon: FaNodeJs },
      { name: "Express.js", proficiency: 75, icon: FaNodeJs },
      { name: "REST APIs", proficiency: 80, icon: FaNodeJs },
      { name: "Spring Boot", proficiency: 70, icon: SiSpringboot }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", proficiency: 80, icon: SiMysql },
      { name: "MongoDB", proficiency: 75, icon: SiMongodb },
      { name: "PostgreSQL", proficiency: 70, icon: SiPostgresql }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git & GitHub", proficiency: 85, icon: FaGitAlt },
      { name: "VS Code", proficiency: 90, icon: VscVscode }
    ]
  },
  {
    category: "Core Competencies",
    items: [
      { name: "Problem Solving", proficiency: 85, icon: FaReact },
      { name: "Debugging", proficiency: 80, icon: FaReact },
      { name: "Teamwork", proficiency: 85, icon: FaReact },
      { name: "Time Management", proficiency: 80, icon: FaReact },
      { name: "Adaptability", proficiency: 90, icon: FaReact }
    ]
  }
];

// ================= PROJECTS =================
export const projects = [
  {
    id: 1,
    title: "Student Management System",
    description: "Manage student records with full CRUD functionality.",
    technologies: "React, Node.js, Express, MySQL",
    features: [
      "Create, update, delete students",
      "Database integration",
      "Clean UI"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Weather Prediction App",
    description: "Predict weather for agriculture using ML.",
    technologies: "Python, Flask, HTML, CSS",
    features: [
      "Weather predictions",
      "Simple UI",
      "ML model integration"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Timetable Management System",
    description: "Manage module schedules and sessions.",
    technologies: "React, Node.js, MongoDB",
    features: [
      "Create/edit timetables",
      "Session validation",
      "MongoDB backend"
    ],
    link: "#"
  }
];