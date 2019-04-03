import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Actions from './Actions';

export default class NoteCard extends Component {
  static propTypes = {
    id: PropTypes.number,
  };

  static defaultProps = {
    id: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  toggleEdit = () => {
    const valueState = this.state;
    this.setState({ editing: !valueState.editing });
  };

  render() {
    const { id } = this.props;
    const value = this.props;
    const valueState = this.state;
    if (valueState.editing === false) {
      return (
        <div className="container">
          <div className="col s12 m6">
            <div className="card blue lighten-5">
              <div className="card-content blue-text">
                <span className="card-title">
                  <Link to={{
                    pathname: `/details/${id}`,
                    state: {
                      id: value.id,
                      title: value.title,
                    },
                  }}
                  >
                    {value.title}
                  </Link>
                </span>
              </div>
              <Actions
                id={value.id}
                onChange={value.onChange}
                onCheck={value.onCheck}
                toggleEdit={this.toggleEdit}
                deleteNote={value.deleteNote}
                mode="list"
              />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="col s12 m6">
          <div className="card blue lighten-5">
            <div className="card-content white-text">
              <span className="card-title">
                <input placeholder={value.title} onChange={e => value.onChange(e)} />
              </span>
            </div>
            <Actions
              id={value.id}
              toggleEdit={this.toggleEdit}
              onChange={value.onChange}
              onCheck={value.onCheck}
              deleteNote={value.deleteNote}
              mode="edit"
            />
          </div>
        </div>
      </div>
    );
  }
}
