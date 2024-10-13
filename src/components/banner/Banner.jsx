import image from "../../assets/banner2.png";

const Banner = () => {
  return (
    // <>
    //
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
