import React, { Component } from 'react';


class Orb extends Component {

    overallDifference(){
        return (this.props.endTime - this.props.startTime);
    }

    differenceFromStart(){
        return (Date.now() - this.props.startTime); 
    }

    move(){
        let move = (this.differenceFromStart() / this.overallDifference()) * 100
        document.getElementById('orb').style.top=`${move}%`
    }

    render(){
        return <div id='orb'></div>
    }
}

export default Orb

