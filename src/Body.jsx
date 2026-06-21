import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { useContext } from "react";
import { UserContext } from "./App";

export default function Body({ theme }) {
  const { color } = useContext(UserContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="py-4 pb-24" style={{ backgroundColor: color.background }}>
        <section className="flex gap-1 justify-center">
          <img
            src="src\assets\terminal-box-fill-svgrepo-com.svg"
            height="18px"
            width="18px"
          />
          <h2
            className="font-jetbrains font-medium"
            style={{ color: color.textPrimary }}
          >
            Yogeth.Dev
          </h2>
        </section>
        <h4
          className="text-center font-jetbrains"
          style={{ color: color.textSecondary }}
        >
          <span>©</span> 2026 Yogeth | Built with{" "}
          <span className="text-primary">React.js</span>
        </h4>
      </div>
    </div>
  );
}
