 import '/src/styles/pages/contact.css'
 import { ContactData } from '../data/data.js'
export default function Contact() {
  return (
    <div id="contactPage">
      <section id='section1'>
        <h1 style={{fontSize:'26pt',letterSpacing:'1px'}}>Initialize <span style={{color:'aqua'}}>Connection</span></h1>
      <p style={{fontSize:'15pt'}}>{ContactData.para}</p>
      </section>
      <section id='section2'>
          
      </section>
    </div>
  )
}
