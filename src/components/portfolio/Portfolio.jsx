import { useState } from "react";
import SectionTitle from "../section-Title/SectionTitle";
const tabMenu = ["All", "Branding", "Photography", "Fashion", "Product"];
const Portfolio = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="mt-28">
      <div className="container">
        <SectionTitle title="My Portfolio" description="My Work Example" />
        <div>
          <ul className="flex gap-8 items-center justify-center pt-6 pb-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
