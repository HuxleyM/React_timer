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

   handleChange = ( event ) => {
    const {name, value} = event.target;

    this.setState({
        [name] : value,
        set : true
    });
   }

   setTimer = () =>{
      this.setState({
          set : true,
          hour : '',
          min: '',
      })
      console.log(this.state)
   }

   render(){
      return( 
        <div>
            { !this.state.set && 
            <form>
                <label>work until</label>
                <hr/>
                <input type='time' name='time_till' onChange = { this.handleChange } required ></input>
                <input 
                    id ='submit_form'
                    type="button" 
                    value="Submit" 
                    onClick={this.setTimer} 
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