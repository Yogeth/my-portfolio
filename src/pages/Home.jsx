import { HomePageData } from "../data/data.js";
import { Link } from "react-router";
export default function Home() {
  return (
    <>
      <div className="bg-background dark:bg-white p-5 font-inter">
        <div className="flex items-center text-accent gap-2 text-md border-1 border-solid rounded-xl p-1 w-60
        md:text-xl md:w-100">
          <p className="bg-accent h-2.5 w-2.5 rounded-full "></p>
          <p>AVAILABLE</p>
          <p>FOR</p>
          <p>HIRE</p>
        </div>
        <p className="py-5 text-text-primary text-lg">
          {HomePageData.name} | {HomePageData.role}
        </p>
        <h1 className="text-4xl font-bold leading-snug tracking-wide text-text-primary">
          Building Scalable <span className="text-accent">Full-Stack</span> Solutions
        </h1>
        <p  className="p-3  text-lg font-inter font-medium text-text-secondary tracking-wide">{HomePageData.para}</p>
        <div className=" flex flex-row gap-4 p-4">
          <Link to="/projects">
            <p className="bg-accent p-4 rounded-lg font-medium">View Projects</p>
          </Link>
          <a
            href="/src/assets/doc/Yogeth_CR_Resume.pdf"
            download="Yogeth_Resume"
            className=" border p-3 w-fit rounded-lg font-medium 
            text-accent text-lg"
          >
           Download CV
          </a>
        </div>
        <p className="text-text-primary text-lg p-3 font-semibold tracking-wider uppercase">Skills</p>
        <ul className=" grid grid-cols-3 gap-3 px-3">
          {HomePageData.skills.map((element, i) => (
            <li className="border text-accent p-2 flex justify-center items-center" key={i}>
              <p className="text-xs">{element}</p>
            </li>
          ))}
        </ul>
         <p className="text-text-primary text-lg p-3 mt-4 font-semibold tracking-wider">FEATURED_CAPABILITIES</p>
      <div className="p-3 text-lg font-medium text-text-secondary flex flex-col gap-5">
          {HomePageData.featuredCapabilites.map((element, i) => (
            <div key={i} className=" p-5 rounded-[7px]
             bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              <h1 className="text-accent text-2xl py-2 font-semibold tracking-wider font-inter">{element.title}</h1>
              <p className="text-text-secondary  tracking-wide">{element.para}</p>
            </div>
          ))}
      </div>
      </div>
    </>
  );
}
