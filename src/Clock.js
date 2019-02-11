import React, {Component} from 'react';

class Clock extends Component{

    render(){
        const { mode } = this.props;
        console.log(mode)
        return (
            <h1> {(mode == 'clock')? 'The Time Is:' : 'Set Timer :'} </h1>
        )
    }

}

export default Clock