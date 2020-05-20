import React, { useState, useEffect } from 'react'
import { ISkill } from '../services/SkillsService';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

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
          <div>
            <ProgressBar now={progressBarValue} label={<span className="text-right pr-2">{progressBarValue + '%'}</span>} style={{ height: 20 }} />
          </div>
          <span >{props.skill.name}</span>
        </Col>
      </Row>
    </Container>
  )
}