import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul class="nav nav-pills nav-stacked">
          <li role="presentation" class="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>
      </div>
    );
  }
}

export default App;