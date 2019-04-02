import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class NoteDetails extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: '',
      }),
    }),
  }


  constructor(props) {
    super(props);
    this.state = {
      note: {},
    };
  }

  componentDidMount() {
    const valueState = this.state;
    const valueProps = this.props;
    const id = parseInt(valueProps.match.params.id, 10);
    console.log('id', id);
    fetch(`https://private-9aad-note10.apiary-mock.com/notes/${id}`)
      .then(response => response.json())
      .then((data) => {
        console.log('data', data);
        this.setState({
          note: {
            id: data.id,
            title: data.title,
          },
        });
        console.log('note', valueState);
      })
      .catch(error => console.log(error));
  }

  deleteNote = (id) => {
    const valueState = this.state;
    axios.delete(`https://private-9aad-note10.apiary-mock.com/notes/${id}`)
      .then(res => this.setState({
        notes: [...valueState.note.filter(note => note.id !== id)],
      }));
  };

  render() {
    console.log('state', this.state);
    const stateValue = this.state;
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue lighten-5">
            <div className="card-content white-text">
              <span className="card-title">
                {stateValue.note.title}
              </span>
              <p>{stateValue.note.id}</p>
            </div>
            <div className="card-action">
              <i className="material-icons" style={{ cursor: 'pointer' }}>edit</i>
              <i
                className="material-icons"
                style={{ cursor: 'pointer' }}
                onClick={this.deleteNote.bind(this, stateValue.note.id)}
              >delete</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
