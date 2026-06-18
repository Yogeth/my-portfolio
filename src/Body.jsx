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
      <div
        style={{
          color: "var(--text-primary)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          fontFamily: "Inter,sans-serif",
          backgroundColor:'var(--background-color)',
          fontSize:'15px'
        }}
      >
        <section
          style={{ display: "flex", gap: "10px", justifyContent: "center" }}
        >
          <img
            style={{ height: "25px", width: "25px" }}
            src="src/assets/terminal-box-fill-svgrepo-com.svg"
            alt="terminal"
          />
          <h2>Yogeth.Dev</h2>
        </section>
        <h4 style={{ textAlign: "center" }}>
          <span
            style={{
              color: "#8B919D",
              fontFamily: "Inter",
              fontWeight: "400px",
            }}
          >
            ©
          </span>{" "}
          2026 Yogeth | Built with React.js
        </h4>
      </div>
    </div>
  );
}
