import './App.css';
import { TodoApp } from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      {/*<Counter></Counter>*/}
      <TodoApp></TodoApp>
    </div>
  );
}

//function PlawingWithProps(properties){
//  console.log(properties)
//  return(
//    <div>
//      Props
//  </div>
//  )
//}

//function PlawingWithProps({property1, property2}){
//  console.log(property1)
//  console.log(property2)
//    return(
//   <div>
//      Props
//  </div>
//    )
//}
export default App;
