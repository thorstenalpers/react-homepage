import React from 'react'
import SkillsService from '../services/SkillsService';
import SkillEntry from './SkillEntry';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <Container className="pt-4">
      <Helmet>
        <meta name="description" content="Kenntnisse in der Softwareentwicklung von Thorsten Alpers" />
      </Helmet>
      <h1>Kenntnisse in der Softwareentwicklung</h1>
      <br />
      {SkillsService.getSkills().map((skill) => (
        <SkillEntry skill={skill} />
      ))}
    </Container>
  )
}