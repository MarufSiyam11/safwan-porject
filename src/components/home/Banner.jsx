import image from "../../assets/image_here.png";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="relative overflow-hidden flex w-full justify-center items-center bg-[#00413D] md:h-[80vh] h-[60vh] px-2 md:px-0">
          <div className="flex gap-5 md:flex-row flex-col w-full h-auto mx-auto justify-between items-center">
            {/* Left section */}
            <div className="md:w-[60%] w-full relative">
              <div>
                <h1
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                  className="text-[40px] sm:text-[50px] md:text-[80px] lg:text-[100px] md:leading-[100px] lg:leading-[110px] flex relative z-50 font-bold text-white"
                >
                  {/* Add content here */}
                </h1>
              </div>
            </div>

            {/* Right section with the image */}
            <div className="md:w-[40%] w-full h-auto md:h-[80vh] flex justify-end bg-white">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="Banner Image"
              />
            </div>
          </div>

          {/* Text and button section */}
          <div className="absolute w-full h-[80vh] flex items-center justify-center">
            <div className="flex flex-col justify-center items-start h-full px-4 md:px-0">
              <h1
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[90px] md:leading-[90px] lg:leading-[110px] z-50 font-bold text-white"
              >
                Hello! <br /> My Name Is Maruf Siyam
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white mt-3">
                I’m a freelance{" "}
                <span className="font-extrabold text-white">
                  UI/UX Designer
                </span>{" "}
                based in Indonesia who loves to{" "}
                <br className="hidden md:block" /> craft attractive design
                experiences for the web.
              </p>

              <button className="btn mt-5 text-white bg-[#00413D] px-4 py-2 rounded-md hover:bg-[#00332d]">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
