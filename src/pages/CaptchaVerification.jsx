import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../App";

export default function CaptchaVerification() {
  const { setFormInput,setCaptchaToken } = useContext(UserContext);
  
  const widgetIdRef = useRef(null); 

  useEffect(() => {
   
    if (typeof window !== "undefined" && window.turnstile) {
      
      if (widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
      }

      widgetIdRef.current = window.turnstile.render("#turnstile-container", {
        sitekey: "0x4AAAAAADqvBPz7Xlgkk0vy",
        theme: "dark",
        callback: function (token) {
          console.log("Success token generated!");
          
          if (token) {
            setFormInput((val) => ({ ...val, captchaToken: token }));
            setCaptchaToken(false);
          }
        },
        "error-callback": function (errorCode) {
          console.error("Turnstile error: ", errorCode);
        },
      });
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [setFormInput, setCaptchaToken]); 
  return (
    <div 
      id="turnstile-container" 
      key="static-turnstile-element" 
      className="w-fit"
    ></div>
  );
}
