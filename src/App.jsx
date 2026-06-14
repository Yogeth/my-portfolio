import { useState } from 'react'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
import BurgerMenu from './pages/BurgerMenu.jsx';
import './styles/maincontainer.css';

function App() {
  const[burgermenu,setBurgerMenu] = useState(false);
  return (
    <div id='mainContainer'> 
     {burgermenu&&<BurgerMenu setBurgerMenu={setBurgerMenu}/>}
      <NavBar setBurgerMenu={setBurgerMenu}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App
