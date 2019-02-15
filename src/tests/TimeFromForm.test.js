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
      return date
    }

  it('returns a utc time from form input', ()=>{
      const dateStub = jest.fn(() => desiredDate());
      formTime.start = dateStub;
      expect(formTime.timeTill).toBe(desiredDate().getTime())
  })

  it('end time returns a utc from a string', ()=>{
    const timeTill = formTime.timeTill.toString();
    expect(timeTill.match(/\d{13}/g)).not.toBeNull()
  })  
})