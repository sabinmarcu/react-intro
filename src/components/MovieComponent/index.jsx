import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

import styles from './style.module.css';

export default class MovieComponent extends Component {
  state = {
    comment: '',
    editing: false,
    editingComment: '',
  }

  renderInput = () => {
    const { comment, editingComment } = this.state;
    const inputValid = editingComment.length > 0;
    return (
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          label="Comment"
          value={editingComment}
          onChange={value => this.setState({ editingComment: value })}
        />
        <Button
          primary
          raised={inputValid}
          disabled={!inputValid}
          onClick={this.saveComment}
          label={comment.length === 0 ? 'Add Comment' : 'Update Comment'}
        />
      </div>
    );
  }

  renderComment = () => {
    const { comment } = this.state;
    return (
      <div className={styles.commentWrapper}>
        <div className={styles.comment}>{comment}</div>
        <Button label="Edit Comment" onClick={this.toggleEditing} />
      </div>
    );
  }

  toggleEditing = () => {
    const { editing, comment } = this.state;
    this.setState({
      editingComment: editing ? '' : comment,
      editing: !editing,
    });
  }

  saveComment = () => {
    const { editingComment } = this.state;
    this.setState({
      comment: editingComment,
      editingComment: '',
      editing: false,
    });
  }

  render() {
    const {
      title,
      year,
      genre,
      plot,
      poster,
    } = this.props;
    const { comment, editing } = this.state;
    return (
      <Card className={styles.card}>
        <CardMedia
          image={poster}
          aspectRatio="square"
        />
        <CardTitle title={title} subtitle={`${genre} (${year})`} />
        <CardText>{plot}</CardText>
        <CardText>
          {comment.length > 0 && !editing
            ? this.renderComment()
            : this.renderInput()
          }
        </CardText>
      </Card>
    );
  }
}
