import React from 'react';
import Clock from '../code/TimerFeature/TimeFromForm'
import {shallow, mount} from 'enzyme'

import TimeFromForm from '../code/TimerFeature/TimeFromForm';

    /* how can i do this 
      https://codewithhugo.com/mocking-the-current-date-in-jest-tests/
      */



describe('TimeFromForm', ()=>{
  
    const dummy_time = '11:00'
    var formTime = new TimeFromForm(dummy_time);

    beforeEach(()=>{
      formTime = new TimeFromForm(dummy_time)
    })

    const desiredDate = () => {
      let date = new Date();
      date.setHours(11)
      date.setMinutes(0)
      date.setSeconds(0)
      date.setMilliseconds(0)
      return date.getTime()
    }

  it('returns a utc time from form input', ()=>{
      const convertToUTCTimeStub = jest.fn(()=> desiredDate())
      formTime.convertToUTCTime = convertToUTCTimeStub
      expect(formTime.timeTill).toBe(desiredDate())
  })

  it('end time returns a utc from a string', ()=>{
    const timeTill = formTime.timeTill.toString();
    expect(timeTill.match(/\d{13}/g)).not.toBeNull()
  })

  it('should call convertToUTCTime on construction', ()=>{
    expect(formTime.till).toEqual(true)
  })    
})