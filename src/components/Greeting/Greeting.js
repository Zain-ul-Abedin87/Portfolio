import React, { useContext } from "react";
import { aboutMe, illustration } from "../Portfolio/Portfolio";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./Greeting.scss";
import img1 from "../../assest/images/manOnTable.svg";
import landingPerson from "../../assest/lottie/landingPerson.json";
import DisplayLottie from "../displayLoittli/Display";
import SocialMedia from "../socialMedia/SocialMedia";
import Button from "../../elements/Button/Button";
import Typed from 'react-typed';
const Greeting = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <div className="greet-main">
      <div className="greeting-main">
        <div className="greeting-text-dev">
          <div>
            <h1
              className={isDark ? "dark-mood greeting-text" : "greeting-text"}
            >
              <Typed strings ={[aboutMe.title]}
                 typeSpeed={40}
                 backSpeed={50}
                //  loop
              />
              {/* {aboutMe.title} */}
              {/* <span className="wave-emoji">{emoji("👋")}</span> */}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {aboutMe.subTitle}
            </p>
            <SocialMedia/>
            <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* {aboutMe.resumeLink && ( */}
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={aboutMe.resumeLink}
                  />
                {/* )} */}
              </div>
          </div>
        </div>
        <div className="greeting-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img alt="" src={img1} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Greeting;
