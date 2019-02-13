

import React from 'react'
// ask about these imports below
import Timer from '../code/TimerFeature/Timer'

import {shallow, mount} from 'enzyme'

describe('timer componet', ()=>{

    const timer = mount(< Timer />)
   
    it('should ask for time on start', ()=>{
        expect(timer.find('form').exists()).toBe(true)
    })

    it('should change state of timer on submit', ()=>{
        // const form = timer.find('form');
        // form.simulate('keydown', '2','2','2','2')
        // form.simulate('submit')
  
        // console.log(timer.state('set'))
        // expect(timer.state('set')).toEqual(true)
    })
})
