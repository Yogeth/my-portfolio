import '/src/styles/pages/contact.css'
import { ContactData } from '../data/data.js'
import { useContext, useRef, useState } from 'react'
import { UserContext } from '/src/App.jsx'
import emailjs from "@emailjs/browser"

export default function Contact() {
  // Refs
  const form = useRef()
  
  // State
  const { formInput, setFormInput } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Handle input change
  function handleChange(e, fieldName) {
    setFormInput(values => ({
      ...values,
      [fieldName]: e.target.value
    }))
  }

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault()
    if (!formInput.name?.trim() || !formInput.email?.trim() || !formInput.message?.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields'
      })
      return
    }

    setIsLoading(true)
    setSubmitStatus(null)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )

      setSubmitStatus({
        type: 'success',
        message: 'Email sent successfully! I\'ll get back to you soon.'
      })

      // Reset form
      setFormInput({
        name: '',
        email: '',
        message: ''
      })

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

    } catch (error) {
      console.error('Email error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send email. Please try again or contact me directly via social media.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="contactPage">
      <section className='section1'>
        <h1 className='section1heading'>
          Initialize <span>Connection</span>
        </h1>
        <p className='section1para'>{ContactData.para}</p>
      </section>

      <form ref={form} className='section2' onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formInput.name || ''}
            onChange={(e) => handleChange(e, "name")}
            required
            disabled={isLoading}
            aria-required="true"
          />
        </label>

        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formInput.email || ''}
            onChange={(e) => handleChange(e, "email")}
            required
            disabled={isLoading}
            aria-required="true"
          />
        </label>

        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            className="txtarea"
            placeholder="Share your thoughts, project ideas, or just say hello..."
            value={formInput.message || ''}
            onChange={(e) => handleChange(e, "message")}
            required
            disabled={isLoading}
            aria-required="true"
          />
        </label>

        {submitStatus && (
          <div className={`statusMessage ${submitStatus.type}`} role="alert">
            {submitStatus.type === 'success' ? (
              <i className="ti ti-check"></i>
            ) : (
              <i className="ti ti-alert-circle"></i>
            )}
            {submitStatus.message}
          </div>
        )}

        <button
          type='submit'
          className='formbtn'
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <>
              <i className="ti ti-loader-2" style={{ animation: 'spin 1s linear infinite' }}></i>
              Sending...
            </>
          ) : (
            <>
              <i className="ti ti-send"></i>
              Send Message
            </>
          )}
          <img src="src/assets/send-symbol-svgrepo-com.svg" alt="send" />
        </button>
      </form>

      <section className='section3'>
        <h2>Social_Nodes</h2>
        <ul>
          {ContactData.social.map((element, index) => (
            <li key={index}>
              <span>{element.media}</span>
              <a
                href={element.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with me on ${element.media}`}
                title={`Open ${element.media}`}
              >
                <i className="ti ti-external-link"></i>
                <img src="/src/assets/open-in-new-svgrepo-com.svg" alt="open_in_new" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}