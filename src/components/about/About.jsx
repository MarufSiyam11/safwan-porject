import img from "../../assets/image (22).png";
import img11 from "../../assets/banner.png";

import img1 from "../../assets/image (12).png";
import img2 from "../../assets/image (2).png";
import Section from "../ui/section/Section";
import SectionTitle from "../section-Title/SectionTitle";
import Skill from "./Skill";
const About = () => {
  return (
    <Section>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-[1fr_170px] gap-6">
          <div className="w-full">
            <img className="w-full h-full object-cover" src={img11} alt="" />
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
        <div>
          {" "}
          <SectionTitle
            title="About Me"
            des="I Enjoy Solving Problems
With Scalable Solutions"
            center={false}
          />
          <p className="pt-1 pb-9">
            Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
            aeci velit, sed quia non numquam eius modi tempora incidunt lao
            magnam aliquam quaerat voluptatem reprehenderit
          </p>
          <p>
            Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
            reprehenderit non numquam eius
          </p>
          <div className="pt-10">
            {" "}
            <a className="btn " href="">
              {" "}
              Download CV
            </a>
          </div>
        </div>
      </div>
      <Skill />
    </Section>
  );
};

export default About;
