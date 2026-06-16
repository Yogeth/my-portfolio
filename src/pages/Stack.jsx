import "/src/styles/pages/stack.css";
import { StackData } from "../data/data.js";
export default function Stack() {

  const title=['Backend','Frontend','Devops']
  return (
    <div id="stackPage">
      <h1 id="stackHeading">{StackData.heading}</h1>
      <p id="stackPara">{StackData.para}</p>
      {
        StackData.tech.skills.map((el,k) => (
           <div id="skillContainer" key={k}>
         <h1 id="title">{title[k]}</h1>
          <div id="skillSection">
         {StackData.tech.skills[k].map((element,i) => (
          <div key={i}>
              <section id="skillPercent" >
                <p>
                  <span>{element.txt}</span>
                  <span >{element.percent}</span>
                </p>
                <button id="skillbtn">
                  <div id="btn-span"
                   style={{width:element.percent}}></div>
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
