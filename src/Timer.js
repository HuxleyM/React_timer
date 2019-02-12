import React, { Component } from 'react';

class Timer extends Component{
   constructor(){
       super()
       this.state = {
           set : false,
           hour : '00',
           min: '00',
       }
   }

   handleForm = ( event ) => {
     event.preventDefault();
     var timeTill = document.getElementById('time_till').value;


   }
   
   setTimer = () =>{
      this.setState({
          set : true,
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
               <h1>{this.state.hour}:{this.state.min}</h1>
            </div>

        </div>
      )
   }
}

export default Timer