import React, { Component } from 'react';
import TimerForm from './TimerForm';

class Timer extends Component{
   constructor(){
       super()
       this.state = {
           set : false,
           start_time : {
            hour : '00',
            min: '00',
           },
           end_time : {
            hour : '00',
            min: '00',
           }
       }
   }

   componentDidUpdate(){
       const start_time = this.state.start_time;
       const end_time = this.state.end_time;
       const difference = `${end_time.hour - start_time.hour}:${this.findMins(start_time, end_time)}`
   }

   findMins = (start_time, end_time) => {
        //var time  = Math.max(end_time.min,start_time.min) - Math.min(end_time.min,start_time.min)
        
   }

   handleForm = ( event ) => {
     event.preventDefault();
     var timeTill = document.getElementById('time_till').value;
     this.set_start_time();
     this.set_end_time(timeTill);
   }
   
   set_start_time = () => {
     this.setState({
         set : true,
         start_time : {
            hour : new Date().getHours(),
            min: new Date().getMinutes(),
         }
     })
   }

   set_end_time = (value) => {
    this.setState({
        end_time : {
           hour : parseInt(value.split('').splice(0,2).join('')),
           min: parseInt(value.split('').splice(3,2).join('')),
        }
    })
   }
  
   

   render(){
      return( 
        <div>
            { !this.state.set && 
              < TimerForm 
                handleForm={this.handleForm}
              />
            }
            <div id ='timer'>
               <h1>:</h1>
            </div>

        </div>
      )
   }
}




export default Timer