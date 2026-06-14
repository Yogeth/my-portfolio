import '/src/styles/pages/burgermenu.css'
export default function BurgerMenu({setBurgerMenu,theme,setTheme}) {
  return (
    <div id='menuContent'>
        <div>
          <h4>Dark Mode</h4>
          <button id='themebtn' >
            <button id='innerthemebtn' 
            onClick={()=>setTheme(true)}
            style={{transform:'translateX(100%)'}}
             >
              
            </button>
          </button>
        </div>
        </div>
  )
}
