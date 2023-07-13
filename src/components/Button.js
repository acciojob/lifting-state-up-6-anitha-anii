import React from 'react';

const ChildComponent = ({ todos, onComplete }) => {
  const handleComplete = (todo) => {
    onComplete(todo);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChildComponent;
