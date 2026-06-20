import { useState,createContext} from 'react'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
import { darkColors,lightColors} from './data/colors.js';

//context
export const UserContext =createContext();
function App() {
  const[isDark,setIsDark] = useState(false);
  const[theme,setTheme] = useState(false);
  const[formInput,setFormInput]= useState({
    name:'',email:'',body:' '
  });
  const [filterbtn,setfilterbtn]=useState('All Projects');

  let color =isDark?lightColors:darkColors;
  return (
    <div style={{background:color.background}} className='min-h-screen'> 
      <NavBar isDark={isDark} setIsDark={setIsDark} color={color}/>

      <UserContext.Provider value={{setFormInput,formInput,filterbtn,setfilterbtn,isDark,color}}>
        <Body theme={theme}/>
      </UserContext.Provider>
      <Footer color={color}/>
    </div>
  );
}

export default App
