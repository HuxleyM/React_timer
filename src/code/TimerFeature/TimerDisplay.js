import React, { Component } from 'react';
import TimerForm from './TimerForm';


class TimerDisplay extends Component {
     
    constructor(props){
        super()
        this.state = props.state
    }
  
    readable_time = (difference) => {
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return `${hours} : ${minutes} : ${seconds}`;
    };

    tick(){
        var _ = setInterval(() => {     
            this.find_difference(new Date().getTime(), this.state.till);
        },1000)
    }

    find_difference(start, end){
        let diff = this.state.till - this.state.from;
        this.readable_time(diff);  
    }

    render(){
        return <div>hi</div>
    }

}


export default TimerDisplay