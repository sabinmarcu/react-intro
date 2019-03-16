import React, { Component } from 'react';
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
      <div className={styles.list}>
        {movies.map(({ id, ...rest }) => (
          <Movie key={id} {...{ ...rest, id }} onUpdate={this.updateData} />
        ))}
      </div>
    );
  }
}
