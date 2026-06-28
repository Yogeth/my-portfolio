import { useState, createContext } from "react";
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";
import Body from "./Body.jsx";
import { darkColors, lightColors } from "./data/colors.js";

//context
export const UserContext = createContext();
function App() {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(false);
  const [formInput, setFormInput] = useState({
    subject: "",
    receiver:"",
    messageBody:"",
  });
  const [filterbtn, setfilterbtn] = useState("All Projects");
  const [captchaToken,setCaptchaToken]=useState("");

  let color = isDark ? lightColors : darkColors;

  console.log(formInput);
  return (
    <div
      style={{
        background: color.background,
        transition: "background 1s ease-in-out",
      }}
      className="min-h-screen"
    >
      <NavBar isDark={isDark} setIsDark={setIsDark} color={color} />

      <UserContext.Provider
        value={{
          setFormInput,
          formInput,
          filterbtn,
          setfilterbtn,
          isDark,
          color,
          captchaToken,
          setCaptchaToken
        }}
      >
        <Body theme={theme} />
      </UserContext.Provider>
      <Footer color={color} />
    </div>
  );
}

export default App;
