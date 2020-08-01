import * as React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router";
import AboutMe from "./components/AboutMe";
import { HashRouter } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Skills from "./components/Skills";
import Cv from "./components/Cv";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";
import "./custom.css";

const NavMenuWithRouter = withRouter(NavMenu);

const App = () => {
  const playerConfig = {
    youtube: {
      playerVars: {
        showinfo: "1",
        enablejsapi: "1",
        autoplay: "1",
        iv_load_policy: "3",
      },
    },
  };
  return (
    <Container>
      <HashRouter>
        <NavMenuWithRouter />
        <br />
        <Switch>
          <Route exact path="/Home" component={AboutMe} />
          <Route path="/Kenntnisse" component={Skills} />
          <Route path="/Lebenslauf" component={Cv} />
          <Redirect to="/Home" />
        </Switch>
        <br />
        <br />
        <br />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=CcaNo8BrDcs"
          height={200}
          width={"auto"}
          config={playerConfig}
        />
      </HashRouter>
    </Container>
  );
};

export default App;
