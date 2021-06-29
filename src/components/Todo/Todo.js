import React from "react";

import "./Todo.css";

const Todo = ({ items, remove, edit }) => {
  return (
    <section className="item-list">
      <ul variant="flush">
        {items.map((item) => (
          <li key={item.id}>
            <p className="title">Title: {item.title}</p>
            <p className="description">Description: {item.description}</p>
            <i className="fa fa-check-circle" onClick={() => remove(item)}></i>
            <i className="fa fa-edit" onClick={() => edit(item)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
