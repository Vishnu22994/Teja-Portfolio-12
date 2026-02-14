export const personalInfo = {
  name: "Maila Vishnu Teja",
  title: "Software Engineer & Data Analyst",
  location: "Podili, Andhra Pradesh, India",
  email: "vishnutejamailaa@gmail.com",
  phone: "9603625321",
  objective:
    "Aspiring Software Engineer specializing in Java, web development, and data analysis. Passionate about contributing to innovative projects while continuously enhancing skills in full-stack development and analytics.",
  education: [
    {
      institution: "Mohan Babu University",
      location: "Tirupathi, Andhra Pradesh",
      degree: "B.Tech in Computer Science with AIML",
      period: "June 2022 – Mar 2026",
      grade: "CGPA: 8.35",
    },
    {
      institution: "D.V.S Junior College",
      location: "Darsi, Andhra Pradesh",
      degree: "MPC",
      period: "June 2020 – Mar 2022",
      grade: "75%",
    },
  ],
  certifications: [
    "Web Development Virtual Internship – APEX PLANET",
    "Java Developer Certificate – CISCO",
    "Data Analyst – TATA Virtual Internship",
    "Business Analyst – Coursera",
  ],
  achievements: [
    "Organizer for Public Relations at Mohana Mantra fest, Mohan Babu University",
    "Won prizes in debate, extempore, quizzes, poster making, and art",
  ],
  socialLinks: {
    github: "https://github.com/Vishnu22994",
    linkedin: "https://www.linkedin.com/in/vishnu-teja-06628128b/",
    leetcode: "https://leetcode.com/vishnutejhttps://leetcode.com/u/sGtvtMGE7Z/",
  },
};

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0-100
  color: string; // tailwind color token
}

export const skills: Skill[] = [
  { name: "Java", category: "Languages", proficiency: 85, color: "#00e5ff" },
  { name: "Python", category: "Languages", proficiency: 75, color: "#7c4dff" },
  { name: "JavaScript", category: "Languages", proficiency: 80, color: "#ffea00" },
  { name: "HTML/CSS", category: "Languages", proficiency: 90, color: "#ff6e40" },
  { name: "Spring Boot", category: "Frameworks", proficiency: 70, color: "#69f0ae" },
  { name: "React", category: "Libraries", proficiency: 65, color: "#40c4ff" },
  { name: "MySQL", category: "Databases", proficiency: 80, color: "#448aff" },
  { name: "Pandas", category: "Libraries", proficiency: 75, color: "#ea80fc" },
  { name: "NumPy", category: "Libraries", proficiency: 70, color: "#b388ff" },
  { name: "Power BI", category: "Tools", proficiency: 70, color: "#ffd740" },
  { name: "Git", category: "Tools", proficiency: 80, color: "#ff5252" },
  { name: "REST APIs", category: "Frameworks", proficiency: 75, color: "#64ffda" },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  color: string;
}

export const projects: Project[] = [
  {
    title: "Amazon Clone",
    description:
      "A fully responsive, pixel-aligned e-commerce UI following Amazon design patterns with product grid, navigation, and UI animations.",
    techStack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    highlights: [
      "Pixel-aligned responsive UI",
      "Product grid system & navigation",
      "Optimized CSS performance",
      "Deployed via GitHub Actions",
    ],
    color: "#00e5ff",
  },
  {
    title: "Hospital Management System",
    description:
      "Web-based system managing patient records, appointments, billing, and staff with RESTful APIs and MySQL integration.",
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "HTML/CSS/JS"],
    highlights: [
      "RESTful API architecture",
      "CRUD operations with MySQL",
      "Exception handling & validation",
      "Efficient database queries",
    ],
    color: "#7c4dff",
  },
  {
    title: "Indian Crime Analytics Dashboard",
    description:
      "Analyzed Indian crime datasets with interactive Power BI dashboards featuring drill-down filters and automated reporting.",
    techStack: ["Python", "Pandas", "NumPy", "MySQL", "Power BI", "Excel"],
    highlights: [
      "State-wise trend analysis",
      "Interactive Power BI dashboards",
      "Automated reporting",
      "Year-over-year growth tracking",
    ],
    color: "#64ffda",
  },
  {
    title: "COVID-19 Analysis Dashboard",
    description:
      "Time-series analysis of COVID-19 data with interactive dashboards for regional and trend analysis.",
    techStack: ["Python", "Pandas", "Matplotlib", "SQL", "Power BI"],
    highlights: [
      "Time-series analysis",
      "Regional trend tracking",
      "Interactive Power BI visuals",
      "Data processing pipeline",
    ],
    color: "#ffd740",
  },
];
