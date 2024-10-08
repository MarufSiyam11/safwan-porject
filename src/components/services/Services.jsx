import ServiceCard from "../card/ServiceCard";
import SectionTitle from "../section-Title/SectionTitle";
import uiUx from "../../assets/uiux.png";
import mobileApp from "../../assets/booking 1 (Traced).png";
import web from "../../assets/web-design 1 (Traced).png";
const Services = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <SectionTitle />
        <div className="flex gap-6">
          <ServiceCard
            title={"Ui/Ux Design"}
            icon={uiUx}
            des="Dolor repellendus tempo ribus aue
quibusdam offi ciis debitis rerum na
aibus minima veniam."
          />
          <ServiceCard
            title={"Mobile App Design"}
            icon={mobileApp}
            des="Dolor repellendus tempo ribus aue
quibusdam offi ciis debitis rerum na
aibus minima veniam."
          />
          <ServiceCard
            title={"Web Design"}
            icon={web}
            des="Dolor repellendus tempo ribus aue
quibusdam offi ciis debitis rerum na
aibus minima veniam."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
