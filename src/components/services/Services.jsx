import ServiceCard from "../card/ServiceCard";
import SectionTitle from "../section-Title/SectionTitle";
import uiUx from "../../assets/uiux.png";
import mobileApp from "../../assets/booking 1 (Traced).png";
import web from "../../assets/web-design 1 (Traced).png";
const Services = () => {
  return (
    <section className="mt-28">
      <div className="container">
        <SectionTitle
          title="MY SERVICES"
          des="Provide Wide Range of
Digital Services"
          maxWidth="max-w-[517px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6">
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
