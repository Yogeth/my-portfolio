import "/src/styles/pages/stack.css";
import { StackData } from "../data/data.js";
export default function Stack() {
  return (
    <div id="stackPage">
      <h1 id="stackHeading">{StackData.heading}</h1>
      <p id="stackPara">{StackData.para}</p>
      <div id="skillContainer">
         <h1 id="title">Backend Engineering</h1>
          <div id="skillSection">
         {StackData.tech.skills.map((element) => (
          <>
              <section id="skillPercent">
                <p>
                  <span>{element.txt}</span>
                  <span>{element.percent}</span>
                </p>
                <button id="skillbtn">
                  <button id="btn-span"
                   style={{width:element.percent}}></button>
                </button>
              </section>
         </>
        ))}
        </div>
         {/* <div id="stackContainer">
          {
            StackData.tech.stacks.map((element,i)=>(
              <button key={i} id="stackbtn">{element}</button>
            ))
          }
            </div> */}
      </div>
    </div>
  );
}
