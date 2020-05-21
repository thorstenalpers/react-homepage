import React from 'react'
import SkillsService from '../services/SkillsService';
import SkillEntry from './SkillEntry';
import { Container } from 'react-bootstrap';

export default () => {
  return (
    <Container className="pt-4">

      <h1>Kenntnisse in der Softwareentwicklung</h1>
      <br />
      {SkillsService.getSkills().map((skill) => (
        <SkillEntry skill={skill} />
      ))}
    </Container>
  )
}