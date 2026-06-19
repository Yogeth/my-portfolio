
import {FooterData} from '/src/data/data.js'
import { Link } from 'react-router-dom'
export default function Footer() {

  return (
    <div className='bg-surface p-3 flex justify-around sticky bottom-0 z-10'>
     {
      FooterData.map((element,i)=>(
        <Link className='link' to={element.endpoint} key={i} >
          <section className='flex flex-col justify-center items-center'>
            <img src={element.src} alt={element.alt} 
            className=''
            height="24px"
            width="24px"/>
            <p className='text-xs font-medium text-text-primary
             tracking-tight font-inter'>{element.txt}</p>
          </section>
        </Link>
      ))
     }
    </div>
  )
}
