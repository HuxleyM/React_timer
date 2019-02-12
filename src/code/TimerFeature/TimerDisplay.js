import React, { Component } from 'react';
import TimerForm from './TimerForm';


class TimerDisplay extends Component {
     
    constructor(props){
        super()
        this.state = props.state
  
    }
  
    readable_time = () => {
        if(this.state.currentTime){
            let difference = this.state.currentTime
            console.log(difference)
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);
            return `${hours} : ${minutes} : ${seconds}`;
        } else {
            return ` one moment `
        }
    };

    tick(){        
        let start =  new Date().getTime();
        let end =  this.state.till;
        let currentTime = end - start;
        this.setState({ currentTime: currentTime })
    }

    componentDidMount(){
        this.timer = setInterval( ()=> this.tick(), 1000 );   
    }

    componentWillUnmount(){
       clearInterval(this.timer)
    }

    render(){
        return <div>{this.readable_time()}</div>
    }

}


export default TimerDisplay