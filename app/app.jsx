import React from 'react';
import ReactDOM from 'react-dom';

export default {
  run() {
    ReactDOM.render(
      <h1>Hello, world!</h1>,
      document.getElementById('container')
    );
  },
};