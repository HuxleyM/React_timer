// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react'
import Clock from './Clock'
import {shallow, mount} from 'enzyme'

describe('clock component', ()=>{

    it('should render current_time if mode is clock',()=>{
        const mode = 'clock';
        const wrap = shallow(<Clock mode={ mode }/>)
        expect(
            wrap.containsMatchingElement(
            <h1>The Time Is:</h1>
            )
        ).toBeTruthy()
    })

    it('should render timeer if mode is timer',()=>{
        const mode = 'timer';
        const wrap = shallow(<Clock mode={ mode }/>)
        expect(
            wrap.containsMatchingElement(
            <h1>Set Timer :</h1>
            )
        ).toBeTruthy()
   
    })

    describe('clicked on clock', ()=>{
        // why is this test failing
        it('will generate time_now simple component', ()=>{
        //setup
        const time = new Date();
        const hour = time.getHours();
        const mins = time.getMinutes();
        const mode = 'clock'
        
        //build
        const wrap = mount( <Clock mode = {mode} />)
        const value = wrap.find('#time_now h2').text()
        //assertation
        expect(value).toBe(`${hour}:${mins}`)
        })
    })


})

//need to check renders time now component

