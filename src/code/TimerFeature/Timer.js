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
     this.timer_set()
     this.set_time_from(timer.from)
     this.set_time_till(timer.till)
   }

   timer_set = () => {
    this.setState({
      set:true
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
              />
            }
        </div>
      )
   }
}




export default Timer