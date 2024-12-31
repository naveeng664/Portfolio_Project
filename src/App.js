import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import WorkExperience from "./pages/WorkExperience";
import TechnicalSkills from "./pages/TechnicalSkills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="work-experience">
        <WorkExperience />
      </div>
      <div id="technical-skills">
        <TechnicalSkills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <Footer />
    </div>
  );
}

export default App;
