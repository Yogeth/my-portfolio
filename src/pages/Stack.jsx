import "/src/styles/pages/stack.css";
import { StackData } from "../data/data.js";

export default function Stack() {
  const title = ["Backend", "Frontend", "Devops"];

  return (
    <div className="stackPage">
      <h1 className="stackHeading">{StackData.heading}</h1>
      <p className="stackPara">{StackData.para}</p>

      {StackData.tech.skills.map((el, k) => (
        <div className="skillContainer" key={k}>
          <h1 className="title">{title[k]}</h1>

          <div className="skillSection">
            {StackData.tech.skills[k].map((element, i) => (
              <div key={i}>
                <section className="skillPercent">
                  <p>
                    <span>{element.txt}</span>
                    <span>{element.percent}</span>
                  </p>

                  <button className="skillbtn">
                    <div
                      className="btn-span"
                      style={{ "--percent": element.percent }}
                    ></div>
                  </button>
                </section>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}