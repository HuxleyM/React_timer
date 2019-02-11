import React, { Component } from 'react';

const ClockOptionsList = (props) => {
    return (
        <ul>
            <li><button onClick = { () => props.ChangeMode('clock')} id='clock_mode'>Clock</button></li>
            <li><button onClick = { () => props.ChangeMode('timer')} id='timer_mode'>Timer</button></li>
        </ul>
    )
}

export default ClockOptionsList