import React, { Fragment, useState, useEffect } from 'react'
import { Progress, Container, Row, Col } from 'reactstrap';
import SkillsService from '../services/SkillsService';

type ProgbarValue = {
  currentValue: number,
  targetValue: number,
}

export default () => {
  const step = 1
  const interval = 100

  const [progressBarValues, setProgressBarValues] = useState(SkillsService.map<ProgbarValue>((skill) => ({ currentValue: 0, targetValue: skill.value })));

  useEffect(() => {

    let updateProgBar: boolean = false

    let myClonedArray = progressBarValues.map(x => Object.assign({}, x))

    progressBarValues.forEach((element, index) => {
      if (element.currentValue < element.targetValue) {
        myClonedArray[index].currentValue += step
        updateProgBar = true
      }
    });

    const updateProgress = () => setProgressBarValues(myClonedArray)
    if (updateProgBar) {
      setTimeout(updateProgress, interval)
    }
  }, [progressBarValues])

  return (
    <Fragment>
      <Container className="pt-4">
        {SkillsService.map((skill, index) => (
          <Container className={"pt-1 pb-1"}>
            <Row>
              <Col>
                <Progress style={{ height: 20 }} value={progressBarValues[index].currentValue}> <div className="text-left pl-2">{progressBarValues[index].currentValue} %</div></Progress>
                <span >{skill.name}</span>
              </Col>
            </Row>
          </Container>))}
      </Container>
    </Fragment>
  )
}