// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

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
        const form = timer.find('form');
        form.simulate('keydown', '2','2','2','2')
        timer.find('#submit_form').simulate('click')
        expect(timer.state('set')).toEqual(true)
    })
})
