import './App.css';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React, {useState} from 'react';

function App() {
const [todos, setTodos] = useState([]);
const [todo, setTodo] = useState("");
const entry = todos.map((todo) => <div key={todo.id}><div>{todo.text} 
      <input type="checkbox"></input>
      <button variant="contained" color="secondary" onClick={() => removeTodo(todo.id)}>REMOVE</button>
      </div></div>);

React.useEffect(() => {
  const json = localStorage.getItem("todos");
  const loadedTodos = JSON.parse(json);
  if (loadedTodos) {
    setTodos(loadedTodos);
  }
}, []);

React.useEffect(() => {
  const json = JSON.stringify(todos);
  localStorage.setItem("todos", json);
}, [todos]);


function removeTodo(id) {
  const updatedTodos = [...todos].filter((todo) => todo.id !== id)

  setTodos(updatedTodos);
}

function toggleComplete(id) {
 const updatedTodos = [...todos].map((todo) => {
   if (todo.id !== id) {
     todo.completed = true;
   }
   return todo;
 });

 setTodos(updatedTodos);
}

function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }

    setTodos([... todos].concat(newTodo));
    setTodo("");
  }


return (
<div className="App">
  <h1>TODO LIST</h1>
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/
    >
      <button variant="contained" color="primary">ADD</button>
  </form>
  {entry}
</div>
);

}

export default App;
