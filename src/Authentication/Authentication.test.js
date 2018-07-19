import React from 'react';
import ReactDOM from 'react-dom';
import Authentication from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Authentication />, Authentication);
  ReactDOM.unmountComponentAtNode(Authentication);
});
