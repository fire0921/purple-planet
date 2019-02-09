import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/login.js';
import TopBar from './components/topBar.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
