import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //react 는 App.js 에다가 존재를 하게 하기 위해서는 ElementByld내부에 넣으려고 한다.
  //virtual DOM(virtual document object model) = 존재하지 않는다. 소스코드에는 존재하지 않지만 react에서 만들어진다.
);