import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ReactComponent as GithubIcon } from '../github.svg';
import { Container } from 'react-bootstrap';

export default () => {

    const toggle = () => {
        toggleOpenMenu(!isOpen);
    }

    const [isOpen, toggleOpenMenu] = useState<boolean>(false);

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
                            rel='noopener noreferrer'
                            style={{
                                paddingLeft: '.5rem',
                                paddingRight: '.5rem'
                            }}>
                            <img title="thorstenalpers - GitHub" src={'/images/github.png'} alt={"GitHub"} style={{ width: '40px' }} />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header >
    );
}