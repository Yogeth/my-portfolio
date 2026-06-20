
import { ProjectsPageData } from "../data/data.js";
import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../App.jsx";

export default function Projects() {

  const{filterbtn,setfilterbtn,color} = useContext(UserContext)
  
  return (
    <div className="p-3 xl:p-10">
      <p className="font-bold text-xl tracking-widest md:text-2xl" style={{color:color.textPrimary}}>{ProjectsPageData.intro}</p>

      <h1 className="text-lg pt-3 md:text-xl xl:tracking-wider" style={{color:color.textSecondary}}>{ProjectsPageData.heading}</h1>

      <ul className="font-inter flex flex-wrap flex-row gap-3 py-6 w-4/5">
        {ProjectsPageData.filterbtns.map((element, i) => (
          <li key={i}
           className="text-md text-md border rounded-[7px] p-2 md:p-3 xl:p-4 xl:rounded-none"
           style={{color:color.accent}}
           onClick={()=>setfilterbtn(ProjectsPageData.filterbtns[i])} >
            {element}
          </li>
        ))}
      </ul>

      <section className="grid grid-cols-1 p-1 gap-7 lg:grid-cols-2 xl:grid-cols-4 xl:p-3">
        {
        ProjectsPageData.showcase
        .filter((val,k,arr)=>{
          if(filterbtn === 'All Projects') return arr
           return val.type === filterbtn && arr
        })
        .map((element, i) => (
            <div key={i} className="p-6 bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
              <span className="flex items-center justify-between ">
                <h1 className="text-3xl font-inter font-semibold"
                style={{color:color.accent}}>{element.title}</h1>

                <a href="https://weather-app-woad-mu-26.vercel.app/">
                  <img
                  className=""
                  src="/src/assets/open-in-new-svgrepo-com.svg"
                  alt="open-in-new"
                  height="20px"
                  width="20px"
                />
                </a>
              </span>

              <p className=" text-lg font-medium font-inter pt-5 tracking-wide md:text-xl"
              style={{color:color.textSecondary}}>{element.para}</p>

              <ul className="flex flex-wrap gap-2 pt-3 w-fit">
                {element.tech.map((el, i) => (
                  <li className="border flex
                  justify-center items-center flex-row rounded-sm text-xs p-2 md:p-3 md:text-sm" key={i}
                  style={{color:color.accent}}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
        ))}
</section>
       <div className=" xl:w-[1536px] xl:grid xl:justify-start">
         <div className="p-6 bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding 
             backdrop-filter backdrop-blur-sm
              bg-opacity-10 border border-gray-100 flex flex-col gap-3 items-center md:gap-4">
          <h1 className="text-2xl font-semibold md:text-3xl" style={{color:color.textPrimary}}>Have a Project In Mind ?</h1>

          <p className="font-medium font-jetbrains text-lg tracking-wide md:text-2xl md:tracking-normal" style={{color:color.textSecondary}}>Let's build something robust together.</p>

          <Link to="/contact" className="">
            <button className="text-shadow-xs  font-semibold font-inter rounded-2xl p-4 md:px-8"
            style={{backgroundColor:color.textSecondary,color:color.accent}}>Get in Touch</button>
          </Link>
        </div>
       </div>
    </div>
  );
}
