import css from './FeedbackButton.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// export const FeedbackButton = {};

export class FeedbackButton extends Component {
  static defaultProps = { title: 'Reviev button' };
  static propTypes = { title: PropTypes.string };

  render() {
    return (
      <div>
        <button onClick={event => console.log('event')}>{this.title}</button>
      </div>
    );
  }
}
