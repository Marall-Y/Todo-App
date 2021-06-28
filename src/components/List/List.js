import React from "react";
import { Button } from "react-bootstrap";

import "./List.css";

const List = (props) => {
  return (
    <div className="list">
      <h2 className="heading">What Should I Do Today?</h2>
      <Button variant="success" onClick={props.showModal}>
        Add
      </Button>
    </div>
  );
};

export default List;
