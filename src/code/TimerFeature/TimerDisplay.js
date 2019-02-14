import React, { Component } from 'react';
import timerNotification from './Notification'
import Orb from './Orb'

class TimerDisplay extends Component {
     
    constructor(props){
        super()
        this.state = props.state
        this.change = props.change
        this.complete = false
        this.orbSet = false
 
    }
  
    readable_time = () => {
        if(this.state.currentTime){
            let difference = this.state.currentTime
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);
            this.check_complete(hours,minutes,seconds)
            return `${hours} : ${minutes} : ${seconds}`;
        } else {
            return ` one moment `
        }
    };

    check_complete(hours,minutes,seconds){
        if(hours === 0  && minutes === 0 && seconds === 0){
            timerNotification('Time is up!')
            this.complete = true
        
        }
    }

    tick(){        
        let currentTime = this.state.till -  Date.now();
        // if(!this.orbSet){
        //     this.orbSet = new Orb(currentTime)
        // }
        // else{
        //     this.orbSet.move(currentTime)
        // }
        this.setState({ currentTime: currentTime })
    }
   
  
    componentDidMount(){
        this.timer = setInterval( ()=> this.tick(), 1000 );   
    }

    componentWillUnmount(){ 
       clearInterval(this.timer)
       if(this.complete){
        this.change(false)
       }
    }


    render(){
        return (<div>
                <div id='orb'></div>
                <div>{this.readable_time()}</div>
            </div>)
    }

}

export default TimerDisplay