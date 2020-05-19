import React, { useState, useEffect } from 'react'
import { Progress, Container, Row, Col } from 'reactstrap';
import { ISkill } from '../services/SkillsService';

export default (props: { skill: ISkill }) => {
  const step = 1
  const interval = 100

  const [progressBarValue, setProgressBarValue] = useState<number>(0);

  useEffect(() => {
    const updateProgress = () => setProgressBarValue(progressBarValue + step)
    if (progressBarValue < props.skill.value) {
      setTimeout(updateProgress, interval)
    }
  }, [progressBarValue, props.skill])

  return (
    <Container className={"pt-1 pb-1"}>
      <Row>
        <Col>
          <Progress style={{ height: 20 }} value={progressBarValue}> <div className="text-left pl-2">{progressBarValue} %</div></Progress>
          <span >{props.skill.name}</span>
        </Col>
      </Row>
    </Container>
  )
}