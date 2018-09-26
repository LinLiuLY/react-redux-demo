import React from 'react';

export const Todos = ({ todos, deleteTodo }) => {
  if (todos.length <= 0)
    return <p className="center">You have no todos left.</p>;

  const todoList = todos.map(todo => {
    return (
      <div className="collection-item" key={todo.id}>
        <span>{todo.content}</span>
        <button onClick={() => deleteTodo(todo.id)}>delete todo</button>
      </div>
    );
  });

  return <div className="todos collection">{todoList}</div>;
};
