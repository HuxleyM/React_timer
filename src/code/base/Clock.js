import React from 'react';
import TimeNow from '../TimeNowFeature/TimeNow'
import Timer from '../TimerFeature/Timer'

const Clock = ({ mode }) => (
    <div>
        <h1> {(mode === 'clock')? 'The Time Is:' : 'Set Timer :'} </h1>
        { mode === 'clock' && < TimeNow />}
        { mode === 'timer' && < Timer />}
    </div>
)
    
export default Clock