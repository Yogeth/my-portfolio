import { HomePageData } from "../data/data.js"
import '/src/styles/pages/home.css'
export default function Home() {
  return (
    <div id="body">
      <span>AVAILABLE FOR HIRE</span>
      <p>{HomePageData.name} | {HomePageData.role}</p>
      <h1>{HomePageData.heading}</h1>
      <p>{HomePageData.para}</p>
      <section>View Projects</section>
      <section>Download CV</section>
      <ul>
        {
          HomePageData.skills.map((element,i)=>(
            <li key={i}>{element}</li>
          ))
        }
      </ul>

    </div>
  )
}
// export const HomePageData={
//   name:'yogeth',
//   role:'Full-Stack Developer',
//   heading:'Building Scalable Full-Stack Solutions',
//   para:'Specializing in robust backend architectures with Java and Spring Boot, integrated with dynamic, responsive React frontends.Delivering enterprise-grade precision in every module.',
//   skills:["Java 21","Spring Boot 3","React + JS","CSS","MariaDB","Docker","Bash","Git"]
// }
