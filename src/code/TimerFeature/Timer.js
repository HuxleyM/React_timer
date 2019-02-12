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
     this.set_time_from(timer.from)
     this.set_time_till(timer.till)
   }

   timer_set = (bool) => {
    this.setState({
      set:bool
    })
   }

   set_time_from = (from) => {
    this.setState({
      from:from
    })
   }
   set_time_till = (till) => {
    this.setState({
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