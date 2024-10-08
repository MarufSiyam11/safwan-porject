import { useState } from "react";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home"); // Default active item
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState("");
  const navItems = ["Home", "Page", "Services", "Blog", "Contact"];

  return (
    <nav className="maxWidth mx-auto py-4 px-4 md:px-0">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-[#00413d] font-medium ml-2">
            <img src={logo} alt="" />
          </span>
        </div>

        {/* Menu for Medium (md) and Larger Screens */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveItem(item)}
                className={`cursor-pointer ${
                  activeItem === item ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Download CV Button for Medium (md) and Larger Screens */}
        <div className="hidden md:block">
          <button className="btn">Download CV</button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) for Small Screens */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveItem(item)}
                className={`cursor-pointer ${
                  activeItem === item ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="btn mt-4 w-full ">Download CV</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
