

import { Link } from "react-router"

export const Data = {
  "name": "Yogeth",
}

export const FooterData = [
  {
    'endpoint': '/',
    'src': '/home-icon.svg',
    'alt': 'home-icon',
    'txt': 'Home'
  },
  {
    'endpoint': '/projects',
    'src': '/projects.svg',
    'alt': 'project-icon',
    'txt': 'Projects'
  },
  {
    'endpoint': '/stack',
    'src': '/stack.svg',
    'alt': 'stack-icon',
    'txt': 'Stack'
  },
  {
    'endpoint': '/contact',
    'src': '/mail.svg',
    'alt': 'mail-icon',
    'txt': 'Contact'
  }
]

export const HomePageData = {
  name: 'Yogeth',
  role: 'Full-Stack Java Developer',
  para: 'Specializing in robust backend architectures with Java and Spring Boot, integrated with dynamic, responsive React frontends. Delivering enterprise-grade precision in every module.',
  skills: ["Java 21", "Spring Boot 3", "React + JS", "CSS", "TailWind CSS", "MariaDB", "Docker", "Bash", "Git", "Build Tools"],
  featuredCapabilites: [
    {
      title: 'Enterprise-Grade Microservices',
      para: 'Built ComplainTrack, a full-stack complaint management system leveraging Spring Boot 3 microservices architecture with MariaDB for data persistence. Designed RESTful APIs with comprehensive error handling and implemented role-based access control for organizational scalability.',
    },
    {
      title: 'End-to-End Full-Stack Integration',
      para: 'Seamlessly integrate Java Spring Boot backends with React frontends. From Weather App API consumption to Task Manager state management, I deliver cohesive solutions with clean code architecture and responsive UX patterns.',
    },
    {
      title: 'DevOps & Deployment Automation',
      para: 'Developed Hot Servlet, a Bash automation tool that streamlines Java Servlet deployment using Gradle build systems and Apache Tomcat. Experience with Docker containerization, CI/CD pipelines, and infrastructure-as-code practices for production-ready deployments.'
    },
    {
      title: 'API Design & Data Architecture',
      para: 'Expertise in building clean, well-documented RESTful APIs with OpenAPI/Swagger standards. Strong foundation in database design with MariaDB, query optimization, and ensuring data integrity across distributed systems.',
    }
  ]
}

export const ProjectsPageData = {
  intro: 'What I Build',
  heading: 'End-to-end solutions combining clean code, scalable architecture, and user-centric design.',
  filterbtns: ['All Projects', 'Java / SpringBoot', 'Reactjs', 'Bash'],
  showcase: [
    {
      title: 'Weather App',
      para: 'A modern weather dashboard built with React that fetches real-time weather data from external APIs. Demonstrates API integration expertise with live city search, multi-day forecasts, humidity tracking, and fully responsive design that adapts seamlessly across mobile, tablet, and desktop devices.',
      tech: ['React 18', 'CSS3', 'REST APIs', 'Responsive Design'],
      type: 'Reactjs',
      lnk: 'https://weather-app-woad-mu-26.vercel.app/',
      features: ['Real-time weather data', 'City search functionality', 'Temperature forecasts', 'Mobile responsive']
    },
    {
      title: 'ComplainTrack',
      para: 'Enterprise-level complaint management system designed to streamline issue tracking within IT departments. Features a React frontend for intuitive complaint submission and a Spring Boot backend with MariaDB persistence. Employees can report hardware failures, software issues, billing concerns, and network problems through a centralized platform with role-based dashboards.',
      tech: ['React', 'Spring Boot 3', 'REST APIs', 'MariaDB', 'Docker'],
      type: 'Java / SpringBoot',
      lnk: 'https://github.com/Yogeth/complaintrack',
      features: ['User authentication & authorization', 'Complaint CRUD operations', 'Status tracking', 'Admin dashboard', 'Responsive UI']
    },
    {
      title: 'Task Manager',
      para: 'A productive task management application built with React.js that enables users to create, update, complete, and organize tasks through an intuitive and responsive interface. Focuses on improving workflow efficiency with real-time task updates, filtering options, and clean UI patterns using modern React hooks and state management.',
      tech: ['React 18', 'JavaScript (ES6+)', 'CSS3', 'React Hooks', 'Local Storage','Tailwind css'],
      type: 'Reactjs',
      lnk: 'https://task-manager-git-main-yogeths-projects.vercel.app/',
      features: ['Add & manage tasks', 'Mark complete/incomplete', 'Delete tasks', 'Filter by status', 'Local persistence']
    },
    {
      title: 'Hot Servlet',
      para: 'Intelligent deployment automation tool that revolutionizes Java Servlet development workflows. Automatically handles WAR file building with Gradle, Apache Tomcat installation and configuration, application deployment, and server launch through a single command. Significantly reduces deployment time and eliminates manual configuration errors.',
      tech: ['Bash Scripting', 'Gradle', 'Apache Tomcat', 'Shell Commands', 'Automation'],
      type: 'Bash',
      lnk: 'https://github.com/Yogeth/hot-servlet',
      features: ['One-command deployment', 'Auto WAR compilation', 'Tomcat auto-setup', 'Server lifecycle management']
    },
  ]
}

export const StackData = {
  heading: 'Technical Proficiency',
  para: 'A deep dive into my architectural toolset. Focused on building scalable, high-performance Java ecosystems with modern frontend integration and automated deployment pipelines.',
  tech: {
    skills: [[
      {
        txt: 'Java & Spring Boot',
        percent: '90%'
      },
      {
        txt: 'REST API Design',
        percent: '88%'
      },
      {
        txt: 'Maria DB & SQL',
        percent: '85%'
      },
      {
        txt: 'Maven & Gradle',
        percent: '85%'
      },
      {
        txt: 'JWT & OAuth2',
        percent: '80%'
      }
    ], [
      {
        txt: 'JavaScript & React.js',
        percent: '90%'
      },
      {
        txt: 'React Hooks & State Management',
        percent: '88%'
      },
      {
        txt: 'CSS3 & Responsive Design',
        percent: '90%'
      },
      {
        txt: 'React Router',
        percent: '85%'
      },
      {
        txt: 'API Integration',
        percent: '87%'
      }
    ], [
      {
        txt: 'Docker & Containerization',
        percent: '80%'
      },
      {
        txt: 'Bash & Shell Scripting',
        percent: '85%'
      },
      {
        txt: 'Git & Version Control',
        percent: '90%'
      },
      {
        txt: 'Linux & Command Line',
        percent: '85%'
      },
      {
        txt: 'CI/CD Concepts',
        percent: '75%'
      }
    ]]
  },
  devops: {
    title: 'DevOps & Infrastructure',
    skill: ['Docker & Containerization', 'Apache Tomcat', 'Bash Automation Scripts', 'Git & Trunk-based Development', 'Build Automation (Gradle/Maven)']
  }
}

export const ContactData = {
  para: 'Ready to bridge the gap between concept and production. Whether you have a project inquiry or just want to discuss the latest Java frameworks, my terminal is always open.',
  social: [{
    media: 'GitHub',
    link: 'https://github.com/Yogeth'
  },
  {
    media: "LinkedIn",
    link: 'https://www.linkedin.com/in/yogeth-c-r-493105333/'
  },
  {
    media: 'WhatsApp',
    link: 'https://wa.me/917845024959?text=Hi%20Yogeth'
  }
  ],
}