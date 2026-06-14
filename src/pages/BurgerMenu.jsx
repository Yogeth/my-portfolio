import '/src/styles/pages/burgermenu.css'
export default function BurgerMenu({setBurgerMenu}) {
  return (
    <div id='menuContent'>
        <img src="/src/assets/cancel-svgrepo-com.svg" alt="cancel" height="25px" width="25px"
        onClick={()=>setBurgerMenu(false)}
        />
        <h4>BurgerMenu</h4>
        </div>
  )
}
