import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./HeaderStyle.scss";
import { aboutMe } from "../Portfolio/Portfolio";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
const Header = () => {
  const {isDark} = useContext(StyleContext)
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{aboutMe.name}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <ul className="menu">
          <li >
            <a href="#skills" className="headerCategory">Skills</a>
          </li>
          <li>
            <a href="#experience"className="headerCategory" >Work Experiences</a>
          </li>
          <li>
            <a href="#opensource" className="headerCategory">Open Source</a>
          </li>
          <li>
            <a href="#achievements" className="headerCategory">Achievements</a>
          </li>
          <li>
            <a href="#blogs" className="headerCategory">Blogs</a>
          </li>
          <li>
            <a href="#talks" className="headerCategory">Talks</a>
          </li>
          <li>
            <a href="#contact" className="headerCategory">Contact Me</a>
          </li>
          <li>
            <a href="">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
};

export default Header;
