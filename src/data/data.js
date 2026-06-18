// import { Link } from "react-router"

// export const Data = {
//   "name": "Yogeth",

// }

// export const FooterData = [
//   {
//     'endpoint': '/',
//     'src': 'src/assets/home-icon.svg',
//     'alt': 'home-icon',
//     'txt': 'Home'
//   },
//   {
//     'endpoint': '/projects',
//     'src': 'src/assets/projects.svg',
//     'alt': 'project-icon',
//     'txt': 'Projects'
//   },
//   {
//     'endpoint': '/stack',
//     'src': 'src/assets/stack.svg',
//     'alt': 'stack-icon',
//     'txt': 'Stack'
//   },
//   {
//     'endpoint': '/contact',
//     'src': 'src/assets/mail.svg',
//     'alt': 'mail-icon',
//     'txt': 'Contact'
//   }
// ]

// export const HomePageData = {
//   name: 'Yogeth',
//   role: 'Full-Stack Java Developer',
//   para: 'Specializing in robust backend architectures with Java and Spring Boot, integrated with dynamic, responsive React frontends.Delivering enterprise-grade precision in every module.',
//   skills: ["Java 21", "Spring Boot 3", "React + JS", "CSS", "MariaDB", "Docker", "Bash", "Git","Build Tools"],
//   featuredCapabilites: [
//     {
//       title: 'System Architecture',
//       para: 'Designing distributed microservices with Spring Cloud and Eureka for maximum uptime and resilience.',
//     },
//     {
//       title: 'API Excellence',
//       para: 'Building clean, RESTful APIs using Spring Boot 3, documented with OpenAPI/Swagger and secured via OAuth2.',
//     },
//     {
//       title:'Frontend Mastery',
//       para:'Crafting responsive, dynamic interfaces with React and modern web technologies for seamless user experiences.'
//     }
//   ]
// }

// export const ProjectsPageData = {
//   intro: 'What I Build',
//   heading: 'End-to-end solutions combining clean code, scalable architecture, and user-centric design.',
//   filterbtns: ['All Projects', 'Java / SpringBoot', 'Reactjs', 'Bash'],
//   showcase: [
//     {
//       img: 'src/assets/images/weather.webp',
//       title: 'Weather App',
//       para: 'Developed a modern weather dashboard that fetches real-time weather data from external APIs. Features include city search, current conditions, temperature forecasts, humidity tracking, and responsive design for mobile and desktop devices.',
//       tech: ['React', 'Css', 'Api'],
//       type:'Reactjs'
//     },
//     {
//       img: 'to do',
//       title: 'ComplainTrack',
//       para: 'ComplainTrack is a web-based complaint management system designed to streamline issue reporting and tracking within IT departments and organizations. Employees can submit complaints related to hardware failures, software issues, billing concerns, network problems, or other workplace incidents through a centralized platform.',
//       tech: ['React', 'css', 'java & springboot','mariadb'],
//       type:'Java / SpringBoot'
//     },
//     {
//       img: 'to do',
//       title: 'Task Manger',
//       para: 'Task Manager is a React.js-based task management application that enables users to create, update, complete, and organize tasks through a simple and responsive interface. The project focuses on improving productivity and task organization using modern frontend development practices.',
//       tech: ['React', 'css'],
//       type:'Reactjs'
//     },
//     {
//       img: 'to do',
//       title: 'Hot Servlet',
//       para: 'HotServlet is a deployment automation tool that streamlines Java Servlet development by automatically building WAR files with Gradle, installing Apache Tomcat when required, deploying applications, and launching the server through a single command.',
//       tech: ['Bash', 'Gradle','Apache Tomcat'],
//       type:'Bash'
//     },
//   ]

// }

// export const StackData = {
//   heading: 'Technical Proficiency',
//   para: 'A deep dive into my architectural toolset. Focused on building scalable, high-performance Java ecosystems with modern frontend integration and automated deployment pipelines.',
//   tech: {
//     skills: [[
//       {
//         txt: 'Java & Spring Boot',
//         percent: '70%'
//       },
//       {
//         txt: 'Maria DB',
//         percent: '75%'
//       },
//       {
//         txt: 'Maven & Gradle',
//         percent: '85%'
//       },
//       {
//            txt:'RESTful APIs',
//            percent:'80%'  
//       }
//     ], [
//       {
//         txt: 'JavaScript & React.js',
//         percent: '85%'
//       },
//       {
//         txt: 'Vanilla css',
//         percent: '89%'
//       },
//       {
//         txt: 'Responsive Design',
//         percent: '85%'
//       },
//     ],[
      
//       {
//         txt: 'Docker',
//         percent: '65%'
//       },
//       {
//         txt: 'Bash Scripting',
//         percent: '80%'
//       },
//       {
//         txt:'Git',
//         percent:'80%'
//       }
//     ]]
//   },
//   devops: {
//     title: 'DevOps',
//     skill: ['Docker & Containerization', 'AWS (EC2, S3, RDS)', 'CI/CD Pipelines (Jenkins)', 'Git / Trunk-based Dev']
//   }
// }

// export const ContactData = {
//   para: 'Ready to bridge the gap between concept and production. Whether you have a project inquiry or just want to discuss the latest Java frameworks, my terminal is always open.',
//   social: [{
//     media: 'GitHub',
//     link: 'https://github.com/Yogeth'
//   },
//   {
//     media: "LinkedIn",
//     link: 'https://www.linkedin.com/in/yogeth-c-r-493105333/'
//   },
//   {
//     media: 'whatsApp',
//     link: 'https://wa.me?text=917845024959'
//   }
//   ],
// }



import { Link } from "react-router"

export const Data = {
  "name": "Yogeth",
}

export const FooterData = [
  {
    'endpoint': '/',
    'src': 'src/assets/home-icon.svg',
    'alt': 'home-icon',
    'txt': 'Home'
  },
  {
    'endpoint': '/projects',
    'src': 'src/assets/projects.svg',
    'alt': 'project-icon',
    'txt': 'Projects'
  },
  {
    'endpoint': '/stack',
    'src': 'src/assets/stack.svg',
    'alt': 'stack-icon',
    'txt': 'Stack'
  },
  {
    'endpoint': '/contact',
    'src': 'src/assets/mail.svg',
    'alt': 'mail-icon',
    'txt': 'Contact'
  }
]

export const HomePageData = {
  name: 'Yogeth',
  role: 'Full-Stack Java Developer',
  para: 'Specializing in robust backend architectures with Java and Spring Boot, integrated with dynamic, responsive React frontends. Delivering enterprise-grade precision in every module.',
  skills: ["Java 21", "Spring Boot 3", "React + JS", "CSS", "MariaDB", "Docker", "Bash", "Git", "Build Tools"],
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
      img: 'src/assets/images/weather.webp',
      title: 'Weather App',
      para: 'A modern weather dashboard built with React that fetches real-time weather data from external APIs. Demonstrates API integration expertise with live city search, multi-day forecasts, humidity tracking, and fully responsive design that adapts seamlessly across mobile, tablet, and desktop devices.',
      tech: ['React 18', 'CSS3', 'REST APIs', 'Responsive Design'],
      type: 'Reactjs',
      github: 'https://github.com/Yogeth/weather-app',
      features: ['Real-time weather data', 'City search functionality', 'Temperature forecasts', 'Mobile responsive']
    },
    {
      img: 'src/assets/images/complaintrack-system.webp',
      title: 'ComplainTrack',
      para: 'Enterprise-level complaint management system designed to streamline issue tracking within IT departments. Features a React frontend for intuitive complaint submission and a Spring Boot backend with MariaDB persistence. Employees can report hardware failures, software issues, billing concerns, and network problems through a centralized platform with role-based dashboards.',
      tech: ['React', 'Spring Boot 3', 'REST APIs', 'MariaDB', 'Docker'],
      type: 'Java / SpringBoot',
      github: 'https://github.com/Yogeth/complaintrack',
      features: ['User authentication & authorization', 'Complaint CRUD operations', 'Status tracking', 'Admin dashboard', 'Responsive UI']
    },
    {
      img: 'src/assets/images/task-manager-ui.webp',
      title: 'Task Manager',
      para: 'A productive task management application built with React.js that enables users to create, update, complete, and organize tasks through an intuitive and responsive interface. Focuses on improving workflow efficiency with real-time task updates, filtering options, and clean UI patterns using modern React hooks and state management.',
      tech: ['React 18', 'JavaScript (ES6+)', 'CSS3', 'React Hooks', 'Local Storage'],
      type: 'Reactjs',
      github: 'https://github.com/Yogeth/task-manager',
      features: ['Add & manage tasks', 'Mark complete/incomplete', 'Delete tasks', 'Filter by status', 'Local persistence']
    },
    {
      img: 'src/assets/images/hot-servlet-cli.webp',
      title: 'Hot Servlet',
      para: 'Intelligent deployment automation tool that revolutionizes Java Servlet development workflows. Automatically handles WAR file building with Gradle, Apache Tomcat installation and configuration, application deployment, and server launch through a single command. Significantly reduces deployment time and eliminates manual configuration errors.',
      tech: ['Bash Scripting', 'Gradle', 'Apache Tomcat', 'Shell Commands', 'Automation'],
      type: 'Bash',
      github: 'https://github.com/Yogeth/hot-servlet',
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