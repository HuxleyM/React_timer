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
       console.log(wrap)
       expect(
        wrap.containsMatchingElement(
          <h1>The Time Is:</h1>
        )
      ).toBeTruthy()
    })
})


