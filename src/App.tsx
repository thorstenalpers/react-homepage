import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import AboutMe from './components/AboutMe';

import './custom.css'
import { BrowserRouter } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import { Container } from 'reactstrap';
import Skills from './components/Skills';
import Cv from './components/Cv';

export default () => (
    <Container>
        <BrowserRouter>
            <NavMenu />
            <Switch>
                <Route exact path='/' component={AboutMe} />
                <Route path='/Kenntnisse' component={Skills} />
                <Route path='/Lebenslauf' component={Cv} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    </Container>
);
