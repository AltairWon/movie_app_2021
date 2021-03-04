import React from 'react';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2019/06/samgyeopsal-20.jpg?fit=1000%2C1495&ssl=1"
  }
] //object list

/*function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
    
  <div>
    {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)}
  </div>
*/
function Food({name, picture}) { 
  //react magic
  //props object 내부에는 fav가 있다. 내부에서 얻는 방법 props.fav
  //props는 argument로 간다. 

  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>; 
  //이렇게 해도 component에다가 정보를 보낼 수 있다.
  //component를 재사용가능하고 계속해서 반복해서 사용할 수 있다.
  //{fav}를 사용해서 같은 object를 사용해서 react magic을 사용하는 것이다
  //alt={name} 이거은 img 요소들은 alt prop가 있어야 하기에 사용하는 것
}

function App() {
  return (
    
  <div>
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} />)}
  </div>
  
  /*
  <h1>Hello World!!</h1>
  HTML <div class="hello">비슷하다.
  food component에 fav라는 이름의 property를 kimchi라는 value로 prop name을 줬다.
  props라는 개념을 잘 기억하자
  */

  /*
  {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
  map.function 이라는 개념. map.function을 통해서 object 리스트들을 보여지게 할 수 있다.
  map은 여기서 뭐가 돌아오든 array로 돌려주기 때문이다.
  prop에다가 유니크한 key를 입력하기 위해서 id를 추가해준다
  */

  );
}

export default App;
