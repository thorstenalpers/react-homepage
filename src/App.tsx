import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import AboutMe from './components/AboutMe';

import './custom.css'
import { HashRouter } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Skills from './components/Skills';
import Cv from './components/Cv';
import { Container } from 'react-bootstrap';

export default () => (
    <Container>
        <HashRouter>
            <NavMenu />
            <br />
            <Switch>
                <Route exact path='/Home' component={AboutMe} />
                <Route path='/Kenntnisse' component={Skills} />
                <Route path='/Lebenslauf' component={Cv} />
                <Redirect to="/Home" />
            </Switch>
        </HashRouter>
    </Container>
);
