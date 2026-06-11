import '/src/styles/pages/projects.css'
import { ProjectsPageData } from '../data/data.js'
export default function Projects() {
  return (
    <div id="projectsPage">
     <p id='intro'>{ProjectsPageData.intro.toUpperCase()}</p>
     <h1 id='projectHeading'>{ProjectsPageData.heading}</h1>
     <ul>
      {
        ProjectsPageData.filterbtns.map((element,i)=>(
          <li key={i}>{element}</li>
        ))
      }
     </ul>
     <section id='showCase'>
      {
        ProjectsPageData.showcase.map((element,i)=>(
         <div key={i}>
          <img id='projectImg' src={element.img} alt='none' loading='lazy'/>
          <h2 id='projectTitle'>{element.para}</h2>
          <p id='projectPara'>{element.tech}</p>

         </div>
        ))
      }
     </section>
    </div>
  )
}
