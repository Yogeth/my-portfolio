import { useContext } from "react";
import { StackData } from "../data/data.js";
import { UserContext } from "../App.jsx";

export default function Stack() {
  const title = ["Backend", "Frontend", "Devops"];
  const { color } = useContext(UserContext);
  return (
    <div className=" p-3 md:p-5 xl:p-10">
      <h1
        className="text-xl font-bold tracking-wider md:text-2xl"
        style={{ color: color.textPrimary }}
      >
        {StackData.heading}
      </h1>
      <p
        className="tracking-wide text-lg pt-3 md:text-xl"
        style={{ color: color.textSecondary }}
      >
        {StackData.para}
      </p>

      <div className="grid grid-cols-1 gap-7 pt-5 m-2 md:p-5 lg:grid-cols-2 xl:grid-cols-3 xl:p-8">
        {StackData.tech.skills.map((el, k) => (
          <div
            className="bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter 
             backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4 md:p-10 xl:p-13"
            key={k}
          >
            <h1
              className="font-semibold text-xl md:text-2xl"
              style={{ color: color.accent }}
            >
              {title[k]}
            </h1>

            <div className="pt-2 md:pt-4">
              {StackData.tech.skills[k].map((element, i) => (
                <div key={i}>
                  <section className="">
                    <p className="flex justify-between md:text-lg">
                      <span
                        className=" font-medium font-inter"
                        style={{ color: color.textSecondary }}
                      >
                        {element.txt}
                      </span>
                      <span
                        className="font-medium font-inter"
                        style={{ color: color.accent }}
                      >
                        {element.percent}
                      </span>
                    </p>

                    <button
                      className="border h-2 w-full p-[2px] rounded-xl"
                      style={{ borderColor: color.textPrimary }}
                    >
                      <div
                        className="h-full rounded-xl btn-span"
                        style={{
                          "--width-percent": element.percent,
                          backgroundColor: color.textSecondary,
                        }}
                      ></div>
                    </button>
                  </section>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
