import React, {Component} from 'react';

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

const TimeNow = () => {
   //logic here
   const time = new Date();
   const hour = time.getHours();
   const mins = time.getMinutes();
   return (
       <div id='time_now'>
          <h2>{hour}:{mins}</h2>
       </div>
   )

}

export default Clock