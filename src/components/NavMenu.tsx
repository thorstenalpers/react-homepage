import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import Octicon, { MarkGithub } from '@primer/octicons-react'

export default () => {

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#Home">Thorsten Alpers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Home">Über mich</Nav.Link>
                        <Nav.Link href="#Kenntnisse">Kenntnisse</Nav.Link>
                        <Nav.Link href="#Lebenslauf">Lebenslauf</Nav.Link>
                    </Nav>
                    <Nav>
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