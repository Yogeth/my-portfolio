import { ContactData } from "../data/data.js";
import { useContext, useRef, useState } from "react";
import { UserContext } from "/src/App.jsx";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const { formInput, setFormInput } = useContext(UserContext);
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
      !formInput.name?.trim() ||
      !formInput.email?.trim() ||
      !formInput.message?.trim()
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
        name: "",
        email: "",
        message: "",
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
    <div className="bg-background p-3 font-inter">
      <section className="flex flex-col gap-2">
        <h1 className="text-text-primary text-2xl font-semibold">
          Initialize Connection
        </h1>

        <p className="text-text-secondary text-lg tracking-wide">
          {ContactData.para}
        </p>
      </section>

      <form
        ref={form}
        className="bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter 
             backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 grid grid-cols-1 gap-5 my-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="name">
          <input
            className="text-text-primary font-medium text-sm border rounded-md p-3 w-full"
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formInput.name || ""}
            onChange={(e) => handleChange(e, "name")}
            required
            disabled={isLoading}
            aria-required="true"
          />
        </label>

        <label htmlFor="email">
          <input
            className="text-text-primary font-medium text-sm border rounded-md p-3 w-full"
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formInput.email || ""}
            onChange={(e) => handleChange(e, "email")}
            required
            disabled={isLoading}
            aria-required="true"
          />
        </label>

        <label htmlFor="message">
          <textarea
            name="message"
            className="text-text-primary font-medium text-sm border rounded-md p-2 h-24 w-full"
            placeholder="Share your thoughts, project ideas, or just say hello..."
            value={formInput.message || ""}
            onChange={(e) => handleChange(e, "message")}
            required
            disabled={isLoading}
            aria-required="true"
          />
        </label>

        {submitStatus && (
          <div role="alert">
            {submitStatus.type === "success" ? (
              <p className="text-green-400 tracking-wider">Sent Sucess !</p>
            ) : (
              <p className="text-red-400 font-semibold text-md tracking-wider">
                Sent Failed !
              </p>
            )}

            <p className="text-text-secondary font-normal">
              {" "}
              {submitStatus.message}
            </p>
          </div>
        )}

        <button
          type="submit"
          className="bg-accent p-3 rounded-md flex items-center justify-center mx-18"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <p className="animate-[spin_linear_1s_infinite] origin-center block">
              <img  className="w-7 h-7"
              src="src/assets/loading-svgrepo-com.svg" alt="loading.." />
            </p>
          ) : (
            <img
            className="w-7 h-7"
            src="src/assets/send-symbol-svgrepo-com.svg"
            alt="send"
          />
          )}

        </button>
      </form>

      <section className="bg-[rgba(172,167,166,0.1)]
             h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter 
             backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 grid grid-cols-1 gap-5 my-5">
        <h2 className="text-text-primary font-semibold text-xl ">Social_Nodes</h2>

        <ul className="mx-6 flex flex-col gap-3">
          {ContactData.social.map((element, index) => (
            <li className="flex justify-between" key={index}>
              <span className=" text-text-secondary text-lg font-semibold tracking-wider">{element.media}</span>
              <a
                href={element.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with me on ${element.media}`}
                title={`Open ${element.media}`}
              >
                <i className="ti ti-external-link"></i>

                <img
                  className="h-5  w-5"
                  src="/src/assets/open-in-new-svgrepo-com.svg"
                  alt="open_in_new"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
