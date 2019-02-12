// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react'
import TimeNow from '../code/TimeNowFeature/TimeNow'
import {shallow, mount} from 'enzyme'

describe('clicked on clock', ()=>{
    // why is this test failing
    beforeEach(()=>{})

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
       const value = wrap.find('#time_now h2').text()
       const sec = (new Date().getSeconds() + 1)
       expect(value).toBe(`${hour}:${mins}:${sec}`)
    })
})