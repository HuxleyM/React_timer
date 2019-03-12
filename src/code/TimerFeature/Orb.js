import React, { Component } from 'react';


class Orb extends Component {

    constructor(props){
        super()
        this.state = {
            startTime : props.startTime,
            totalTime : props.endTime,
            totalHeight : window.innerHeight,
        }
    }

    difference(){
        return (this.state.totalTime  - this.state.startTime);
    
    }

    move(){
        let timeNow = Date.now(); 
        let differenceFromStart = timeNow - this.state.startTime   
        let overallDifference = this.difference();  

        let move = (differenceFromStart / overallDifference) * 100
        console.log(move)
        document.getElementById('orb').style.top=`${move}%`
    }

    render(){
        return <div id='orb'></div>
    }
}

export default Orb

