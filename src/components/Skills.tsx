import React, { Fragment } from 'react'
import { Container } from 'reactstrap';
import skills from '../services/SkillsService';
import SkillEntry from './SkillEntry';

export default () => {
  return (
    <Container className="pt-4">
      {skills.map((skill) => (
        <SkillEntry skill={skill} />
      ))}
    </Container>
  )
}