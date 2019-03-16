/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './assets/react-toolbox/theme';
import Home from './routes/Home';

import './assets/react-toolbox/theme.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
