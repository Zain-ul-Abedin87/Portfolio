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
        <div className="skills-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={codingPerson} />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assest/images/developerActivity.svg")}
            ></img>
          )}
        </div>
        <div className="skills-text-div">
             <h1>{skillsSection.title}</h1>
             <p>{skillsSection.subTitle}</p>
             <SoftwareSkills/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
