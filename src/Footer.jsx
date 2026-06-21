import { FooterData } from "/src/data/data.js";
import { Link } from "react-router-dom";
export default function Footer({ color }) {
  return (
    <div
      className="p-3 flex justify-around fixed w-full bottom-0 z-10 md:justify-evenly"
      style={{
        backgroundColor: color.surface,
        transition: "background-color 1s ease-in out",
      }}
    >
      {FooterData.map((element, i) => (
        <Link className="link" to={element.endpoint} key={i}>
          <section className="flex flex-col justify-center items-center ">
            <img
              src={element.src}
              alt={element.alt}
              className="md:h-8 md:w-8"
              height="24px"
              width="24px"
            />
            <p
              className="text-xs font-medium
             tracking-tight font-inter md:font-semibold md:tracking-normal md:text-sm"
              style={{ color: color.textPrimary }}
            >
              {element.txt}
            </p>
          </section>
        </Link>
      ))}
    </div>
  );
}
