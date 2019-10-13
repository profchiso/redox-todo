import React from 'react';

import './App.css';
import AddTodo from "../src/components/addTodo/AddTodo";
import TodoItems from "../src/components/todos/TodoItems"

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Prochiso TodoApp</h1>
        <AddTodo />
        <TodoItems />
      </div>
    );
  }
}

export default App;
