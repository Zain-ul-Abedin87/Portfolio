import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./HeaderStyle.scss";
import { aboutMe } from "../Portfolio/Portfolio";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { Link } from "react-router-dom";
const Header = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a  className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{aboutMe.name}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className="menu">
          <li>
            <a
              href="skills"
              className={
                isDark ? "dark-headerCategory" : "light-headerCategory"
              }
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={
                isDark ? "dark-headerCategory" : "light-headerCategory"
              }
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#opensource"
              className={
                isDark ? "dark-headerCategory" : "light-headerCategory"
              }
            >
              Work Experiences
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={
                isDark ? "dark-headerCategory" : "light-headerCategory"
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={
                isDark ? "dark-headerCategory" : "light-headerCategory"
              }
            >
              Contact Me
            </a>
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
