import React, { useRef } from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import Animation from './Animation/Animation';
import { Container, Overlay, Tooltip } from 'react-bootstrap';
// import Particles from 'react-particles-js';

import ReactPlayer from 'react-player'

const AboutMe = () => {

  return (
    <Container>


    <div>
    <Animation />
    <br/>
    <br/>
    <ReactPlayer url='https://www.youtube.com/watch?v=y10x2WURGBs' playing loop={true} height={200} width={'auto'}/> 
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
          // fadeOut={true}
          loop
          showCursor={true}
        >
          <span className="display-4 text-center" />
        </Typed>
      </div>
    </div>
      {/* <Particles
              params={{
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#00F"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    },
                    polygon: {
                      "nb_sides": 5
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 2,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 6,
                      size_min: 0.5,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#116",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 4,
                    random: false,
                    straight: false,
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 0,
                      rotateY: 0
                    }
                  }
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true
              }
            	}
            /> */}
    </Container >
  )
}

export default AboutMe;
