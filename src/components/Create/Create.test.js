import React from 'react';
import ReactDOM from 'react-dom';
import Create from './Create';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Create />, div);
  ReactDOM.unmountComponentAtNode(div);
});