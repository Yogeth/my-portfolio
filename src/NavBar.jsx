import './styles/navBar.css'
import {Data}from './data/data.js'
export default function NavBar({setBurgerMenu,burgerMenu}) {
  return (
    <div className='navbar'>
      <section>
        <img src="src/assets/terminal-box-fill-svgrepo-com.svg" alt="terminal" />
        <p>{Data.name}.Dev</p>
      </section>
      {!burgerMenu?(
      <img src='src/assets/burger-menu.svg' alt="hamburger-Menu" 
       onClick={()=>setBurgerMenu(!burgerMenu)}
      />
      ):(
      <img src="/src/assets/cancel-svgrepo-com.svg" alt="cancel"
      height='30px' width="30px"
      onClick={()=>setBurgerMenu(!burgerMenu)} />
      )
      }
    </div>
  )
}
