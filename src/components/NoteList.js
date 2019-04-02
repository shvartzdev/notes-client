import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import AddNote from './AddNote';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: null,
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    fetch('https://private-9aad-note10.apiary-mock.com/notes')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          notes: data,
        });
      })
      .catch(error => console.log(error));
  }

  handleFormChange = (value, field) => {
    this.setState(prevState => ({
      notes: {
        ...prevState.notes,
        [field]: value,
      },
    }));
  };

  deleteNote = (id) => {
    const valueState = this.state;
    axios.delete(`https://private-9aad-note10.apiary-mock.com/notes/${id}`)
      .then(res => this.setState({
        notes: [...valueState.notes.filter(note => note.id !== id)],
      }));
  };


  addNote = (title) => {
    const valueState = this.state;
    const newId = Math.floor(Math.random() * 100);
    axios
      .post('https://private-9aad-note10.apiary-mock.com/notes', {
        newId,
        title,
      })
      .then(res => this.setState({
        notes: [...valueState.notes, { id: newId, title }],
      }));
  };


  render() {
    const valueState = this.state;
    const notes = valueState.notes
      ? valueState.notes.map(note => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          deleteNote={this.deleteNote}
        />
      )) : <div>Loading notes</div>;
    return (
      <div className="container">
        {notes}
        <AddNote addNote={this.addNote} />
      </div>
    );
  }
}
