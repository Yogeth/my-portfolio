 import '/src/styles/pages/contact.css'
 import { ContactData } from '../data/data.js'
 import { useContext,useRef} from 'react';
 import {UserContext} from '/src/App.jsx'
 import emailjs from "@emailjs/browser";
export default function Contact() {
  //ref
  const form = useRef();
//context
 const {formInput,setFormInput} = useContext(UserContext);
  function handleSubmit(e){
    e.preventDefault();

    emailjs
    .sendForm(
     import.meta.env.VITE_SERVICE_ID,
     import.meta.env.VITE_TEMPLATE_ID,
    form.current,
     { publicKey:import.meta.env.VITE_PUBLIC_KEY,}
    ).then(() => {
    alert("Email sent");
  })
  .catch((err) => {
    alert("Failed");
    console.log(err);
  });
}
function handleChange(el,names){
setFormInput(values=>({...values,[names]:el.target.value}))
}

  return (
    <div id="contactPage">
      <section id='section1'>
        <h1 style={{fontSize:'26pt',letterSpacing:'1px'}}>Initialize <span style={{color:'var(--accent-color)'}}>Connection</span></h1>
      <p>{ContactData.para}</p>
      </section>
      <form ref={form} id='section2' onSubmit={(e)=>{handleSubmit(e)}}>
          <label htmlFor="name">NAME
            <input name="name" type="text" value={formInput.name} 
            onChange={(el)=>handleChange(el,"name")}/>
          </label>
          <label htmlFor="email">EMAIL_ADDRESS
            <input name="email" type="text" value={formInput.email}
            onChange={(el)=>handleChange(el,"email")}
            />
          </label>
          <label htmlFor="body"> TRANSMISSION_BODY
            <textarea name="message" id="txtarea"  value={formInput.body}
            onChange={(el)=>handleChange(el,"body")}
            />
          </label>
          
           <button type='submit' id='formbtn'>
              <img src="src/assets/send-symbol-svgrepo-com.svg" alt="send" /> 
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
