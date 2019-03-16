import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardText from 'react-toolbox/lib/card/CardText';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

const defaultValues = {
  title: 'New Title',
  year: 1970,
  genre: 'The genre',
  plot: 'Write a plot',
  poster: '',
};

export default class EditComponent extends Component {
  state = {
    title: '',
    year: '',
    genre: '',
    plot: '',
    poster: '',
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    if (id) {
      fetch(`http://localhost:8000/movies/${id}`)
        .then(data => data.json())
        .then(data => this.setState(data));
    }
  }

  handleUpdate = prop => value => this.setState({ [prop]: value })
  getDisplayValue = prop => this.state[prop] || this.props[prop] || defaultValues[prop]; // eslint-disable-line

  render() {
    const props = Object.keys(this.state).filter(prop => prop !== 'comment');
    const isValid = props.every(prop => this.state[prop]); // eslint-disable-line
    const errors = props.reduce(
      (prev, prop) => ({
        ...prev,
        [prop]: this.state[prop] ? undefined : 'Missing property', //eslint-disable-line
      }), {},
    );
    const { history, match: { params: { id } } } = this.props;
    return (
      <Card>
        <CardMedia
          image={this.getDisplayValue('poster')}
          aspectRatio="wide"
        />
        <CardText>
          <Input
            type="text"
            label="Title"
            value={this.getDisplayValue('title')}
            onChange={this.handleUpdate('title')}
            error={errors.title}
          />
          <Input
            type="text"
            label="Genre"
            value={this.getDisplayValue('genre')}
            onChange={this.handleUpdate('genre')}
            error={errors.genre}
          />
          <Input
            type="number"
            label="Year"
            value={this.getDisplayValue('year')}
            onChange={this.handleUpdate('year')}
            error={errors.year}
          />
          <Input
            type="textarea"
            label="Plot"
            value={this.getDisplayValue('plot')}
            onChange={this.handleUpdate('plot')}
            error={errors.plot}
          />
          <Input
            type="text"
            label="Poster (link)"
            value={this.getDisplayValue('poster')}
            onChange={this.handleUpdate('poster')}
            error={errors.poster}
          />
          <Button
            label="Save"
            primary
            raised={isValid}
            disabled={!isValid}
            onClick={() => fetch(
              id ? `http://localhost:8000/movies/${id}` : 'http://localhost:8000/movies',
              {
                method: id ? 'PUT' : 'POST',
                body: JSON.stringify({ ...this.state, comment: '' }),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              },
            ).then(() => history.push('/'))}
          />
        </CardText>
      </Card>
    );
  }
}
