import emoji from "react-easy-emoji";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNode,
  FaNodeJs,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import logo from "../../assest/images/Amentotech.jpg";
import idea94 from "../../assest/images/idea94.jpg";
import GamicaCloud from "../../assest/images/gamica.jpg";

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
  resumeLink: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};
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
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: <FaHtml5 color="#f06529" />,
    },
    {
      skillName: "css3",
      fontAwesomeClassname: <FaCss3Alt color="#2965f1" />,
    },
    {
      skillName: "sass",
      fontAwesomeClassname: <FaSass color="#cc6699" />,
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: <FaJs color="#f0db4f " />,
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: <FaReact color="#61DBFB" />,
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: <FaNode color="#68a063" />,
    },
    {
      skillName: "Express",
      fontAwesomeClassname: <FaNodeJs color="#68a063" />,
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: <DiMongodb color="#3FA037" />,
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: <FaReact color="#61DBFB" />,
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Government College University Faisalabad",
      logo: require("../../assest/images/unilogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - August 2020",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ],
};
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Amentotech",
      companylogo: logo,
      date: "September 2020 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "React js Developer",
      company: "Idea94",
      companylogo: idea94,
      date: "May 2020 – August 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "GamicaCloud",
      companylogo: GamicaCloud,
      date: "January 2020 – May 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Project name",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Projects naame",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3074400087",
  email_address: "zainulabedin668@gmail.com"
};
export {
  aboutMe,
  illustration,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo
};
