import React from 'react'
import TimeNow from '../code/TimeNowFeature/TimeNow'
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme'

describe('clicked on clock', ()=>{
 
    const wrap = mount( <TimeNow/>) 
    const currentDate = new Date()  
    
    it('will generate correct time_now  ', ()=>{
        //setup
        const wrap = shallow( <TimeNow/>)  
        expect(wrap.instance().generateTime()).toBe(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
    })

    it('should disply this time on the screen', ()=>{
         const value = wrap.find('#time_now h2').text()
         expect(value).toBe(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
    })

    it('should tick', ()=>{
        // is need a time wizard
       jest.useFakeTimers(); 
       const wrap = mount( <TimeNow/>) 
       expect(setInterval).toHaveBeenCalledTimes(1);
    })

    it('display should change per second', ()=>{
        // need to do more snap shot testing
        // const tree = renderer.create(<TimeNow />).toJSON();
        // expect(tree).toMatchSnapshot();
        // var secondV=  setTimeout(function() {const secondV = renderer.create(<TimeNow/>).toJSON(); return secondV; }, 1000)
        // expect(secondV).toMatchSnapshot();

    })
})