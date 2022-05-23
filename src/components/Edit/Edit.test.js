import React from 'react';
import ReactDOM from 'react-dom';
import Edit from './Edit';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Edit />, div);
  ReactDOM.unmountComponentAtNode(div);
});