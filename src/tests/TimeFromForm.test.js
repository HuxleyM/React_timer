import React from 'react';
import Clock from '../code/TimerFeature/TimeFromForm'
import {shallow, mount} from 'enzyme'

import TimeFromForm from '../code/TimerFeature/TimeFromForm';


describe('TimeFromForm', ()=>{

    const dummy_time = '11:00'

    const formattedTime = new TimeFromForm(dummy_time);

    const desiredDate = () => {
      let date = new Date();
      date.setHours(11)
      date.setMinutes(0)
      date.setSeconds(0)
      date.setMilliseconds(0)
      return date.getTime()

    }
     


   
    /* how can i do this 
      https://codewithhugo.com/mocking-the-current-date-in-jest-tests/
      */

    it('returns a utc time from form input', ()=>{
       const convertToUTCTimeStub = jest.fn(()=> desiredDate())
       formattedTime.convertToUTCTime = convertToUTCTimeStub
       console.log(formattedTime.convertToUTCTime());
       expect(formattedTime.timeTill).toBe(desiredDate())

    })

    it('end time returns a utc from a string', ()=>{
      expect(formattedTime.convertToUTCTime(dummy_time)).toBe(desiredDate())
      //console.log(formattedTime.timeTill)
    })
})