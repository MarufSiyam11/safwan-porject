import image from "../../assets/image_here.png";

const Banner = () => {
  return (
    // <>
    //   <div className="relative bg-[#00413D]">
    //     <div className="relative overflow-hidden flex w-full justify-center items-center bg-[#00413D] md:h-[80vh] h-[60vh] px-2 md:px-0">
    //       <div className="flex gap-5 md:flex-row flex-col w-full h-auto mx-auto justify-between items-center">
    //         {/* Left section */}

    //         {/* Right section with the image */}
    //         <div className="md:w-[40%] w-full h-auto md:h-[80vh] flex justify-end bg-white">
    //           <img
    //             className="w-full h-full object-cover"
    //             src={image}
    //             alt="Banner Image"
    //           />
    //         </div>
    //       </div>

    //       {/* Text and button section */}
    //       <div className="absolute w-full h-[80vh] flex items-center justify-center">
    //         <div className="flex flex-col justify-center items-start h-full px-4 md:px-0">
    //           <h1
    //             style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
    //             className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[90px] md:leading-[90px] lg:leading-[110px] z-50 font-bold text-white"
    //           >
    //             Hello! <br /> My Name Is Maruf Siyam
    //           </h1>
    //           <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white mt-3">
    //             I’m a freelance{" "}
    //             <span className="font-extrabold text-white">
    //               UI/UX Designer
    //             </span>{" "}
    //             based in Indonesia who loves to{" "}
    //             <br className="hidden md:block" /> craft attractive design
    //             experiences for the web.
    //           </p>

    //           <button className="btn mt-5 text-white bg-[#00413D] px-4 py-2 rounded-md hover:bg-[#00332d]">
    //             Contact Me
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <section className="bg-[#00413d]   relative">
      <div className="container pt-[194px] pb-[248px] relative z-10">
        <div>
          <h1 className="text-white text-[50px] md:text-[70px] xl-text-[80px] 2xl-text-[100px] font-bold leading-[1.1] max-w-[834px]">
            Hello! <span className="block"> My Name Is Maruf Siyam</span>
          </h1>
          <p className="pt-10 max-w-[670px] pb-[50px] text-white/50 text-xl font-normal leading-[30px]">
            I’m a freelance
            <a href="/"> UI/UX Designer </a>
            based in Indonesia who loves to
            <br className="hidden md:block" /> craft attractive design
            experiences for the web.
          </p>
          <a className="btn" href="">
            {" "}
            Contact Me
          </a>
          <div className="md:hidden mt-10 md:mt-0">
            <img className="h-full w-full object-cover" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[44%] h-full absolute right-0 bottom-0 -z-[1px]">
        <img className="h-full  w-full object-cover" src={image} alt="" />
      </div>
    </section>
  );
};

export default Banner;
