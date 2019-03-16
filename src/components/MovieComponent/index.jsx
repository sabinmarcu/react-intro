import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';

import styles from './style.module.css';
import CommentBox from '../CommentsBox';

export default ({
  title,
  year,
  genre,
  plot,
  poster,
  comment,
  onUpdate,
  id,
}) => (
  <Card className={styles.card}>
    <CardMedia
      image={poster}
      aspectRatio="square"
    />
    <CardTitle title={title} subtitle={`${genre} (${year})`} />
    <CardText>{plot}</CardText>
    <CardText>
      <CommentBox
        onChange={
          value => fetch(`http://localhost:8000/movies/${id}`, {
            method: 'PATCH',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment: value }),
          }).then(onUpdate)}
        {...{ comment }}
      />
    </CardText>
  </Card>
);
