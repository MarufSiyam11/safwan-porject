import { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skill1 from "../../assets/Frame.svg";
import skill2 from "../../assets/Frame (1).svg";
import skill3 from "../../assets/Frame (2).svg";
import skill4 from "../../assets/Group.svg";

const Skill = () => {
  const skills = [
    { img: skill1, percentage: 95, label: "HTML" },
    { img: skill2, percentage: 85, label: "CSS" },
    { img: skill3, percentage: 88, label: "JavaScript" },
    { img: skill4, percentage: 90, label: "React" },
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null); // Reference to the skill section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger progress animation
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress.map((value, index) =>
            value < skills[index].percentage ? value + 1 : value
          )
        );
      }, 20); // Adjust animation speed

      return () => clearInterval(interval);
    }
  }, [isVisible, skills]);

  return (
    <div
      id="Skill"
      ref={skillRef}
      className="mt-20  max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 justify-center items-center mb-10"
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative pt-5 bg-white shadow-box-shadaw w-[270px] h-[282px]  flex flex-col items-center"
        >
          <div className="w-[167px]  h-[167px] ">
            <CircularProgressbar
              value={progress[index]}
              text={`${progress[index]}%`}
              styles={buildStyles({
                pathColor: "#E5745D",
                textColor: "#E5745D",
                trailColor: "#e0e0e0",
                textSize: "18px",
              })}
            />
          </div>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#00413D] text-center font-semibold">
            {skill.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skill;
