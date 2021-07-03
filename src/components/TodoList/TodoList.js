import React from "react";
import "./TodoList.css";

const TodoList = ({ todoItems, deleteTodo, editTodo }) => {
  return (
    <section className="item-list">
      <ul variant="flush">
        {todoItems.map((todo) => {
          const { id, title, description } = todo;
          return (
            <li key={title}>
              <p className="title">Title: {title}</p>
              <p className="description">Description: {description}</p>
              <i
                className="fa fa-check-circle"
                onClick={() => deleteTodo(id)}
              ></i>
              <i className="fa fa-edit" onClick={() => editTodo(id)}></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
