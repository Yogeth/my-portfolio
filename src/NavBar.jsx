// import './styles/navBar.css'
import {Data}from './data/data.js'
export default function NavBar({setBurgerMenu,burgerMenu}) {
  return (
    <div className='bg-red-900'>
      <section>
        <img src="src/assets/terminal-box-fill-svgrepo-com.svg"
        className="w-[24px] h-[24px]"
         alt="terminal" />
        <p>{Data.name}.Dev</p>
      </section>
      {!burgerMenu?(
      <img src='src/assets/burger-menu.svg' alt="hamburger-Menu" 
      className="w-[24px] h-[24px]"
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
