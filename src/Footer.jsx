import './styles/footer.css'
import Home from './assets/home-icon.svg'
import Projects from './assets/projects.svg'
import Stack from './assets/stack.svg'
import Contact from './assets/mail.svg'
export default function Footer() {

  const data =['./assets/home-icon.svg','./assets/projects.svg',
    './assets/stack.svg','./assets/mail.svg'
  ]
  return (
    <div id='footer'>
      {
        data.map((element)=>
          (
            <img src={element} alt={element.toLowerCase()} />
          ))
      }
    </div>
  )
}
