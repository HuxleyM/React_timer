import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Clock from './Clock'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('starts with an initial mode of clock', () => {
  const app  = shallow( <App />)
  expect(app.state('mode')).toEqual('clock')
});
