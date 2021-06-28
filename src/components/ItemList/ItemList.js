import React from "react";

import "./ItemList.css";

const ItemList = (props) => {
  return (
    <section className="item-list">
      <ul variant="flush">
        {props.items.map((item) => (
          <li key={item.id}>
            <p className="title">Title: {item.title}</p>
            <p className="description">Description: {item.description}</p>
            <i
              className="fa fa-check-circle"
              onClick={props.remove.bind(this, item)}
            ></i>
            <i className="fa fa-edit"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemList;
