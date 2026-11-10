import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import YouTube from "./components/YouTube";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <YouTube />
        <Experience />
        <Contact />
      </main>
      <Footer />
      
    </>
  );
}

export default App;
