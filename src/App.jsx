import { useState,createContext} from 'react'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
import BurgerMenu from './pages/BurgerMenu.jsx';
import './styles/maincontainer.css';

function App() {
  const[burgerMenu,setBurgerMenu] = useState(false);
  const[theme,setTheme] = useState(false);
  const[formInput,setFormInput]= useState({
    name:'',email:'',body:''
  });
  //context
  export const UserContext =createContext();
  return (
    <div id='mainContainer'> 
     {burgerMenu&&<BurgerMenu 
     setBurgerMenu={setBurgerMenu}
     theme={theme}
     setTheme={setTheme}
     />}
      <NavBar  burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>

      <UserContext.Provider value={{setFormInput}}>
        <Body theme={theme}/>
      </UserContext.Provider>
      <Footer/>
    </div>
  );
}

export default App
