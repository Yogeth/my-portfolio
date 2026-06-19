import { StackData } from "../data/data.js";

export default function Stack() {
  const title = ["Backend", "Frontend", "Devops"];

  return (
    <div className="bg-background p-3">
      <h1 className="text-text-primary text-xl font-bold tracking-wider">
        {StackData.heading}
      </h1>
      <p className="text-text-secondary text-lg pt-3">{StackData.para}</p>

      <div className="grid grid-cols-1 gap-7 pt-5 m-2">
        {StackData.tech.skills.map((el, k) => (
          <div
            className="bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter 
             backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4"
            key={k}
          >
            <h1 className="text-accent font-semibold text-xl">{title[k]}</h1>

            <div className="pt-2">
              {StackData.tech.skills[k].map((element, i) => (
                <div key={i}>
                  <section className="">
                    <p className="flex justify-between">
                      <span className="text-text-secondary font-medium font-inter">
                        {element.txt}
                      </span>
                      <span className="text-accent font-medium font-inter">
                        {element.percent}
                      </span>
                    </p>

                    <button className="border border-text-secondary h-2 w-full p-[2px] rounded-xl">
                      <div className=" bg-white  h-full rounded-xl animate-grow" 
                      style={{"--percent":element.percent}}
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
