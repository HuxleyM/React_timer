import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {
 
  state = {
    mode : 'clock'
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        < Clock
          mode = {this.state.mode}
        />
        </header>
      </div>
    );
  }
}

export default App;
