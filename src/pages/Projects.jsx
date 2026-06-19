
import { ProjectsPageData } from "../data/data.js";
import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../App.jsx";

export default function Projects() {

  const{filterbtn,setfilterbtn} = useContext(UserContext)
  
  return (
    <div className="p-3 bg-background">
      <p className="font-bold tracking-widest text-text-primary">{ProjectsPageData.intro}</p>

      <h1 className="font-lg text-text-primary pt-3">{ProjectsPageData.heading}</h1>

      <ul className="bg-green-200 font-inter">
        {ProjectsPageData.filterbtns.map((element, i) => (
          <li key={i}
           className="text-md "
          //  style={{color:filterbtn === element && 'var(--accent-color)'}}
           onClick={()=>setfilterbtn(ProjectsPageData.filterbtns[i])} >
            {element}
          </li>
        ))}
      </ul>

      <section className="showCase">
        {
        ProjectsPageData.showcase
        .filter((val,k,arr)=>{
          if(filterbtn === 'All Projects') return arr
           return val.type === filterbtn && arr
        })
        .map((element, i) => (
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

        <div className="contactCard">
          <h1 className="question">Have a project in mind?</h1>

          <p className="contactText">Let's build something robust together.</p>

          <Link to="/contact">
            <button className="contactBtn">Get in Touch</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
