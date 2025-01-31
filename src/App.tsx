import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Starfield from "./components/Starfield";
import WorkExperience from "./components/WorkExperience";
import Moon from "./components/Moons";
import Project from "./components/Projects";
import "./App.css";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Moon></Moon>
      <Starfield>
        <Navbar></Navbar>
        <Hero></Hero>
        <WorkExperience></WorkExperience>
        <Project></Project>
        <SocialMedia></SocialMedia>
        <Footer></Footer>
      </Starfield>
    </>
  );
}

export default App;
