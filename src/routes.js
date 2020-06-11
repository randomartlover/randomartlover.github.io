import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Resume from "./Resume.js";
import Project from "./Project.js";
import Contact from "./Contact.js";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Project" component={Project} />
    <Route path="/Contact" component={Contact} />
  </Switch>
);

export default Routes;
