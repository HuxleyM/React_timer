
import React from 'react'
// ask about these imports below
import App from '../App'
import {shallow, mount} from 'enzyme'


describe('clock option list', ()=>{
    it("clicking 'timer' from the menu should change the Apps state mode to 'timer' ", ()=>{
        const wrap  = mount( <App />)
        wrap.find('#timer_mode').simulate('click')
        expect(wrap.state('mode')).toEqual('timer')
    })
})