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
     var timeTill = document.getElementById('time_till').value;
     var timer = new TimeFromForm(timeTill)
     this.timer_set(true)
     this.set_timer_times(timer.from, timer.till)
   }

   timer_set = (bool) => {
    this.setState({
      set:bool
    })
   }

   set_timer_times = (from, till) => {
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
                change={this.timer_set}
              />
    
            }
        </div>
      )
   }
}

export default Timer