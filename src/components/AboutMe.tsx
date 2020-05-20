import React, { useRef } from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import Animation from './Animation/Animation';
import { Container, Overlay, Tooltip } from 'react-bootstrap';

import ReactPlayer from 'react-player'

const AboutMe = () => {

  return (
    <Container>
      <div>
        <Animation />
        <br />
        <br />
        <ReactPlayer url='https://www.youtube.com/watch?v=y10x2WURGBs' playing={true} controls={false} loop={true} height={200} width={'auto'} />
      </div>
      <div className="centered-content overlay-text overlay">
        <div className="centered-content__inner text">
          <Typed
            strings={['Hi! Ich bin Thorsten Alpers.',
              'Ich bin ein Fullstack Softwareentwickler.',
              'Aktuell interessieren mich Microservices, Docker, Kafka, .Net Core, Typescript und React.',
              'Meine Ziele sind eine hohe Softwarequalität, geringe Kosten, zufriedene Endnutzer und Auftraggeber.']}
            startDelay={1000}
            typeSpeed={55}
            backSpeed={30}
            backDelay={2000}
            loop
            showCursor={true}
          >
            <span className="display-4 text-center" />
          </Typed>
        </div>
      </div>
    </Container >
  )
}

export default AboutMe;
