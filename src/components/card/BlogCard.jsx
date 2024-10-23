import { FaArrowRightLong } from "react-icons/fa6";
const BlogCard = ({ data }) => {
  return (
    <div className="w-[370px] h-[513px] mx-auto   bg-white shadow-box-shadaw rounded-[10px]">
      <img className="w-[370px] h-[260px]" src={data.image} alt="" />
      <div className="p-4">
        {" "}
        <div className="flex justify-between">
          <h4 className=" text-secondary">{data.name}</h4>
          <p className=" text-primary_text text-sm">{data.date}</p>
        </div>
        <div>
          <h3 className="text-2xl font-medium pt-3 text-primary_text">
            {data.title}
          </h3>
          <p className="pt-2 text-primary_text">{data.des}</p>
        </div>
        <div className="pt-4 text-xl font-medium text-primary_text flex gap-1">
          {" "}
          <a href="/">View Case Studies</a>
          <FaArrowRightLong className="mt-1 "></FaArrowRightLong>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
