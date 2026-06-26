import { useContext } from "react";
import { HomePageData } from "../data/data.js";
import { Link } from "react-router";
import { UserContext } from "../App.jsx";
export default function Home() {
  const { isDark, color } = useContext(UserContext);
  return (
    <>
      <div className="p-5 font-inter xl:p-10">
        <div
          className="flex items-center justify-center gap-2 text-md border-1 border-solid rounded-sm p-1.5 w-60
        md:my-2 xl:rounded-none"
          style={{ color: color.accent }}
        >
          <p
            className="h-2.5 w-2.5 rounded-full animate-bounce"
            style={{ backgroundColor: color.accent }}
          ></p>
          <p>AVAILABLE</p>
          <p>FOR</p>
          <p>HIRE</p>
        </div>
        <p
          className="py-5 text-lg md:text-xl"
          style={{ color: color.textPrimary }}
        >
          {HomePageData.name} | {HomePageData.role}
        </p>
        <h1
          className="text-4xl font-bold leading-snug tracking-wide xl:text-7xl xl:tracking-wider"
          style={{ color: color.textPrimary }}
        >
          Building Scalable{" "}
          <span style={{ color: color.accent }} className="animate-pulse">
            Full-Stack
          </span>{" "}
          Solutions
        </h1>
        <p
          className="p-3  text-lg font-inter font-medium tracking-wide md:text-xl xl:tracking-tight"
          style={{ color: color.textSecondary }}
        >
          {HomePageData.para}
        </p>
        <div className=" flex flex-row gap-4 p-4">
          <Link to="/projects">
            <p
              className="p-4 rounded-lg font-medium lg:px-7 lg:rounded-xl xl:rounded-none"
              style={{ background: color.accent }}
            >
              View Projects
            </p>
          </Link>
          <a
            href="/Yogeth_Resume.docx"
            download="Yogeth_Resume"
            className=" border p-3 w-fit rounded-lg font-medium 
            text-lg xl:rounded-none"
            style={{ color: color.accent }}
          >
            Download CV
          </a>
        </div>
        <p
          className="text-lg p-3 font-semibold tracking-wider uppercase"
          style={{ color: color.textPrimary }}
        >
          Skills
        </p>
        <ul className=" grid grid-cols-3 gap-3 px-3 lg:grid-cols-4 md:grid-cols-5 xl:grid-cols-10 xl:gap-4 xl:pr-15">
          {HomePageData.skills.map((element, i) => (
            <li
              className="border p-2 flex justify-center items-center md:p-3 xl:p-4"
              style={{ color: color.accent }}
              key={i}
            >
              <p className="text-xs">{element}</p>
            </li>
          ))}
        </ul>
        <p
          className="text-lg p-3 mt-4 font-semibold tracking-wider"
          style={{ color: color.textPrimary }}
        >
          FEATURED_CAPABILITIES
        </p>
        <div className="p-3 text-lg font-medium flex flex-col gap-5 lg:grid lg:grid-cols-2 xl:grid-cols-4">
          {HomePageData.featuredCapabilites.map((element, i) => (
            <div
              key={i}
              className=" p-5 rounded-[7px]
             bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
            >
              <h1 className="text-accent text-2xl py-2 font-semibold tracking-wider font-inter">
                {element.title}
              </h1>
              <p
                className="text-text-secondary  tracking-wide md:text-xl "
                style={{ color: color.textSecondary }}
              >
                {element.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
