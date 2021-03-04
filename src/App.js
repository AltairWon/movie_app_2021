import React from 'react';
import PropTypes from "prop-types"
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

// TODO: props
/*const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
      rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2019/06/samgyeopsal-20.jpg?fit=1000%2C1495&ssl=1",
      rating: 4.3
  }
] //object list


function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
    
  <div>
    {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)}
  </div>

function Food({name, picture, rating}) { 
  //react magic
  //props object 내부에는 fav가 있다. 내부에서 얻는 방법 props.fav
  //props는 argument로 간다. 

  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>; 
  //이렇게 해도 component에다가 정보를 보낼 수 있다.
  //component를 재사용가능하고 계속해서 반복해서 사용할 수 있다.
  //{fav}를 사용해서 같은 object를 사용해서 react magic을 사용하는 것이다
  //alt={name} 이거은 img 요소들은 alt prop가 있어야 하기에 사용하는 것
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
//propTypes는 console에서 어떠한 오류가 범해져 있는지를 파악하는 방법이다.
//이거는 무조건 propTypes로 설정을 해줘야 한다.



function App() {
  return (
    
  <div>
    {foodILike.map(dish => (
    <Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating} 
    />
    ))}
  </div>
  );
}

  
<h1>Hello World!!</h1>
HTML <div class="hello">비슷하다.
food component에 fav라는 이름의 property를 kimchi라는 value로 prop name을 줬다.
props라는 개념을 잘 기억하자



{foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
map.function 이라는 개념. map.function을 통해서 object 리스트들을 보여지게 할 수 있다.
map은 여기서 뭐가 돌아오든 array로 돌려주기 때문이다.
prop에다가 유니크한 key를 입력하기 위해서 id를 추가해준다
*/

// TODO: state
/*class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    //this.setState({count: this.state.count + 1});
    this.setState(current => ({count: current.count + 1}))};
  minus = () => {
    //this.setState({count: this.state.count -1});
    this.setState(current => ({count: current.count - 1}))};
  //setState를 호출하면 react는 state를 refresh하고 render function을 호출한다.
  //setState를 호출할 때마다 react는 render할 것이다.

  componentDidMount(){
    console.log("component rendered");
  }
  //componentDidMount = 이 component는 처음 render됐다라고 기본적으로 알려준다.

  componentDidUpdate(){
    console.log("I just updated");
  }
  //componont가 업데이트를 했다는 증거. 무언가를 클릭하거나 사용을 할때 업데이트가 된다는 것을 알려준다.

  componentWillUnmount(){
    console.log("Good bye hello World");
  }
  //component가 떠날때, 페이지가 바뀌거나 그럴때를 알려준다.


  render() {
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}
//class는 return이 아닌 render method를 가지고 잇음
//react는 자동적으로 너의 class component의 render method를 자동으로 실행한다.
//class component = state => object
//App에서 data를 어떻게 바꾸어주나? state 가 class component에 있다. class이기 때문에 this.state.count로 정해준다
//mount는 생셔나는 것, 태어나는 것, 살아 있는것
*/

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: { data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //axios = fetch위에 있는 작은 layer
    //await는 기다린다 axios를 기다린다고 생각하면 된다.
    this.setState({movies, isLoading: false});
  };
  componentDidMount(){
    this.getMovies();
  }
  //data를 fetch했다

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container"> 
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
            </div>
          ) : (
            <div class="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
            </div>
          )}
        </section>
    );
  }
}


export default App;
