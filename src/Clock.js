import React from 'react';
import TimeNow from './TimeNow'
import Timer from './Timer'

const Clock = ({ mode }) => (
    <div>
        <h1> {(mode === 'clock')? 'The Time Is:' : 'Set Timer :'} </h1>
        { mode === 'clock' && < TimeNow />}
        { mode === 'timer' && < Timer />}
    </div>
)
    
export default Clock