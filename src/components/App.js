import React, { useState } from 'react';
import ChildComponent from './Button';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a react app', completed: false },
    { id: 3, text: 'Deploy react app', completed: false }
  ]);

  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todos</h2>
      <ChildComponent todos={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default App;
