import SectionTitle from "../section-Title/SectionTitle";
import quation from "../../assets/quotes.png";
import client1 from "../../assets/client.jpg";
import client2 from "../../assets/client2.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="mt-20 mb-52 md:mb-28  md:mt-[120px] h-[688px] bg-[#F9F4F1] ">
      <div className="container  pt-[121px] mx-auto px-2">
        <div className="">
          {" "}
          <SectionTitle title="Client Testimonial" des="Feedback From Client" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          <div className="mt-10">
            <div className="bg-gray-50 p-6 border-t-[3px] border-secondary rounded-lg testiminial_shadow relative shape">
              {" "}
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit, reiciendis! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ex soluta hic iusto at ratione
                officia tenetur error sed ab reprehenderit.
              </p>
            </div>
            <div className="flex pl-[69px]  items-center gap-[30px] mt-8">
              <div className="w-[74px] h-[74px] rounded-full border-[5px] border-white outline outline-offset-[1px] outline-secondary relative">
                {" "}
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={client1}
                  alt="Client"
                />
                <span className="w-[29px] h-[29px] px-[6px] py-[5px] bg-secondary flex items-center justify-center rounded-full absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    src={quation}
                    alt="Client"
                  />
                </span>
              </div>

              <div>
                {" "}
                <h3 className="text-xl font-semibold text-gray-800">
                  Michala Dois
                </h3>
                <p className=" text-gray-800">Product Designer</p>
                <div className="flex w-[50px] h-[10px] text-secondary ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="bg-gray-50 p-6 border-t-[3px] border-secondary rounded-lg testiminial_shadow relative shape">
              {" "}
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit, reiciendis! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ex soluta hic iusto at ratione
                officia tenetur error sed ab reprehenderit.
              </p>
            </div>
            <div className="flex pl-[69px]  items-center gap-[30px] mt-8">
              <div className="w-[74px] h-[74px] rounded-full border-[5px] border-white outline outline-offset-[1px] outline-secondary relative">
                {" "}
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={client2}
                  alt="Client"
                />
                <span className="w-[29px] h-[29px] px-[6px] py-[5px] bg-secondary flex items-center justify-center rounded-full absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    src={quation}
                    alt="Client"
                  />
                </span>
              </div>

              <div>
                {" "}
                <h3 className="text-xl font-semibold text-gray-800">
                  Adam Smitha
                </h3>
                <p className=" text-gray-800">Designer</p>
                <div className="flex w-[50px] h-[10px] text-secondary ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
