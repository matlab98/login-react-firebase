//Conexiones
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
// Ruta
import { PublicRouter } from './publicRouter';
import AuthRouter from "./AuthRouter";

export const App = () => {

    return (
      <>
        <Router>
        <Switch>
          <PublicRouter path='/auth' component={AuthRouter} />
            <Redirect to="/auth" />
        </Switch>
      </Router>
        
      </>
    );
  }
