import React, { Component } from 'react';

class TimeNow extends Component {
    constructor(){
        super()
        this.state = {
            time : this.generateTime()
        }
    
    }

    generateTime(){
        const time = new Date();
        const hour = time.getHours();
        const mins = time.getMinutes();
        const sec = time.getSeconds();
        return `${hour}:${mins}:${sec}`
    }

    render() {
        return (
            <div id='time_now'>
            <h2>{this.state.time}</h2>
            </div>
        )
    }
}

 export default TimeNow