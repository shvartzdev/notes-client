import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Actions extends Component {
  static propTypes = {
    id: PropTypes.number,
  }

  static defaultProps = {
    id: '',
  };

  constructor(props) {
    super(props);
    const propsValue = this.props;
    this.toggleEdit = propsValue.toggleEdit.bind(this);
  }

  render() {
    const value = this.props;
    const { id } = this.props;
    if (value.mode === 'list') {
      return (
        <div className="card-action">
          <i className="material-icons"
            style={{ cursor: 'pointer' }}
            onClick={value.toggleEdit.bind(this)}
          >edit
          </i>

          <i className="material-icons"
            style={{ cursor: 'pointer' }}
            onClick={value.deleteNote.bind(this, id)}
          >delete
          </i>
        </div>
      );
    }
    return (
      <div className="card-action">
        <i className="material-icons"
          style={{ cursor: 'pointer' }}
          onClick={value.toggleEdit.bind(this)}
        >keyboard_backspace
        </i>

        <i className="material-icons"
          style={{ color: 'black', cursor: 'pointer' }}
          onClick={(e) => { value.onCheck(e, id); value.toggleEdit(); }}
        >save
        </i>
      </div>
    );
  }
}
