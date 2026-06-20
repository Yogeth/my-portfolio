import { useState,createContext} from 'react'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';

//context
export const UserContext =createContext();
function App() {
  const[isDark,setIsDark] = useState(false);
  const[theme,setTheme] = useState(false);
  const[formInput,setFormInput]= useState({
    name:'',email:'',body:' '
  });
  const [filterbtn,setfilterbtn]=useState('All Projects');
  return (
    <div className='bg-red-200'> 
      <NavBar />

      <UserContext.Provider value={{setFormInput,formInput,filterbtn,setfilterbtn}}>
        <Body theme={theme}/>
      </UserContext.Provider>
      <Footer/>
    </div>
  );
}

export default App
