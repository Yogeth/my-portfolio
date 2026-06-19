import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

export default function Body({ theme }) {
  return (
    <div style={{ backgroundColor:'var(--background-color)' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        <section>
          <img />
          <h2>Yogeth.Dev</h2>
        </section>
        <h4 >
          <span>
            ©
          </span>{" "}
          2026 Yogeth | Built with React.js
        </h4>
      </div>
    </div>
  );
}
