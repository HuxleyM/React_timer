import React, { Component } from 'react';
import timerNotification from './Notification'
import Orb from './Orb'



class TimerDisplay extends Component {
     
    constructor(props){
        super()
        // should i break up the state here?? its a little tricky to keep track of?
        this.state = props.state
        this.change = props.change
    }
  
    readableTime = () => {
        /// this feels a little bit much here
        if(this.state.currentTime){
            let difference = this.state.currentTime
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);
            this.checkTimerComplete(hours,minutes,seconds)
            return `${hours} : ${minutes} : ${seconds}`;
        } else {
            return ` one moment `
        }
    };

    checkTimerComplete(hours,minutes,seconds){
        if(hours === 0  && minutes === 0 && seconds === 0){
            timerNotification('Time is up!')
            this.setState({timerComplete : true})
        }
    }
    
    setCurrentTime(){
        let currentTime = (this.state.till -  Date.now());
        this.setState({ currentTime: currentTime })
    }

    updateOutput(){
        this.setState({output : this.readableTime()}) 
    }

    tick(){ 
        this.updateOutput();
        this.setCurrentTime();

        if(this.state.timerComplete){
            this.change(false);
        }else{
            this._orb.move();
        }
    }

  
    componentDidMount(){
        this.timer = setInterval( ()=> this.tick(), 1000 );   
    }

    componentWillUnmount(){
   
       clearInterval(this.timer)
    
    }


    render(){
     
        return(
             <div>
                <div>{this.state.output}</div>
               
                < Orb 
                    startTime = {this.state.from}
                    endTime={this.state.till}
                    // i call the orb move from inside this component it seems a bit much 
                    ref={(orb) => { this._orb = orb}}
                />
            </div>
        )
    }

}

export default TimerDisplay