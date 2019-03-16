import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

import styles from './style.module.css';

export default class CommentBox extends Component {
  state = {
    comment: '',
    editing: false,
  }

  renderInput = () => {
    const { comment: editingComment } = this.state;
    const { comment } = this.props;
    const inputValid = editingComment.length > 0;
    return (
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          label="Comment"
          value={editingComment}
          onChange={value => this.setState({ comment: value })}
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
    const { comment } = this.props;
    return (
      <div className={styles.commentWrapper}>
        <div className={styles.comment}>{comment}</div>
        <Button label="Edit Comment" onClick={this.toggleEditing} />
      </div>
    );
  }

  toggleEditing = () => {
    const { editing } = this.state;
    const { comment } = this.props;
    this.setState({
      comment: editing ? '' : comment,
      editing: !editing,
    });
  }

  saveComment = () => {
    const { comment } = this.state;
    const { onChange } = this.props;
    onChange(comment);
    this.setState({
      comment: '',
      editing: false,
    });
  }

  render() {
    const { comment } = this.props;
    const { editing } = this.state;
    return (comment.length === 0 || editing ? this.renderInput : this.renderComment)();
  }
}
