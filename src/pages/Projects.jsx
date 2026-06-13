import "/src/styles/pages/projects.css";
import { ProjectsPageData } from "../data/data.js";
import { Link } from "react-router";
export default function Projects() {
  return (
    <div id="projectsPage">
      <p id="intro">{ProjectsPageData.intro.toUpperCase()}</p>
      <h1 id="projectHeading">{ProjectsPageData.heading}</h1>
      <ul id="filterContainer">
        {ProjectsPageData.filterbtns.map((element, i) => (
          <li id="filterBtns" key={i}>
            {element}
          </li>
        ))}
      </ul>
      <section id="showCase">
        {ProjectsPageData.showcase.map((element, i) => (
          <div id="projectContainer" key={i}>
            <img id="projectImg" src={element.img} alt="none" loading="lazy" />
            <div id="textContent">
              <span id="titleSpan">
                <h1 id="projectTitle">{element.title}</h1>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="src\assets\open-in-new-svgrepo-com.svg"
                  alt="open-in-new"
                />
              </span>
              <p
                style={{
                  fontSize: "16pt",
                  fontWeight: "500",
                  letterSpacing: "1px",
                }}
              >
                {element.para}
              </p>
              <ul id="techContainer">
                {element.tech.map((el, i) => (
                  <li id="tech" key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div id="_">
          <h1>Have a project in mind?</h1>
          <p style={{ fontSize: "16pt", letterSpacing: "1px" }}>
            Let's build something robust together.
          </p>
          <Link to={'/contact'}>
          <button style={{ padding: "15px 0 15px 0", 
            borderRadius: "50px",width:'100%' }}>
            Get in Touch
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
