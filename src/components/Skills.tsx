import React from 'react'
import { Container } from 'reactstrap';
import SkillsService from '../services/SkillsService';
import SkillEntry from './SkillEntry';

export default () => {
  return (
    <Container className="pt-4">
      {SkillsService.getSkills().map((skill) => (
        <SkillEntry skill={skill} />
      ))}
    </Container>
  )
}