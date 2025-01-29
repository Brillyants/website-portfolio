import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import MusicToggle from "./components/MusicToggle";
import About from "./components/About";
import CareerEducation from "./components/CareerEducation";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <About />
      <CareerEducation />
      <Tools />
      <Projects />
      <CallToAction />
      <Footer />
      <MusicToggle />
    </>
  );
}

export default App;
