import img from "../../assets/image (1).png";
import img1 from "../../assets/image.png";
import img2 from "../../assets/image (2).png";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-6">
          <div className="grid grid-cols-[1fr_170px] gap-6">
            <div className="w-full">
              <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <img className="w-full h-full object-cover" src={img1} alt="" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
