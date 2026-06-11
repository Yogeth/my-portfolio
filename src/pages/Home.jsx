import { HomePageData } from "../data/data.js"
import '/src/styles/pages/home.css'
export default function Home() {
  return (
    <div id="body">
      <div id="hire">
          <p id="dot">●</p>
          <p>AVAILABLE</p>
          <p>FOR</p>
          <p>HIRE</p>
        </div>
      <p>{HomePageData.name} | {HomePageData.role}</p>
      <h1>Building Scalable <span>Full-Stack</span> Solutions</h1>
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