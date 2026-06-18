import { HomePageData } from "../data/data.js";
import { Link } from "react-router";
import "/src/styles/pages/home.css";
export default function Home() {
  return (
    <>
      <div className="body">
        <div className="hire">
          <p className="dot"></p>
          <p>AVAILABLE</p>
          <p>FOR</p>
          <p>HIRE</p>
        </div>
        <p >
          {HomePageData.name} | {HomePageData.role}
        </p>
        <h1 className="bodytopheading">
          Building Scalable <span>Full-Stack</span> Solutions
        </h1>
        <p  className='homeIntroPara'>{HomePageData.para}</p>
        <div className="button-group">
          <Link to="/projects" className="btn-primary">
            <i className="ti ti-arrow-right">View Projects</i>
          </Link>
          <a
            href="/src/assets/doc/Yogeth_CR_Resume.pdf"
            download="Yogeth_Resume"
            className='btn-secondary'
          >
              <i className="ti ti-download"></i>
            Download CV
          </a>
        </div>
        <p className="skillheading">skills</p>
        <ul>
          {HomePageData.skills.map((element, i) => (
            <li className="skills" key={i}>
              {element}
            </li>
          ))}
        </ul>
         <p className="fcheading">FEATURED_CAPABILITIES</p>
      <div className="featured_capabilities">
          {HomePageData.featuredCapabilites.map((element, i) => (
            <div key={i} className="sysarc">
              <h1>{element.title}</h1>
              <p className="sysarcPara">{element.para}</p>
            </div>
          ))}
      </div>
      </div>
    </>
  );
}
