import React, { Component } from 'react';

class TimeNow extends Component {
    constructor(){
        super()
        this.state = {
            time : this.generateTime()
        }
    }

    generateTime(){
        let time = new Date();
        return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
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
        return <h2>{this.state.time}</h2>
    }
}

 export default TimeNow