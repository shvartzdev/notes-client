import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteDetails from './components/NoteDetails';

export default (
  <Fragment>
    <Switch>
      <Route exact path="/" component={NoteList} />
      <Route path="/details/:id" component={NoteDetails} />
    </Switch>
  </Fragment>
);
