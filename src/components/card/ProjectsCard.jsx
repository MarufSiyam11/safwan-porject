import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsCard = ({ title, des, icon, Heading }) => {
  return (
    <div className="mt-10   bg-white shadow-box-shadaw rounded-[10px]">
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div className="pb-[20px] px-[30px]">
        <h3 className="  font-black pt-[26px] pb-4 text-secondary">{title}</h3>
        <h2 className="text-[24px]">{Heading}</h2>
        <p>{des}</p>
        <div className="pt-4 flex gap-1">
          {" "}
          <a href="/">View Case Studies</a>
          <FaArrowRightLong className="mt-1"></FaArrowRightLong>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
