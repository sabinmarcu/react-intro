import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import Movie from '../../components/MovieComponent';

import styles from './style.module.css';

export default class HomeComponent extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.updateData();
  }

  updateData = () => fetch('http://localhost:8000/movies')
    .then(data => data.json())
    .then(movies => this.setState({ movies }));

  render() {
    const { movies } = this.state;
    return (
      <div className={styles.wrapper}>
        <AppBar title="Movie Database">
          <Navigation type="horizontal">
            <Link href="http://jsleague.ro" active>JSLeague</Link>
            <Link href="https://reactjs.org/" active>React</Link>
            <Link href="http://react-toolbox.io/#/">React Toolbox</Link>
          </Navigation>
        </AppBar>
        <div className={styles.list}>
          {movies.map(({ id, ...rest }) => (
            <Movie key={id} {...{ ...rest, id }} onUpdate={this.updateData} />
          ))}
        </div>
      </div>
    );
  }
}
