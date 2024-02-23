import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About";
import { Education } from "./Components/Education";
import { Skills } from "./Components/Skills/Skills";
import { Contact } from "./Components/Contact";
import "./App.css"
import { useEffect } from "react";

export const App = () => {
  useEffect(()=>{
    document.title = "myPortfolio";
  },[])
  return (
    <BrowserRouter basename={"/meet/"}>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />\
          <Route path="/myjourney" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
