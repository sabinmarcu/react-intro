/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Button from 'react-toolbox/lib/button/Button';

import theme from './assets/react-toolbox/theme';
import Home from './routes/Home';
import Form from './routes/EditMovie';

import './assets/react-toolbox/theme.css';
import './style.css';

import styles from './style.module.css';

export const LinkButton = ({ to, ...rest }) => (to
  ? <Link {...{ to }}><Button {...rest} /></Link>
  : <Button {...rest} />
);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className={styles.wrapper}>
            <AppBar title="Movie Database">
              <Navigation type="horizontal">
                <LinkButton to="/" label="Home" />
                <LinkButton to="/new" label="New Movie" />
              </Navigation>
            </AppBar>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={Form} />
            <Route exact path="/edit/:id" component={Form} />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
