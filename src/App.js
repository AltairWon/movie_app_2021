import React from 'react';

function Food({name, picture}) { 
  //react magic
  //props object 내부에는 fav가 있다. 내부에서 얻는 방법 props.fav
  //props는 argument로 간다. 

  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>; 
  //이렇게 해도 component에다가 정보를 보낼 수 있다.
  //component를 재사용가능하고 계속해서 반복해서 사용할 수 있다.
  //{fav}를 사용해서 같은 object를 사용해서 react magic을 사용하는 것이다
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2019/06/samgyeopsal-20.jpg?fit=1000%2C1495&ssl=1"
  }
] //object list

function App() {
  return (
    
  <div>
    {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
  </div>
  
  /*
  <h1>Hello World!!</h1>
  HTML <div class="hello">비슷하다.
  food component에 fav라는 이름의 property를 kimchi라는 value로 prop name을 줬다.
  props라는 개념을 잘 기억하자
  */

  /*
  map.function 이라는 개념. map.function을 통해서 object 리스트들을 보여지게 할 수 있다.
  */

  );
}

export default App;
