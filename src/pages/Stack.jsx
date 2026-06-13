import "/src/styles/pages/stack.css";
import { StackData } from "../data/data.js";
export default function Stack() {
  return (
    <div id="stackPage">
      <h1 id="stackHeading">{StackData.heading}</h1>
      <p id="stackPara">{StackData.para}</p>
      <div>
        {StackData.tech.skills.map((element, i) => (
          <section id="skillContainer" key={i}>
            <h1 id="title">{element.title}</h1>
            <div id="skillSection">
              <section >
                <p>{element.java}</p>
                <button></button>
              </section>
              <section>
                <p>{element.arch}</p>
                <button></button>
              </section>
              <section>
                <p>{element.database}</p>
                <button></button>
              </section>
            </div>
            <div id="stackContainer">
              {element.stacks.map((el, j) => (
                <span key={j}>
                  <p id="stacks">{el}</p>
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
