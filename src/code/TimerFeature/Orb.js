import React, { Component } from 'react';


class Orb extends Component {

    constructor(props){
        super()
        console.log(props)
        this.totalTime = props.state;
        this.totalHeight = window.innerHeight;
        // this.move(props.change)
    }

    move(timeNow){
        let move = (timeNow / this.totalTime) * 100
        document.getElementById('orb').style.top=`${100-move}%`
    }

    render(){
        return <div id='orb'></div>
    }
}

export default Orb