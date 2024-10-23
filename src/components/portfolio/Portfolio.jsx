import { useState } from "react";
import SectionTitle from "../section-Title/SectionTitle";
import PortfolioCard from "../card/PortfolioCard";
import img1 from "../../assets/resturent.jpg";
import img2 from "../../assets/donation.png";
import img3 from "../../assets/donation22.png";
import img4 from "../../assets/image (6).png";
const tabMenu = ["All", "Branding", "Photography", "Fashion", "Product"];
const cardData = [
  {
    id: 1,
    image: img1,
    title: "Resturent",
    category: "Branding",
    des: "Website",
    link: "https://restaurant-boss-bd.netlify.app/",
  },
  {
    id: 2,
    image: img2,
    title: "Donation",
    category: "Photography",
    des: "Website",
    link: "https://donation-11.netlify.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Visual Design",
    category: "Fashion",
    des: "Website",
  },
  {
    id: 4,
    image: img4,
    title: "Web Application",
    category: "Product",
    des: "Website",
  },
];
const Portfolio = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="mt-28">
      <div className="container ">
        <SectionTitle title="My Portfolio" des="My Work Example" />
        <div>
          <ul className="flex flex-wrap gap-8 items-center justify-center pt-6 pb-10">
            {" "}
            {tabMenu?.map((menu, i) => (
              <li
                key={menu}
                className={`text-base text-primary_text font-normal leading-tight relative ${
                  active === i
                    ? "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-secondary after:content-['']"
                    : ""
                }`}
                onClick={() => setActive(i)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 gap-6 ">
          {cardData?.map((data) => (
            <PortfolioCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
