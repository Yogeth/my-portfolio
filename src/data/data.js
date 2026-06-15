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
  name: 'yogeth',
  role: 'Full-Stack Java Developer',
  para: 'Specializing in robust backend architectures with Java and Spring Boot, integrated with dynamic, responsive React frontends.Delivering enterprise-grade precision in every module.',
  skills: ["Java 21", "Spring Boot 3", "React + JS", "CSS", "MariaDB", "Docker", "Bash", "Git"],
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
      img: 'src/assets/images/unnamed.png',
      title: 'DataPulse Analytics',
      para: 'Real-time data visualization platform processing million-point datasets with interactive WebGL rendering.',
      tech: ['React', 'css', 'java']
    },
    {
      img: 'src/assets/images/unnamed.png',
      title: 'DataPulse Analytics',
      para: 'Real-time data visualization platform processing million-point datasets with interactive WebGL rendering.',
      tech: ['React', 'css', 'java']
    },
    {
      img: 'src/assets/images/unnamed.png',
      title: 'DataPulse Analytics',
      para: 'Real-time data visualization platform processing million-point datasets with interactive WebGL rendering.',
      tech: ['React', 'css', 'java']
    },
  ]

}

export const StackData = {
  heading: 'Technical Proficiency',
  para: 'A deep dive into my architectural toolset. Focused on building scalable, high-performance Java ecosystems with modern frontend integration and automated deployment pipelines.',
  tech: {
    skills: [[
      {
        txt: 'java & Spring Boot',
        percent: '90%'
      },
      {
        txt: 'Microservices Architecture',
        percent: '88%'
      },
      {
        txt: 'SQL & NoSQL Databases',
        percent: '82%'
      }
    ], [
      {
        txt: 'React.js',
        percent: '85%'
      },
      {
        txt: 'TailWind css',
        percent: '90%'
      },
      {
        txt: 'TypeScript',
        percent: '75%'
      },
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