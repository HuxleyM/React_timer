import React from 'react';
import Clock from '../code/TimerFeature/TimeFromForm'
import {shallow, mount} from 'enzyme'
import TimeFromForm from '../code/TimerFeature/TimeFromForm';


describe('TimeFromForm', ()=>{

    const dummy_time = '11:00'

    const formattedTime = new TimeFromForm(dummy_time);

    const desiredDate = () => 1550055600449;
     


   
    /* how can i do this 
      https://codewithhugo.com/mocking-the-current-date-in-jest-tests/
      */

    it('returns a utc time from form input', ()=>{
       const endTimeStub = jest.fn(()=> desiredDate())
       formattedTime.endTime = endTimeStub
       console.log(formattedTime.endTime)
       console.log(formattedTime)
       expect(formattedTime.timeTill).toBe(desiredDate())

    })
})