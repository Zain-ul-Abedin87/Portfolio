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
import workreap from "../../assest/images/workreap.webp";
import guupy from "../../assest/images/guppy.webp";
import doctreat from "../../assest/images/doctreat.webp";
import servento from "../../assest/images/servento.webp";
import taskly from "../../assest/images/taskly.webp";
// import idea94 from "../../assest/images/idea94.jpg";
import GamicaCloud from "../../assest/images/gamica.jpg";

const illustration = {
  animated: true,
};
const aboutMe = {
  name: "Zain Ul Abedin ",
  title: "Hi all, I'm Zain",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / React JS / Node JS / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1vRP5BZiSksaQlkEvxlFEuEr1UgyQIhhj", // Set to empty to hide the button
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
  resumeLink: "https://drive.google.com/drive/folders/1vRP5BZiSksaQlkEvxlFEuEr1UgyQIhhj",
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
      skillName: "HTML5",
      fontAwesomeClassname: <FaHtml5 color="#f06529" />,
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: <FaCss3Alt color="#2965f1" />,
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: <FaSass color="#cc6699" />,
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: <FaJs color="#f0db4f " />,
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: <FaReact color="#61DBFB" />,
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: <FaReact color="#61DBFB" />,
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: <FaNode color="#68a063" />,
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: <FaNodeJs color="#68a063" />,
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: <DiMongodb color="#3FA037" />,
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
      role: "React Native & React js Developer",
      company: "Amento Tech",
      companylogo: logo,
      date: "September 2021 – Present",
      // desc: "Working as React And React Native Developer at Amentotech.Worked on the Numerous Mobile Apps that were sold on ThemeForest.  ",
      descBullets: [
        "I have extensive experience in mobile app development, utilizing cross-platform frameworks to create exceptional mobile applications. I've successfully developed and deployed five feature-rich mobile apps, leveraging the power of cross-platform technology to deliver outstanding user experiences. These apps have been designed to function seamlessly across multiple platforms, ensuring broad accessibility and user engagement.",
        "Integrating push notifications to enhance user engagement and communication",
        "Utilizing Socket.IO for real-time communication and interactive features in mobile apps",
        "Implementing the RESTful API using The Redux and Redux toolkit for state management",
        "Successfully completed a project based on class base component and converted it into a Functional component using Hooks on the latest React Native version.",
        "Designed and developed reusable components",
        "Deployment of all the successfully completed projects to Google Play and Apple Stores.",
        "All the completed projects are available at ThemeForest.",
      ],
    },
    {
      role: "React JS Developer",
      company: "Idea94",
      companylogo: idea94,
      date: "May 2021 – August 2020",
      descBullets: [
        "Done project in React JS and worked with React Flux architecture",
        "Working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites",
        "Experience in using React JS components, Forms, Events, Keys,Router, plus Redux, Animations, SPA and Flux concept",
        "Done developing in React.js for creating interactive UI’s using One-way data flow, Virtual DOM, JSX, React Native concepts",
      ],
    },
    // {
    //   role: "MERN Stack Intern",
    //   company: "GamicaCloud",
    //   companylogo: GamicaCloud,
    //   date: "January 2020 – May 2020",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ],
};
const bigProjects = {
  title: "Portfolio of Projects",
  subtitle: "Collaborative Mobile App Development with Startups and Companies",
  projects: [
    {
      image: workreap,
      projectName: "Workreap React Native App",
      projectDesc:
        "Workreap React Native Mobile APP is an excellent CROSS Platform native app that is built to work with Workreap – Freelance Marketplace WordPress Theme.",
      footerLink: [
        {
          name: "Visit Demo",
          url: "https://codecanyon.net/item/workreap-react-native-android-and-ios-mobile-app/24906868",
        },
      ],
    },
    {
      image: guupy,
      projectName: "Guppy Chat App",
      projectDesc:
        "WP-Guppy is a well thought and clinically designed and developed WordPress chat plugin which has been engineered to fulfill the market needs. It is loaded with features without compromising on quality",
      footerLink: [
        {
          name: "Visit Demo",
          url: "https://play.google.com/store/apps/details?id=com.guppy&hl=en&gl=US",
        },
      ],
    },
    {
      image: doctreat,
      projectName: "Doctreat App",
      projectDesc:
        "Doctreat is a comprehensive healthcare online solution designed to bridge the gap between patients and medical professionals. This app is built around a central theme: to address the medical and health-related issues posted by patients and doctors alike. With its innovative features and meticulous code quality, Doctreat offers an exciting platform for seamless medical interactions and support",
      footerLink: [
        {
          name: "Visit Demo",
          url: "https://play.google.com/store/apps/details?id=com.doctreat&hl=en&gl=US",
        },
      ],
    },
    {
      image: servento,
      projectName: "Servento React Native App",
      projectDesc:
        "Servento – A service finder and business listing React Native APP, which has a clean and contemporary design and awesome features.",
      footerLink: [
        {
          name: "Visit Demo",
          url: "https://play.google.com/store/apps/details?id=com.servento_react_native",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: taskly,
      projectName: "Tasklay React Native App",
      projectDesc:
        "Tasklay is a freelancer marketplace React Native APP, this system would allow the sellers and buyers to register and create their profiles in a few simple steps. Sellers can get online orders for the posted services/gigs.",
      footerLink: [
        {
          name: "Visit Demo",
          url: "https://play.google.com/store/apps/details?id=com.taskbot",
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
  email_address: "zainulabedin668@gmail.com",
};
export {
  aboutMe,
  illustration,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo,
};
