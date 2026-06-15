import '/src/styles/pages/burgermenu.css'
export default function BurgerMenu({setBurgerMenu,theme,setTheme}) {
  return (
    <div id='menuContent'>
        <div>
          <h4>Light Mode</h4>
          <button id='themebtn' >
            <div id='innerthemebtn' 
            onClick={()=>setTheme(!theme)}
             style={{transform:theme?'translateX(100%)':'translateX(0%)'    
             }}
             >
              
            </div>
          </button>
        </div>
        </div>
  )
}
