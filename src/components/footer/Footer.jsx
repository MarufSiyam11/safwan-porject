import logo2 from "../../assets/ss.png";
import { TiSocialSkype } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import logo3 from "../../assets/Rectangle 4299.png";
const Footer = () => {
  return (
    <section className="bg-[#00413d] max-width  h-[474px] mt-28   ">
      <div className=" flex justify-center">
        <div className="w-[122px] mt-16 h-[40px] flex ">
          <img className="bg-primary_text " src={logo2} alt="" />
          <span className="text-2xl text-white font-medium text-center">
            Siyam
          </span>
        </div>
      </div>
      <div className="text-white flex flex-wrap mt-10 justify-center text-center gap-6">
        <h4>Home</h4>
        <img src={logo3} alt="" />
        <h4>About</h4>
        <img src={logo3} alt="" />
        <h4>Services</h4>
        <img src={logo3} alt="" />
        <h4>Portfolio</h4>
        <img src={logo3} alt="" />
        <h4>Blog</h4>
        <img src={logo3} alt="" />
        <h4>Contact</h4>
      </div>
      <div className="flex gap-3 justify-center m-10">
        <a className="w-[60px] h-[60px]" href="">
          {" "}
          <TiSocialSkype className="text-white rounded-full p-2 w-[50px] h-[50px] bg-secondary" />
        </a>
        <a className="w-[60px] h-[60px]" href="-/">
          {" "}
          <SlSocialInstagram className="rounded-full w-[50px] p-2 h-[50px] text-white bg-secondary" />
        </a>
        <a className="w-[60px] h-[60px]" href="">
          <SlSocialLinkedin className="rounded-full w-[50px] p-2 h-[50px] text-white bg-secondary" />
        </a>{" "}
      </div>
    </section>
  );
};

export default Footer;
