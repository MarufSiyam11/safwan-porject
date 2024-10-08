import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />

      <Services />
    </div>
  );
};

export default App;
