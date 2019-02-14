import React from 'react'
import ReactDOM from 'react-dom'
import Timer from '../code/TimerFeature/Timer'
import {shallow, mount} from 'enzyme'

describe('timer componet', ()=>{

    const timer = mount(< Timer />)
   
    it('should ask for time on start', ()=>{
        expect(timer.find('form').exists()).toBe(true)
    })


    describe('submittinf form changes the timers state', ()=>{
        
        beforeEach(()=>{
            const form = timer.find('form');
            form.simulate('keydown', '2','2','2','2');
            timer.find('#submit_form').simulate('click');
        })
      
        it('should change state of timer on submit', async ()=>{
            expect(timer.state('set')).toEqual(true)
        })
    })
 
   
})

