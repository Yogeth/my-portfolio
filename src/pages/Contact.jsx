import { ContactData } from "../data/data.js";
import { useContext, useRef, useState } from "react";
import { UserContext } from "/src/App.jsx";
import CaptchaVerification from "./CaptchaVerification.jsx";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const { formInput, setFormInput, color } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  function handleChange(e, fieldName) {
    setFormInput((values) => ({
      ...values,
      [fieldName]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !formInput.subject?.trim() ||
      !formInput.receiver?.trim() ||
      !formInput.messageBody?.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }



    setIsLoading(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        },
      );

      setSubmitStatus({
        type: "success",
        message: "Email sent successfully! I'll get back to you soon.",
      });

      setFormInput({
        subject: "",
        receiver: "",
        messageBody: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Email error:", error);

      setSubmitStatus({
        type: "error",
        message:
          "Failed to send email. Please try again or contact me directly via social media.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-3 font-inter md:p-5 xl:p-10">
      <section className="flex flex-col gap-2">
        <h1
          className="text-2xl font-semibold md:text-3xl"
          style={{ color: color.textPrimary }}
        >
          Initialize Connection
        </h1>

        <p
          className="text-lg tracking-wide md:text-xl"
          style={{ color: color.textSecondary }}
        >
          {ContactData.para}
        </p>
      </section>

      <div className="lg:px-20 xl:grid xl:px-100 xl:gap-8">
        <form
          ref={form}
          className="bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter 
             backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 grid grid-cols-1 gap-5 my-5 md:my-7 md:p-10 md:pt-13 xl:p-15"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="name">
            <input
              className="font-medium text-sm border rounded-md p-3 w-full md:text-xl md:tracking-wider md:p-4"
              style={{ color: "#7c3aed", borderColor: color.textPrimary }}
              id="name"
              name="subject"
              type="text"
              placeholder="Your full name"
              value={formInput.subject || ""}
              onChange={(e) => handleChange(e, "subject")}
              required
              disabled={isLoading}
              aria-required="true"
            />
          </label>

          <label htmlFor="email">
            <input
              className="font-medium text-sm border rounded-md p-3 w-full md:text-xl md:tracking-wider md:p-4"
              style={{ color: "#7c3aed", borderColor: color.textPrimary }}
              id="email"
              name="receiver"
              type="email"
              placeholder="your.email@example.com"
              value={formInput.email || ""}
              onChange={(e) => handleChange(e, "receiver")}
              required
              disabled={isLoading}
              aria-required="true"
            />
          </label>

          <label htmlFor="message">
            <textarea
              name="messageBody"
              className="font-medium text-sm border rounded-md p-2 h-24 w-full md:text-xl md:tracking-wider md:p-4 md:h-26"
              style={{ color: "#7c3aed", borderColor: color.textPrimary }}
              placeholder="Share your thoughts, project ideas, or just say hello..."
              value={formInput.messageBody || ""}
              onChange={(e) => handleChange(e, "messageBody")}
              required
              disabled={isLoading}
              aria-required="true"
            />
          </label>

          {submitStatus && (
            <div role="alert" className="">
              {submitStatus.type === "success" ? (
                <p className="text-green-400 tracking-wider">Sent Sucess !</p>
              ) : (
                <p className="text-red-400 font-semibold text-md tracking-wider">
                  Sent Failed !
                </p>
              )}

              <p className="font-normal" style={{ color: color.textSecondary }}>
                {" "}
                {submitStatus.message}
              </p>
            </div>
          )}
          <CaptchaVerification/>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className=" p-3 rounded-md flex items-center w-3/6 justify-center md:w-2/6 md:p-5"
              style={{ backgroundColor: color.accent }}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <p className="animate-[spin_linear_1s_infinite] origin-center block">
                  <img
                    className="w-7 h-7"
                    src="/loading-svgrepo-com.svg"
                    alt="loading.."
                  />
                </p>
              ) : (
                <img
                  className="w-7 h-7"
                  src="/send-symbol-svgrepo-com.svg"
                  alt="send"
                />
              )}
            </button>
          </div>
        </form>

        <section
          className="bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter 
             backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 grid grid-cols-1 gap-5 my-5 md:p-10 xl:p-15"
        >
          <h2
            className=" font-semibold text-xl md:text-2xl md:tracking-widest"
            style={{ color: color.textPrimary }}
          >
            Social_Nodes
          </h2>

          <ul className="mx-6 flex flex-col gap-3">
            {ContactData.social.map((element, index) => (
              <li className="flex justify-between" key={index}>
                <span
                  className="text-lg font-semibold tracking-wider md:text-xl md:tracking-widest"
                  style={{ color: color.textSecondary }}
                >
                  {element.media}
                </span>
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with me on ${element.media}`}
                  title={`Open ${element.media}`}
                >
                  <img
                    className="h-5  w-5 md:h-6 w-6"
                    src="/open-in-new-svgrepo-com.svg"
                    alt="open_in_new"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
