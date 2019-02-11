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

    componentDidMount(){
        this.timer = setInterval( ()=> this.tick(), 1000 );   
    }

    componentWillUnmount(){
       clearInterval(this.timer)
    }

    tick(){
        this.setState({ time : this.generateTime() })
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