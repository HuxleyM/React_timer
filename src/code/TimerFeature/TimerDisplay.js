import React, { Component } from 'react';
import timerNotification from './Notification'
import Orb from './Orb'



class TimerDisplay extends Component {
     
    constructor(props){
        super()
        this.state = props.state
        this.change = props.change
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
            this.setState({complete : true})
        }
    }

    tick(){ 
        this.setState({output : this.readable_time()})       
        let currentTime = this.state.till -  Date.now();
        this.setState({ currentTime: currentTime })

        if(this.state.complete){
            this.change(false)
        }

        this._orb.move()
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
                    ref={(orb) => { this._orb = orb}}
                />
            </div>
        )
    }

}

export default TimerDisplay