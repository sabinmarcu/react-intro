import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';

import styles from './style.module.css';
import CommentBox from '../CommentsBox';

export default class MovieComponent extends Component {
  state = {
    comment: '',
  }

  render() {
    const {
      title,
      year,
      genre,
      plot,
      poster,
    } = this.props;
    const { comment } = this.state;
    return (
      <Card className={styles.card}>
        <CardMedia
          image={poster}
          aspectRatio="square"
        />
        <CardTitle title={title} subtitle={`${genre} (${year})`} />
        <CardText>{plot}</CardText>
        <CardText>
          <CommentBox onChange={value => this.setState({ comment: value })} {...{ comment }} />
        </CardText>
      </Card>
    );
  }
}
