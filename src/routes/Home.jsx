import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';

export default () => (
  <AppBar title="Movie Database">
    <Navigation type="horizontal">
      <Link href="http://jsleague.ro" active>JSLeague</Link>
      <Link href="https://reactjs.org/" active>React</Link>
      <Link href="http://react-toolbox.io/#/">React Toolbox</Link>
    </Navigation>
  </AppBar>
);
