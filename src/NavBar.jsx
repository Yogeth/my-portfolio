import './styles/navBar.css'
import {Data}from './data/data.js'
export default function NavBar({setBurgerMenu}) {
  return (
    <div id='navbar'>
      <p>{Data.name}.dev</p>
      <img src='src/assets/burger-menu.svg' alt="hamburger-Menu" 
       onClick={()=>setBurgerMenu(true)}
      />

    </div>
  )
}
