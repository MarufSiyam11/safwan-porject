import ProjectsCard from "../card/ProjectsCard";
import img1 from "../../assets/image (3).png";
import img2 from "../../assets/image (4).png";
import img3 from "../../assets/image (5).png";
import SectionTitle from "../section-Title/SectionTitle";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa6";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <FaArrowRight className="text-2xl absolute top-[-50px] h-[44px] w-[44px] border-2 border-gray-200 right-0 hover:text-white hover:bg-secondary text-black bg-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      {" "}
      <FaArrowLeft className="text-2xl top-[-50px] border-2 h-[44px] w-[44px] border-gray-200 absolute hover:text-white right-[50px] hover:bg-secondary text-black bg-white" />
    </div>
  );
}
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="pt-20">
      <div className="container">
        <SectionTitle
          center={false}
          title="Recent Projects"
          des="My Recent Projects"
          maxWidth="max-w-[517px]"
        />{" "}
        <Slider {...settings}>
          <ProjectsCard
            title={"Ui/Ux Design"}
            icon={img1}
            Heading="Branding & Digital Video Campaign For George’s Cafe"
            des="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry."
          />
          <ProjectsCard
            title={"Mobile App"}
            icon={img2}
            Heading="Branding & Digital Video Campaign For George’s Cafe."
            des="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry."
          />
          <ProjectsCard
            title={"Web Design "}
            icon={img3}
            Heading="Branding & Digital Video Campaign For George’s Cafe"
            des="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry."
          />
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
