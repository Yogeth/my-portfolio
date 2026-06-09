
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

export default function Body() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/stack" element={<Stack/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  
  );
}
