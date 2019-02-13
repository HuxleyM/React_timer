import React from 'react';
import Clock from '../code/TimerFeature/TimeFromForm'
import {shallow, mount} from 'enzyme'
import TimeFromForm from '../code/TimerFeature/TimeFromForm';


describe('TimeFromForm', ()=>{

    const dummy_time = '11:00'
    const formattedTime = new TimeFromForm(dummy_time);
    var date = new Date();
    date = date.setHours(11);
   


    it('returns a utc time from form input', ()=>{
       expect(formattedTime.till).toBe(date)

    })
})