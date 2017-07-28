import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Hello!</h1>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));