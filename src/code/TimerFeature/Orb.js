import React, { Component } from 'react';


class Orb extends Component {

    constructor(start){
        this.totalTime = start;
        this.totalHeight = window.innerHeight;
    }

    move(timeNow){
        let move = (timeNow / this.totalTime) * 100
        document.getElementById('orb').style.top=`${100-move}%`
    }
}

export default Orb