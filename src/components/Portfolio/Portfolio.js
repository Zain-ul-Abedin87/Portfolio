import emoji from "react-easy-emoji";
import {FaHtml5,FaCss3Alt,FaSass,FaJs,FaReact,FaNode,FaNodeJs} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
const illustration = {
  animated: true,
};
const aboutMe = {
  name: "Zain Ul Abedin ",
  title: "Hi all, I'm Zain",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to trueF
};
const socialMediaLinks = {
  github: "https://github.com/Zain-ul-Abedin87",
  linkedin: "https://www.linkedin.com/in/zain-ul-abedin-008/",
  gmail: "zainulabedin668@gmail.com",
  gitlab: "https://github.com/Zain-ul-Abedin87",
  facebook: "https://www.facebook.com/zain.ulabedin.1401/",
  medium: "https://medium.com/@zainulabedin668",
  stackoverflow: "https://stackoverflow.com/users/story/18041509",
  resumeLink:"",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
}
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: <FaHtml5/>
    },
    {
      skillName: "css3",
      fontAwesomeClassname: <FaCss3Alt/>
    },
    {
      skillName: "sass",
      fontAwesomeClassname: <FaSass/>
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: <FaJs/>
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: <FaReact/>
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: <FaNode/>
    },
    {
      skillName: "Express",
      fontAwesomeClassname: <FaNodeJs/>
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: <DiMongodb/>
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: <FaReact/>
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

export { aboutMe,illustration,socialMediaLinks,skillsSection };
