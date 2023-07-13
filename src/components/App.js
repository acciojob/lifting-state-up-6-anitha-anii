import React, { useState } from 'react';
import ChildComponent from './Button.js';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Create react app', completed: false },
    { id: 3, text: 'Deploy react app', completed: false },
  ]);

  const handleComplete = (todo) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: true } : t
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todos</h1>
      <ChildComponent todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;
