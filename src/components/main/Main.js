import React from "react";
import Header from "../Header/Header";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Main.scss";
import Greeting from "../Greeting/Greeting";
const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkPref);
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const changeTheme = () => {
    setIsDark(!isDark);
    console.log(isDark);
  };
  return (
    <div className={isDark ? "dark-mood" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <Greeting/>
      </StyleProvider>
    </div>
  );
};

export default Main;
