import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmitHandler = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const onToggleHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
  };

  const onDeleteHandler = (id) => {
    if (window.confirm('해당 투두를 정말로 삭제하시겠습니까?')) setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <section className="create-todo">
        <h1 className="title">TO-DO LIST</h1>
        <TodoCreate onSubmitHandler={onSubmitHandler} />
      </section>
      <section className="list-wrapper">
        <h2>🔥 진행중 🔥</h2>
        <TodoList todos={todos.filter((todo) => !todo.isDone)} onToggle={onToggleHandler} onDelete={onDeleteHandler} />
      </section>
      <section>
        <h2>🎉 완료 🎉</h2>
        <TodoList todos={todos.filter((todo) => todo.isDone)} onToggle={onToggleHandler} onDelete={onDeleteHandler} />
      </section>
    </div>
  );
}

export default App;
