import React, { Component } from 'react';

class Timer extends Component{
   constructor(){
       super()
       this.state = {
           set : false,
           hour : '',
           min: '',
       }
   }

   render(){
      return( 
        <div>
            { !this.state.set && <form>
                <label>Time work till</label>
                <input type='time' required></input>
            </form>
            }
        </div>
      )
   }
}

export default Timer