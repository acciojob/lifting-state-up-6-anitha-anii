import React from 'react';

const Button = ({ todos, onComplete }) => {
  const handleComplete = (id) => {
    onComplete(id);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Button;
