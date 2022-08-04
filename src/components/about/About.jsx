import React from "react";
import "./about.css";
import { AboutMeButton } from "./AboutMeButton";
import AboutMeContent from "./AboutMeContent";
import { AboutMeText } from "./AboutMeText";

export const About = () => {
  return (
    <>
      <div className="container" id="about-me">
        <div className="about-me">
          <AboutMeText />
          <AboutMeContent />
          <AboutMeButton /> 
        </div>
      </div>
    </>
  );
};
export default About;
