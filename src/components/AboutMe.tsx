import React from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { Container } from 'reactstrap';
import Animation from './Animation/Animation';



const AboutMe = () => {

  return (
    <Container>
      <div className="col centered-content overlay-text">
        <div className="centered-content__inner text">
          <Typed
            strings={['Hi! Ich bin Thorsten Alpers.', 'Ich bin ein Fullstack .NET Softwareentwickler.', 'Ich entwickle Cloud Lösungen..']}
            typeSpeed={40}
            backSpeed={50}
            loop
            showCursor={true}
          >
            <span className="display-4 text-center" />
          </Typed>
        </div>
      </div>
      <Animation />

    </Container>
  )
}

export default AboutMe;
