import React from "react";
import "./App.css";

import NavBar from "../src/Components/NavBar/NavBar";
import Header from "./Container/Header/Header";
import About from "./Container/About/About";
import Work from "./Container/Work/Work";
import Skills from "./Container/Skills/Skills";
import Contact from "./Container/Contact/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact/>
    </div>
  );
}

export default App;
