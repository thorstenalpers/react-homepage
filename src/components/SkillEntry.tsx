import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ISkill } from '../services/SkillsService';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export default (props: { skill: ISkill }) => {
  const step = 5
  const interval = 200

  const [progressBarValue, setProgressBarValue] = useState<number>(0);
  const [progressBarAnimated, setProgressBarAnimated] = useState<boolean>(true);
  const [willUnMount, SetWillUnMount] = useState<boolean>(false);

  useLayoutEffect(() => {
    const updateProgress = () => setProgressBarValue(progressBarValue + step)
    if (!willUnMount && progressBarValue < props.skill.value) {
      setTimeout(updateProgress, interval)
    }
    else {
      setProgressBarAnimated(false)
    }
  }, [progressBarValue, props.skill])

  useEffect(() => {
    return () => {
      // cleanup, stop updating progressbar when this component is removed from DOM
      SetWillUnMount(true);
    };
  }, []);

  return (
    <div className={"pt-1 pb-2"}>
      <Row>
        <Col>
          <ProgressBar animated={progressBarAnimated} now={progressBarValue} label={<span className="text-right pr-2">{progressBarValue + '%'}</span>} style={{ height: 20 }} />
          <span >{props.skill.name}</span>
        </Col>
      </Row>
    </div>
  )
}