import React from 'react'
import ReactDOM from 'react-dom'
import Timer from '../code/TimerFeature/Timer'
import {shallow, mount} from 'enzyme'

describe('timer componet', ()=>{

    const timer = mount(< Timer />)
   
    it('should ask for time on start', ()=>{
        expect(timer.find('form').exists()).toBe(true)
    })
   
})

