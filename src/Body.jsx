import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

export default function Body({ theme }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="bg-background py-4">
        <section className="flex gap-1 justify-center" >
          <img src="src\assets\terminal-box-fill-svgrepo-com.svg"
          height="18px" width="18px"/>
          <h2 className="text-text-secondary font-jetbrains">Yogeth.Dev</h2>
        </section>
        <h4 className="text-text-secondary text-center font-jetbrains">
          <span>
            ©
          </span>{" "}
          2026 Yogeth | Built with <span className="text-primary">React.js</span>
        </h4>
      </div>
    </div>
  );
}
