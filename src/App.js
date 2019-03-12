import React, { Component } from 'react';

import './App.css';
import Clock from './code/base/Clock';
import ClockOptionsList from './code/base/Clock_options_list';

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
      <div className="App App-body">
        < ClockOptionsList
          ChangeMode={this.ChangeMode}
        />
        < Clock
          mode={this.state.mode}
        />
      </div>
    );
  }
}

export default App;
