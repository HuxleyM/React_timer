import React from 'react';
import Clock from '../code/TimerFeature/TimeFromForm'
import {shallow, mount} from 'enzyme'
import renderer from 'react-test-renderer';
import TimeFromForm from '../code/TimerFeature/TimeFromForm';
import Orb from '../code/TimerFeature/Orb.js'


describe('orb component', ()=>{
    
    global.innerHeight = 640;
    const startTime = new Date('December 17, 2019 13:24:00').getTime();
    const endTime = new Date('December 17, 2019 14:24:00').getTime();
    const orbDummy = mount(<Orb endTime={endTime} change={startTime} />)



    it('constructs with a totaltime and totalHeight', ()=>{
        expect(orbDummy.state('totalTime')).toEqual(endTime)
        expect(orbDummy.state('totalHeight')).toEqual(640)
    })

    it('a call to move should move the orb', ()=>{
        var theOrb = mount(<Orb endTime={endTime} change={startTime} />)
        renderer.create(theOrb).toJSON();
        const midTime = new Date('December 17, 2019 13:54:00').getTime();
        theOrb.instance().move(midTime)
        const updatedTree = renderer.create(theOrb).toJSON();
        expect(updatedTree).toMatchSnapshot();
    })

    // ok so this error is happening because the div doesnt exist at this point in time
})

