
import React from 'react'
// ask about these imports below
import App from '../App'
import {shallow, mount} from 'enzyme'


describe('clock option list', ()=>{
    const wrap  = mount( <App />)

    it("clicking 'timer' from the menu should change the Apps state mode to 'timer' ", ()=>{
        wrap.find('#timer_mode').simulate('click')
        expect(wrap.state('mode')).toEqual('timer')
    })

    it("clicking on timer, then clicking back to clock should change the apps state mode to clock", ()=>{
        wrap.find('#timer_mode').simulate('click')
        wrap.find('#clock_mode').simulate('click')
        expect(wrap.state('mode')).toEqual('clock')
    })
})