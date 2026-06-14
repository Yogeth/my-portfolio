import './styles/navBar.css'
import {Data}from './data/data.js'
export default function NavBar({setBurgerMenu,burgerMenu}) {
  return (
    <div id='navbar'>
      <p>{Data.name}.dev</p>
      {!burgerMenu?(
      <img src='src/assets/burger-menu.svg' alt="hamburger-Menu" 
       onClick={()=>setBurgerMenu(true)}
      />
      ):(
      <img src="/src/assets/cancel-svgrepo-com.svg" alt="cancel"
      onClick={()=>setBurgerMenu(false)} />
      )
      }
    </div>
  )
}
