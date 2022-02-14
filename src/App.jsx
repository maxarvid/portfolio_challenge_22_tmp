import React from "react";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Cv from "./Cv"
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
