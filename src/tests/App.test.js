import React from 'react'
import App from '../App';
import ReactDOM from 'react-dom'
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
