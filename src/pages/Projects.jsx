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
          <li className="filterBtn" key={i}>
            {element}
          </li>
        ))}
      </ul>

      <section id="showCase">
        {ProjectsPageData.showcase.map((element, i) => (
          <div className="projectContainer" key={i}>
            <img
              className="projectImg"
              src={element.img}
              alt={element.title}
              loading="lazy"
            />

            <div className="textContent">
              <span className="titleSpan">
                <h1 className="projectTitle">{element.title}</h1>

                <a href="https://weather-app-woad-mu-26.vercel.app/">
                  <img
                  className="openIcon"
                  src="/src/assets/open-in-new-svgrepo-com.svg"
                  alt="open-in-new"
                />
                </a>
              </span>

              <p className="projectDescription">{element.para}</p>

              <ul className="techContainer">
                {element.tech.map((el, i) => (
                  <li className="tech" key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div id="contactCard">
          <h1>Have a project in mind?</h1>

          <p className="contactText">Let's build something robust together.</p>

          <Link to="/contact">
            <button className="contactBtn">Get in Touch</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
