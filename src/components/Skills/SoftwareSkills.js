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
                <i className="icon-bg">{item.fontAwesomeClassname}</i>
                <p className="skill_name">{item.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkills;
