 import '/src/styles/pages/contact.css'
 import { ContactData } from '../data/data.js'
export default function Contact() {
  return (
    <div id="contactPage">
      <section id='section1'>
        <h1 style={{fontSize:'26pt',letterSpacing:'1px'}}>Initialize <span style={{color:'aqua'}}>Connection</span></h1>
      <p>{ContactData.para}</p>
      </section>
      <form id='section2'>
          <label htmlFor="name">NAME
            <input type="text" />
          </label>
          <label htmlFor="email">EMAIL_ADDRESS
            <input type="text" />
          </label>
          <label htmlFor="body"> TRANSMISSION_BODY
            <textarea id="txtarea" >

            </textarea>
          </label>
           <button type='submit' id='formbtn'>
                 EXECUTE_SEND 
           </button>
      </form>

    </div>
  )
}
