
import {Data}from './data/data.js'
export default function NavBar() {
  return (
    <div className='bg-surface flex justify-between p-[18px] sticky top-0 z-10'>
      <section className="flex gap-1  items-center">
        <img src="src/assets/terminal-box-fill-svgrepo-com.svg"
        className="w-[24px] h-[24px]"
         alt="terminal" />
        <p className='text-text-primary font-semibold font-jetbrains'>{Data.name}.Dev</p>
      </section>
      <img className='w-[26px] h-[26]px'
      src="/src/assets/clear-day-svgrepo-com.svg" alt="day" />
    </div>
  )
}
