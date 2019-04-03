import React, { Component } from 'react';

export default class NoteCard extends Component {
  render() {
    const value = this.props;
    return (
      <span className="card-title blue-text">{value.id} - {value.title}</span>
    );
  }
}
