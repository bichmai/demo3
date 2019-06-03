import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.jsx";
import UserLayout from "layouts/User/User.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/User-Dashboard.scss";
import "assets/demo/demo.css";
import "assets/demo/responsive.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/user" render={props => <UserLayout {...props} />} />
      <Redirect from="/" to="/auth/advertise-first" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
