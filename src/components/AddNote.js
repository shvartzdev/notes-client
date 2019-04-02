import React, { Component } from 'react';

export default class AddNote extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onCheck = (e) => {
    const stateValue = this.state;
    if (e.target.value === undefined && stateValue.title === '') alert('empty field');
    else {
      e.preventDefault();
      const valueProps = this.props;
      valueProps.addNote(stateValue.title);
      this.setState({
        title: '',
      });
    }
  }

  render() {
    const stateValue = this.state;
    return (
      <div className="container">
        <div className="col s12 m6">
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={stateValue.title}
            placeholder="add note"
          />
          <i className="material-icons" style={{ cursor: 'pointer' }} onClick={e => this.onCheck(e)}>add</i>
        </div>
      </div>
    );
  }
}
