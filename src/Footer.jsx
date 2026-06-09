import './styles/footer.css'
import {FooterData} from '/src/data/data.js'
export default function Footer() {

  return (
    <div id='footer'>
     {
      FooterData.map((element,i)=>(
          <section key={i}>
            <img src={element.src} alt={element.alt} />
            <p>{element.txt}</p>
          </section>
      ))
     }
    </div>
  )
}
