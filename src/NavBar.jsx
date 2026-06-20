
import {Data}from './data/data.js'
export default function NavBar({isDark,setIsDark,color}) {
  return (
    <div className='flex justify-between p-[18px] sticky top-0 z-10 md:px-7'
    style={{backgroundColor:color.surface}}>
      <section className="flex gap-1  items-center">
        <img src="src/assets/terminal-box-fill-svgrepo-com.svg"
        className="w-[24px] h-[24px] md:h-8 md:w-8"
         alt="terminal" />
        <p className=' font-semibold font-jetbrains  md:text-lg'
      style={{color:color.textPrimary}}>{Data.name}.Dev</p>
      </section>
     {!isDark?(
      <img className='w-[26px] h-[26px] md:h-8 md:w-8'
      src="/src/assets/clear-day-svgrepo-com.svg" alt="day" 
      onClick={()=>setIsDark(!isDark)}
      />):(
      <img className='w-[26px] h-[26px] md:h-8 md:w-8' src="src/assets/moon-svgrepo-com.svg" alt="night"
      onClick={()=>setIsDark(!isDark)} />
      )}
    </div>
  )
}
