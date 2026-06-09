import { useState } from 'react'
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import './styles/maincontainer.css';

function App() {
  return (
    <div id='mainContainer'> 
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App
