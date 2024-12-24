import { useState } from "react"
import './App.css';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';
const App = () => {
  const [todos, setTodos] = useState([]);
  const createTodo = (title) => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false };
    const updateTodo = [...todos, newTodo];
    setTodos(updateTodo);
  }
  const removeTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  }
  const changeTodo = (id, title, completed = false) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, completed }
      }
      return todo;
    });
    setTodos(updateTodo);
  }
  return (
    <main className="main">
      <div className="Todo-form">
        <h1>React Todo <span>Streamline your Day,the React way!</span></h1>
        <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
        <TodoCreate createTodo={createTodo} />
      </div>
    </main>
  )
}

export default App;