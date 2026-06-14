import { useState } from 'react'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
import BurgerMenu from './pages/BurgerMenu.jsx';
import './styles/maincontainer.css';

function App() {
  const[burgerMenu,setBurgerMenu] = useState(false);
  const[theme,setTheme] = useState(false);
  return (
    <div id='mainContainer'> 
     {burgerMenu&&<BurgerMenu 
     setBurgerMenu={setBurgerMenu}
     theme={theme}
     setTheme={setTheme}
     />}
      <NavBar  burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App
