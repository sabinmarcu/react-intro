import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';

import styles from './style.module.css';

export default ({
  title,
  year,
  genre,
  plot,
  poster,
}) => (
  <Card className={styles.card}>
    <CardMedia
      image={poster}
      aspectRatio="square"
    />
    <CardTitle title={title} subtitle={`${genre} (${year})`} />
    <CardText>{plot}</CardText>
  </Card>
);
