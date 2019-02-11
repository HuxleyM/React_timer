// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react'
import Clock from './Clock'
import {shallow, mount} from 'enzyme'


describe('clock option list', ()=>{
    it('does nothing right now', ()=>{
        
    })
})

// clicking clock 
// should change app state mode to clock
//(also need to check default mode is clock)