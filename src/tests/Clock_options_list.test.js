import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react'
// ask about these imports below
import ClockOptionList from '../code/base/Clock_options_list'
import App from '../App'
import {shallow, mount} from 'enzyme'


describe('clock option list', ()=>{
    it("clicking 'timer' from the menu should change the Apps state mode to 'timer' ", ()=>{
        const wrap  = mount( <App />)
        wrap.find('#timer_mode').simulate('click')
        expect(wrap.state('mode')).toEqual('timer')
    })
})