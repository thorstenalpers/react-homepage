import React, { useState, useEffect } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import Octicon, { MarkGithub } from '@primer/octicons-react'

export default (props) => {
    const { location } = props;
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href="#Home" >Thorsten Alpers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" activeKey={location.pathname} >
                        <Nav.Link eventKey="1" href="#Home">Über mich</Nav.Link>
                        <Nav.Link eventKey="2" href="#Kenntnisse">Kenntnisse</Nav.Link>
                        <Nav.Link eventKey="3" href="#Lebenslauf">Lebenslauf</Nav.Link>
                        <Nav.Link
                            href="https://github.com/thorstenalpers"
                            target='_blank'
                            title="thorstenalpers - GitHub"
                            rel='noopener noreferrer' >
                            <Octicon icon={MarkGithub} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header >
    );
}