import React, { Component } from 'react';

import './App.css';
import Clock from './Clock';
import ClockOptionsList from './Clock_options_list';

class App extends Component {
 
  state = {
    mode : 'clock'
  }

  ChangeMode = (mode) =>{
    this.setState({
      mode: mode
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        < ClockOptionsList
          ChangeMode = {this.ChangeMode}
        />
        < Clock
          mode = {this.state.mode}
        />
        </header>
      </div>
    );
  }
}

export default App;
