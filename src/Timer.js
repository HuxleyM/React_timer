import React, { Component } from 'react';

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

   handleForm = ( event ) => {
     event.preventDefault();
     var timeTill = document.getElementById('time_till').value;
     this.set_start_time();
   }
   
   set_start_time = () => {
     var hours = new Date().getHours()
     var min = new Date().getMinutes()
     
     this.setState({
         set : true,
         start_time : {
            hour : hours,
            min: min,
         }
     })
   }
   setTimer = () =>{
      this.setState({
          hour : '',
          min: '',
      })
   }

   render(){
      return( 
        <div>
            { !this.state.set && 
            <form  onSubmit={ this.handleForm } >
                <label>work until</label>
                <hr/>
                <input type='time' id ='time_till' name='time_till' required ></input>
                <input 
                    id ='submit_form'
                    type="submit" 
                    value="Submit" 
                />
            </form>
            }
            <div id ='timer'>
               <h1>:</h1>
            </div>

        </div>
      )
   }
}

export default Timer