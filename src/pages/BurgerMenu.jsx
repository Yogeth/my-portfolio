import '/src/styles/pages/burgermenu.css'
export default function BurgerMenu({setBurgerMenu,theme,setTheme}) {
  return (
    <div className='menuContent'>
        <div>
          <h4>Light Mode</h4>
          <button className='themebtn' >
            <div className='innerthemebtn' 
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
