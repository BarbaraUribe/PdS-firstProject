import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
});