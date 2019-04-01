import React, { Component, Fragment } from 'react';
import routes from './Routes';

class App extends Component {
  render() {
    return (
      <Fragment>
        {routes}
      </Fragment>
    );
  }
}

export default App;
