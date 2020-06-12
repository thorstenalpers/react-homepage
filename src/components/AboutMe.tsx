import React from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import Animation from "./Animation/Animation";
import { Container } from "react-bootstrap";

import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";

const AboutMe = () => {
  const playerConfig = {
    youtube: {
      playerVars: {
        showinfo: "1",
        enablejsapi: "1",
        autoplay: "1",
        iv_load_policy: "3",
      },
    },
  };

  return (
    <Container>
      <Helmet>
        <meta name="description" content="Thorsten Alpers" />
      </Helmet>
      <div>
        <Animation />
        <br />
        <br />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=y10x2WURGBs"
          height={200}
          width={"auto"}
          config={playerConfig}
        />
      </div>
      <div className="centered-content overlay-text overlay">
        <div className="centered-content__inner text display-4 ">
          <Typed
            strings={[
              "Hi! Ich bin Thorsten Alpers.",
              "Ich bin ein Fullstack Softwareentwickler.",
              "Aktuell interessieren mich Microservices, Docker, Kafka, .Net Core, Typescript und React.",
              "Meine Ziele sind eine hohe Softwarequalität, geringe Kosten, zufriedene Endnutzer und Auftraggeber.",
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
    </Container>
  );
};

export default AboutMe;
