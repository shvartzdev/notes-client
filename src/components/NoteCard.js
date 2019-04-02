import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class NoteCard extends Component {
  static propTypes = {
    id: PropTypes.number,
  };

  static defaultProps = {
    id: '',
  };

  render() {
    const { id } = this.props;
    const value = this.props;
    return (
      <div className="container">
        <div className="col s12 m6">
          <div className="card blue lighten-5">
            <div className="card-content white-text">
              <span className="card-title">
                <Link to={`/details/${id}`}>
                  {value.title}
                </Link>
              </span>
            </div>
            <div className="card-action">
              <i className="material-icons" style={{ cursor: 'pointer' }}>edit</i>
              <i
                className="material-icons"
                style={{ cursor: 'pointer' }}
                onClick={value.deleteNote.bind(this, id)}
              >
delete
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
