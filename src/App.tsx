import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import MusicToggle from "./components/MusicToggle";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Tools />
      <Projects />
      <Footer />
      <MusicToggle />
    </>
  );
}

export default App;
