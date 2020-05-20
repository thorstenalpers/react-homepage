import * as React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router';
import AboutMe from './components/AboutMe';
import { HashRouter } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Skills from './components/Skills';
import Cv from './components/Cv';
import { Container } from 'react-bootstrap';
import './custom.css'

const NavMenuWithRouter = withRouter(NavMenu);

export default () => (
    <Container>
        <HashRouter>
            <NavMenuWithRouter />
            <br />
            <Switch>
                <Route exact path='/' component={AboutMe} />
                <Route path='/Kenntnisse' component={Skills} />
                <Route path='/Lebenslauf' component={Cv} />
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    </Container>
);
