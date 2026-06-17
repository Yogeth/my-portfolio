import { HomePageData } from "../data/data.js";
import { Link } from "react-router";
import "/src/styles/pages/home.css";
export default function Home() {
  return (
    <>
      <div id="body">
        <div id="hire">
          <p id="dot"></p>
          <p>AVAILABLE</p>
          <p>FOR</p>
          <p>HIRE</p>
        </div>
        <p >
          {HomePageData.name} | {HomePageData.role}
        </p>
        <h1>
          Building Scalable <span>Full-Stack</span> Solutions
        </h1>
        <p style={{
          fontSize:'20px',
          lineHeight:'1.6',
          fontWeight:'400',
        }}>{HomePageData.para}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <p id="projects">View Projects</p>
          </Link>
          <a
            href="/src/assets/doc/Yogeth_CR_Resume.pdf"
            download="Yogeth_Resume"
            id="cv"
          >
            Download CV
          </a>
        </div>
        <h1>skills</h1>
        <ul>
          {HomePageData.skills.map((element, i) => (
            <li id="skills" key={i}>
              {element}
            </li>
          ))}
        </ul>
      </div>
      <div id="featured_capabilities">
        <p id="fcheading">FEATURED_CAPABILITIES</p>
          {HomePageData.featuredCapabilites.map((element, i) => (
            <div key={i} id="sysarc">
              <h1>{element.title}</h1>
              <p>{element.para}</p>
            </div>
          ))}
      </div>
    </>
  );
}
