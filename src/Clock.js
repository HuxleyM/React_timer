import React, {Component} from 'react';
import TimeNow from './TimeNow'

class Clock extends Component{

    render(){
        const { mode } = this.props;

        return (
            <div>
                <h1> {(mode == 'clock')? 'The Time Is:' : 'Set Timer :'} </h1>
                { mode == 'clock' && < TimeNow />}
            </div>
        )
    }

}



export default Clock