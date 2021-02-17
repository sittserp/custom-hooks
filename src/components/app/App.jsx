import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from '../../state/themeContext';
import Home from '../characters/AllCharacters';
import Details from '../details/AllDetail';
import Header from '../header/Header';

export default class App extends React.Component { 
  render() {
    return (
      <>
        <Router>
          <ThemeProvider>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                component = { Home }
              />
              <Route
                path="/details/:id" 
                component = { Details }
              />
            </Switch>
          </ThemeProvider>
        </Router>
      </>
    );
  }
}
