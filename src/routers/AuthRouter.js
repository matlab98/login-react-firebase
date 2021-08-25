import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Log from "../containers/log";

const AuthRouter = () => {
  console.log("hpta vida");
  return (
    <Router>
      <Switch>
        <Route exact path="/auth" component={Log} />
        <Redirect to='/auth/login' />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
