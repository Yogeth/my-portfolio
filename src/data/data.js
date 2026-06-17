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
  para: 'Specializing in robust backend architectures with Java and Spring Boot, integrated with dynamic, responsive React frontends.Delivering enterprise-grade precision in every module.',
  skills: ["Java 21", "Spring Boot 3", "React + JS", "CSS", "MariaDB", "Docker", "Bash", "Git","Build Tools"],
  featuredCapabilites: [
    {
      title: 'System Architecture',
      para: 'Designing distributed microservices with Spring Cloud and Eureka for maximum uptime and resilience.',
    },
    {
      title: 'API Excellence',
      para: 'Building clean, RESTful APIs using Spring Boot 3, documented with OpenAPI/Swagger and secured via OAuth2.',
    },
    {
      title:'Frontend Mastery',
      para:'Crafting responsive, dynamic interfaces with React and modern web technologies for seamless user experiences.'
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
      para: 'Developed a modern weather dashboard that fetches real-time weather data from external APIs. Features include city search, current conditions, temperature forecasts, humidity tracking, and responsive design for mobile and desktop devices.',
      tech: ['React', 'Css', 'Api'],
      type:'Reactjs'
    },
    {
      img: 'to do',
      title: 'ComplainTrack',
      para: 'ComplainTrack is a web-based complaint management system designed to streamline issue reporting and tracking within IT departments and organizations. Employees can submit complaints related to hardware failures, software issues, billing concerns, network problems, or other workplace incidents through a centralized platform.',
      tech: ['React', 'css', 'java & springboot','mariadb'],
      type:'Java / SpringBoot'
    },
    {
      img: 'to do',
      title: 'Task Manger',
      para: 'Task Manager is a React.js-based task management application that enables users to create, update, complete, and organize tasks through a simple and responsive interface. The project focuses on improving productivity and task organization using modern frontend development practices.',
      tech: ['React', 'css'],
      type:'Reactjs'
    },
    {
      img: 'to do',
      title: 'Hot Servlet',
      para: 'HotServlet is a deployment automation tool that streamlines Java Servlet development by automatically building WAR files with Gradle, installing Apache Tomcat when required, deploying applications, and launching the server through a single command.',
      tech: ['Bash', 'Gradle','Apache Tomcat'],
      type:'Bash'
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
        percent: '70%'
      },
      {
        txt: 'Maria DB',
        percent: '75%'
      },
      {
        txt: 'Maven & Gradle',
        percent: '85%'
      },
      {
           txt:'RESTful APIs',
           percent:'80%'  
      }
    ], [
      {
        txt: 'JavaScript & React.js',
        percent: '85%'
      },
      {
        txt: 'Vanilla css',
        percent: '89%'
      },
      {
        txt: 'Responsive Design',
        percent: '85%'
      },
    ],[
      
      {
        txt: 'Docker',
        percent: '65%'
      },
      {
        txt: 'Bash Scripting',
        percent: '80%'
      },
      {
        txt:'Git',
        percent:'80%'
      }
    ]]
  },
  devops: {
    title: 'DevOps',
    skill: ['Docker & Containerization', 'AWS (EC2, S3, RDS)', 'CI/CD Pipelines (Jenkins)', 'Git / Trunk-based Dev']
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
    media: 'whatsApp',
    link: 'https://wa.me?text=917845024959'
  }
  ],
}