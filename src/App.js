import React from 'react';

function Food({fav}) { 
  //react magic
  //props object 내부에는 fav가 있다. 내부에서 얻는 방법 props.fav
  //props는 argument로 간다. 

  return <h1>I like {fav}</h1>; 
  //이렇게 해도 component에다가 정보를 보낼 수 있다.
  //component를 재사용가능하고 계속해서 반복해서 사용할 수 있다.
  //{fav}를 사용해서 같은 object를 사용해서 react magic을 사용하는 것이다
}

function App() {
  return (
  <div>
    <h1>Hello!!!!!</h1>
    <Food fav="Kimchi" />
    <Food fav="ramen" /> 
    <Food fav="samgiopsal" /> 
    <Food fav="Chukumi" /> 
  </div> //HTML <div class="hello">비슷하다.
  //food component에 fav라는 이름의 property를 kimchi라는 value로 prop name을 줬다.
  //props라는 개념을 잘 기억하자
  );
}

export default App;
