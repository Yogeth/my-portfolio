
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

export default function Body({theme}) {
  
  return (
    <div style={{backgroundColor:theme?'white':'black'}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/stack" element={<Stack/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <div style={{color:'white',
        display:'flex',flexDirection:'column',gap:'20px',padding:'10px',
        borderTop:'1px solid white'
      }}>
       <section style={{display:'flex',gap:'10px',justifyContent:'center'}}>
         <img style={{height:'25px',width:'25px'}}
         src="src/assets/terminal-box-fill-svgrepo-com.svg" alt="terminal" />
         <h2>Yogeth.Dev</h2>
       </section>
       <h4 style={{textAlign:'center'}}>© 2026 Yogeth | Built with React.js</h4>
      </div>
    </div>
  
  );
}
