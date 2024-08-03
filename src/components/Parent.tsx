import Home from "./Home";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Parent() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
