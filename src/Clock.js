import React, {Component} from 'react';
import TimeNow from './TimeNow'
import Timer from './Timer'

class Clock extends Component{

    render(){
        const { mode } = this.props;

        return (
            <div>
                <h1> {(mode == 'clock')? 'The Time Is:' : 'Set Timer :'} </h1>
                { mode == 'clock' && < TimeNow />}
                { mode == 'timer' && < Timer />}
            </div>
        )
    }

}



export default Clock