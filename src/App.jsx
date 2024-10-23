import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import ContactFrom from "./components/contactFrom/ContactFrom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <Services />
      <About />
      <Projects />
      <Portfolio />
      <Testimonial />
      <ContactFrom />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
