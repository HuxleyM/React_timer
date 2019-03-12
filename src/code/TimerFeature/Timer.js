import React, { Component } from 'react';
import TimerForm from './TimerForm';
import TimerDisplay from './TimerDisplay'
import TimeFromForm from './TimeFromForm'


class Timer extends Component{
   constructor(){
       super()
       this.state = {
           set : false,
           from : '',
           till : ''
       }
   }

   handleForm = ( event ) => {
     event.preventDefault();
     let timeTill = document.getElementById('time_till').value;
     let timer = new TimeFromForm(timeTill)
     this.timerSet(true)
     this.setTimerTimes(timer.from, timer.till)
   }

   timerSet = (bool) => {
    this.setState({
      set:bool
    })
   }

   setTimerTimes = (from, till) => {
    this.setState({
      from:from,
      till:till
    })
   }
   
   render(){
      return( 
        <div>
            { (!this.state.set) ?
              < TimerForm 
                handleForm={this.handleForm}
              /> :
              // is it better to have this including the orb or bring the orb out??
              < TimerDisplay
                state={this.state}
                change={this.timerSet}
              />
            }
        </div>
      )
   }
}

export default Timer