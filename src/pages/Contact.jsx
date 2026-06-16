 import '/src/styles/pages/contact.css'
 import { ContactData } from '../data/data.js'
 import { useContext } from 'react';
 import {UserContext} from '/src/App.jsx'
 import emailjs from "@emailjs/browser";
export default function Contact() {
//context
     const setFormInput = useContext(UserContext);
  function handleSubmit(e){
    e.preventDefault();

    emailjs.send(
    "service_dxjjiif",
    "__ejs-test-mail-service__",
    {
      name: "Yogeth",
      email: "yogeth2005@gmail.com",
      message: "HI i built my new",
    },
    "kUkcL4dsfdC1QU7uB"
  )
  .then(() => {
    alert("Email sent");
  })
  .catch(() => {
    alert("Failed");
  });
}
  
  return (
    <div id="contactPage">
      <section id='section1'>
        <h1 style={{fontSize:'26pt',letterSpacing:'1px'}}>Initialize <span style={{color:'aqua'}}>Connection</span></h1>
      <p>{ContactData.para}</p>
      </section>
      <form id='section2' onSubmit={(e)=>{handleSubmit(e)}}>
          <label htmlFor="name">NAME
            <input type="text" value={"Hello"}/>
          </label>
          <label htmlFor="email">EMAIL_ADDRESS
            <input type="text" value={"xyz@gmail.com"}/>
          </label>
          <label htmlFor="body"> TRANSMISSION_BODY
            <textarea id="txtarea" defaultValue="" value={"good Morning"}/>
          </label>
           <button type='submit' id='formbtn'>
                 EXECUTE_SEND 
           </button>
      </form>
      <section id='section3'>
        <h2>SOCIAL_NODES</h2>
        <ul>
        {
          ContactData.social.map((element,i)=>(
              <li key={i}>
                <span>{element.media}</span>
                <span>
                  <a href={element.link}>
                    <img style={{height:'20px',width:'20px'}}
                     src="src/assets/open-in-new-svgrepo-com.svg" alt="open_in_new" />
                  </a>
                </span>
              </li>
          ))
        }
        </ul>
      </section>

    </div>
  )
}
