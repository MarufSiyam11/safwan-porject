import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import ContactFrom from "./components/contactFrom/ContactFrom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <Services />
      <About />
      <Projects />
      <ContactFrom />
    </div>
  );
};

export default App;
