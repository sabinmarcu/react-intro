import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';

import styles from './style.module.css';

export default () => (
  <Card className={styles.card}>
    <CardMedia
      image="https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg"
      aspectRatio="square"
    />
    <CardTitle title="Star Wars: The Last Jedi" subtitle="Action, Adventure, Fantasy (2017)" />
    <CardText>
      Rey develops her newly discovered abilities with the guidance of Luke Skywalker,
      who is unsettled by the strength of her powers. Meanwhile,
      the Resistance prepares to do battle with the First Order.
    </CardText>
  </Card>
);
