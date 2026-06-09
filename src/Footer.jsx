import './styles/footer.css'
import {FooterData} from '/src/data/data.js'
import { Link } from 'react-router-dom'
export default function Footer() {

  return (
    <div id='footer'>
     {
      FooterData.map((element,i)=>(
        <Link className='link' to={element.endpoint} key={i}>
          <section>
            <img src={element.src} alt={element.alt} />
            <p>{element.txt}</p>
          </section>
        </Link>
      ))
     }
    </div>
  )
}
