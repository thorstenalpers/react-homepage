import React, { Fragment } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import AnimationOcean from "./AnimationOcean/AnimationOcean";

import { Helmet } from "react-helmet";

const AboutMe = () => {
  return (
    <Fragment>
      <Helmet>
        <meta name="description" content="Thorsten Alpers" />
      </Helmet>
      <div className="animation-div">
        <AnimationOcean />
      </div>
      <div className="centered-content overlay-text overlay">
        <div className="centered-content__inner text display-4 ">
          <Typed
            strings={[
              "Hi! Ich bin Thorsten Alpers.",
              "Ich bin ein Fullstack Softwareentwickler.",
              "Ich bin ein Teamplayer.",
              "Ich bin ein Softwarearchitekt.",
              "Aktuell interessieren mich Microservices, Docker, Kafka, .Net Core, Typescript und React.",
              "Mein Ziel ist eine Software, die die Welt beser macht!",
            ]}
            startDelay={1000}
            typeSpeed={55}
            backSpeed={30}
            backDelay={2000}
            loop
            showCursor={true}
          >
            <span className="text-center" />
          </Typed>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
