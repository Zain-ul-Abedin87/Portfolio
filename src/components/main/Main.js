import React from "react";
import Header from "../Header/Header";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Main.scss";
import Greeting from "../Greeting/Greeting";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import WorkExperience from "../Experiences/WorkExperience";
import Projects from "../Projects/Projects"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile"
const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkPref);
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const changeTheme = () => {
    setIsDark(!isDark);
    console.log(isDark);
  };
  return (
    // <BrowserRouter>
      <div className={isDark ? "dark-mood" : null}>
        <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
          <Header />
          {/* <Routes>
            <Route path="/" element={<Greeting />}/> */}
            <Greeting />
            <Skills/>
            <Education/>
            <WorkExperience/>
            <Projects/>
            <Profile/>
             {/* <Route path="/skills" element={ <Skills />}/> */}
          {/* </Routes> */}
        </StyleProvider>
      </div>
    // </BrowserRouter>
  );
};

export default Main;
