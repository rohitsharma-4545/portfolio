import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  nextjs,
  java,
  figma,

  Iocl,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  healthCare,
  employeeManagement,
  blog,
  attendanceManagement,
  currencyConverter,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Development",
    icon: web,
  },
  {
    title: "Cloud & DevOps",
    icon: backend,
  },
  {
    title: "Data Engineering & ETL",
    icon: mobile,
  },
  {
    title: "AI/ML & Data Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern (Full Stack & Cloud Development)",
    company_name: "Indian Oil Corporation Limited",
    icon: Iocl, 
    iconBg: "#383E56",
    date: "Jan 2025 – Jun 2025",
    points: [
      "Developed a full-stack document search engine using Next.js and RESTful APIs, improving retrieval speed and user experience.",
      "Implemented OCR-based ingestion, lemmatization, and tokenized indexing for 95%+ accurate search results.",
      "Automated Excel-to-Oracle SQL ETL pipeline, reducing manual workload by 80% with error-free uploads.",
      "Collaborated using Git for version control, code reviews, and agile development cycles.",
    ],
  },
];


// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// src/constants/index.js

const projects = [
  {
    name: "Healthcare Management WebApp",
    description:
      "A full-featured healthcare platform enabling appointment booking, doctor-patient messaging, and automated reminders via email/SMS. It includes an admin dashboard for managing appointments and notifications, which helped reduce missed appointments by 25%.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "twilio",
        color: "cyan-text-gradient",
      },
    ],
    image: healthCare, // You'll need to import this image
    source_code_link: "https://github.com/rohitsharma-4545/healthcare-management-webapp", 
  },
  {
    name: "Employee Management System",
    description:
      "A task and performance management system with dashboards for tracking productivity and visualizing data. It uses React's Context API and Local Storage for persistent state management, enhancing user experience and reducing data loss.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "context-api",
        color: "green-text-gradient",
      },
      {
        name: "Appwrite",
        color: "orange-text-gradient",
      },
    ],
    image: employeeManagement, // You'll need to import this image
    source_code_link: "https://github.com/rohitsharma-4545/employee-management-system",
  },
  {
    name: "Mern Blog",
    description:
      "A full-stack blog application built with the MERN stack. Users can create, edit, and delete their own blog posts. The platform features robust user authentication, a text editor for rich content, and a clean, responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "authentication",
        color: "cyan-text-gradient",
      },
    ],
    image: blog, // You'll need to import this image
    source_code_link: "https://github.com/rohitsharma-4545/MernBlog.git",
  },
  {
    name: "Attendance Management System",
    description:
      "A comprehensive attendance management system designed to streamline the tracking of student or employee attendance. It features administrative tools for managing student data and classes, recording daily attendance, and generating detailed reports for analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
      {
        name: "Tkinter",
        color: "orange-text-gradient",
      },
    ],
    image: attendanceManagement, // You'll need to import this image
    source_code_link: "https://github.com/rohitsharma-4545/Attendance-Management.git",
  },
    {
    name: "Currency Converter",
    description:
      "A dynamic currency conversion tool that fetches real-time exchange rates from a RESTful API. It allows users to convert between various currencies with an interactive and responsive user interface, providing accurate and up-to-date conversion results.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "rest-api",
        color: "orange-text-gradient",
      },
    ],
    image: currencyConverter, // You'll need to import this image
    source_code_link: "https://github.com/rohitsharma-4545/currencyConvertor.git",
  },
];

export { services, technologies, experiences, projects };
