import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ISkill } from '../services/SkillsService';
import { Row, Col, ProgressBar } from 'react-bootstrap';

export default (props: { skill: ISkill }) => {
  const step = 5
  const interval = 200
  let willUnMount: boolean = false

  const [progressBarValue, setProgressBarValue] = useState<number>(0);
  const [progressBarAnimated, setProgressBarAnimated] = useState<boolean>(true);

  const updateProgress = () => {
    if (!willUnMount)
      setProgressBarValue(progressBarValue + step)
  }

  useLayoutEffect(() => {

    if (!willUnMount && progressBarValue < props.skill.value) {
      setTimeout(updateProgress, interval)
    }
    else {
      setProgressBarAnimated(false)
    }
  }, [progressBarValue, props.skill, willUnMount])

  useEffect(() => {
    return () => {
      // cleanup, stop updating progressbar when this component is removed from DOM
      willUnMount = true;
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