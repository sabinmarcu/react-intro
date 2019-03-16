import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';

import styles from './style.module.css';

export default () => (
  <div className={styles.wrapper}>
    <AppBar title="Movie Database">
      <Navigation type="horizontal">
        <Link href="http://jsleague.ro" active>JSLeague</Link>
        <Link href="https://reactjs.org/" active>React</Link>
        <Link href="http://react-toolbox.io/#/">React Toolbox</Link>
      </Navigation>
    </AppBar>
  </div>
);
