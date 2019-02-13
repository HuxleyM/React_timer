

import React from 'react'
import TimeNow from '../code/TimeNowFeature/TimeNow'
import {shallow, mount} from 'enzyme'

describe('clicked on clock', ()=>{
    // why is this test failing
    beforeEach(()=>{
        jest.useFakeTimers();
    })

    const time = new Date();
    const hour = time.getHours();
    const mins = time.getMinutes();
    //lag in code test added a second...
    const sec = (time.getSeconds());

    const mode = 'clock'
    const wrap = mount( <TimeNow/>)
    
    it('will generate time_now simple component', ()=>{
        const value = wrap.find('#time_now h2').text()
        //assertation
        expect(value).toBe(`${hour}:${mins}:${sec}`)
    })

    it('should tick', ()=>{
       //const value = wrap.find('#time_now h2').text()
       expect(setInterval).toHaveBeenCalledTimes(1);
       expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
       const sec = (new Date().getSeconds() + 1)
       expect(value).toBe(`${hour}:${mins}:${sec}`)
    })
})