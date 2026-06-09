import './styles/navBar.css'
import burgerMenu from './assets/burger-menu.svg'
import Data from './data/data.js'
export default function NavBar() {
  return (
    <div id='navbar'>
      <p>{Data.name}.dev</p>
      <img src={burgerMenu} alt="hamburger-Menu" />

    </div>
  )
}
