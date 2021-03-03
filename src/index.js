import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, //component - HTML을 반환하는 함수. Appl.js에서 function. application 함수가 있으니까 이것을 반환할 것이다.
  //react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다!
  //javascript와 HTML사이의 이러한 조합을 jsx라고 부른다. react에서만 custom할 수 있는 조합
  //원래 react application은 한번에 하나의 component만 redering할 수 있다. 인식을 할 수 있다.


  document.getElementById('root') //react 는 App.js 에다가 존재를 하게 하기 위해서는 ElementByld내부에 넣으려고 한다.
  //virtual DOM(virtual document object model) = 존재하지 않는다. 소스코드에는 존재하지 않지만 react에서 만들어진다.
);