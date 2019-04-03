import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import AddNote from './AddNote';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: null,
      editing: false,
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onCheck = (e, id) => {
    const stateValue = this.state;
    if (e.target.value === undefined && stateValue.title === '') alert('empty field');
    else {
      const index = stateValue.notes.findIndex(note => note.id === id);
      const note = Object.assign({}, stateValue.notes[index]);
      note.title = stateValue.title;
      const newNotes = Object.assign([], stateValue.notes);
      newNotes[index] = note;

      this.setState({
        notes: newNotes,
      });
    }
  };

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
    const editStatus = valueState.editing;
    const notes = valueState.notes
      ? valueState.notes.map(note => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          editStatus={editStatus}
          onChange={this.onChange}
          onCheck={this.onCheck}
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
