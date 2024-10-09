import { FaArrowRightLong } from "react-icons/fa6";
const ServiceCard = ({ title, des, icon }) => {
  return (
    <div className="mt-10 py-[50px] px-[30px] bg-white shadow-box-shadaw rounded-[10px]">
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <h3 className="text-[24px] font-black pt-[26px] pb-4 text-primary_text">
          {title}
        </h3>
        <p>{des}</p>
        <div className="pt-4">
          {" "}
          <FaArrowRightLong className="text-primary_text"></FaArrowRightLong>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
