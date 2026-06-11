import { HomePageData } from "../data/data.js";
import "/src/styles/pages/home.css";
export default function Home() {
  return (
    <>
    <div id="body">
      <div id="hire">
        <p id="dot">●</p>
        <p>AVAILABLE</p>
        <p>FOR</p>
        <p>HIRE</p>
      </div>
      <p>
        {HomePageData.name} | {HomePageData.role}
      </p>
      <h1>
        Building Scalable <span>Full-Stack</span> Solutions
      </h1>
      <p>{HomePageData.para}</p>
      <div style={{display:"flex",
        flexDirection:"column",
        gap:"10px" }}>
        <p id="projects">View Projects</p>
      <p id="cv">Download CV</p>
      </div>
      <ul>
        {HomePageData.skills.map((element, i) => (
          <li id="skills" key={i}>
            {element}
          </li>
        ))}
      </ul>
    </div>
    <div id="featured_capabilities">
        <p>FEATURED_CAPABILITIES</p>
        <div id="sysarc">
          <h1>{HomePageData.sysarcTitle}</h1>
          <p>{HomePageData.sysarc}</p>
        </div>
        <div id="api">
          <h1>{HomePageData.apiTitle}</h1>
          <p>{HomePageData.apiExcellence}</p>
        </div>
      </div>
    </>
  );
}
