import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import { illustration, skillsSection } from "../Portfolio/Portfolio";
import DisplayLottie from "../displayLoittli/Display";
import codingPerson from "../../assest/lottie/codingPerson.json";
import "./Skills.scss";
import SoftwareSkills from "./SoftwareSkills";

const Skills = () => {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skill-main-div">
        <div
          className="skills-image-div"
          
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
        >
          {illustration.animated ? (
            <DisplayLottie animationData={codingPerson} data-aos="zoom-in" />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assest/images/developerActivity.svg")}
            ></img>
          )}
        </div>
        <div
          className="skills-text-div"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>{skillsSection.title}</h1>
          <p>{skillsSection.subTitle}</p>
          <SoftwareSkills />
        </div>
      </div>
    </div>
  );
};

export default Skills;
