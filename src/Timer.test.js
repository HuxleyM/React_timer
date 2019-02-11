// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react'
// ask about these imports below
import Timer from './Timer'

import {shallow, mount} from 'enzyme'

describe('timer componet', ()=>{
   
    it('should ask for time', ()=>{

        const timer = mount(< Timer />)
        expect(timer.contains('form')).toEqual(true)
    })
})
