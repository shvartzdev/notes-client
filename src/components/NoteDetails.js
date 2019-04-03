import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

export default class NoteDetails extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        id: '',
        title: '',
      }),
    }),
  }


  constructor(props) {
    super(props);
    this.id = props.location.state.id;
    this.title = props.location.state.title;
  }

  returnBack = () => {
    window.history.go(-1); return false;
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="col s12 m6">
            <div className="card blue lighten-5">
              <div className="card-content white-text">
                <Content id={this.id} title={this.title} />
              </div>
              <div className="card-action">
                <i className="material-icons"
                  style={{ cursor: 'pointer' }}
                  onClick={this.returnBack}
                >keyboard_backspace
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
