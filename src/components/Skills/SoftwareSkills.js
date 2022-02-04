import React from "react";
import { skillsSection } from "../Portfolio/Portfolio";
import "./SoftwareSkills.scss";

const SoftwareSkills = () => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icon">
          {skillsSection.softwareSkills.map((item, index) => {
            return (
              <li key={index} className="software-skill-inline" name={item.skillName}>
                <i>{item.fontAwesomeClassname}</i>
                <p>{item.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkills;
