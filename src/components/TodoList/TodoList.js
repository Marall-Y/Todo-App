import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import shortid from "shortid";

import Wrapper from "../../hoc/Wrapper";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import Todo from "../Todo/Todo";

import "./TodoList.css";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setsSelectedItem] = useState({});

  const toggleModalHandler = () => {
    setModal((prevState) => !prevState);
    console.log(modal);
  };

  const addItemHandler = (item) => {
    setItems((prevState) => {
      return [
        ...prevState,
        {
          id: shortid.generate(),
          ...item,
        },
      ];
    });
  };

  const deleteItemHandler = (deletedItem) => {
    const newItems = items.filter((item) => {
      return item !== deletedItem;
    });

    setItems(newItems);
  };

  const editItemHandler = (editedItem) => {
    toggleModalHandler();
    setsSelectedItem(editedItem);
  };

  return (
    <Wrapper>
      <Modal appear={modal} closeModal={toggleModalHandler}>
        <ModalContent
          addItem={addItemHandler}
          closeModal={toggleModalHandler}
        />
      </Modal>
      <div className="main-text">
        <h2 className="heading">What Should I Do Today?</h2>
        <Button variant="success" onClick={toggleModalHandler}>
          Add
        </Button>
      </div>
      <Todo items={items} remove={deleteItemHandler} edit={editItemHandler} />
    </Wrapper>
  );
};

export default TodoList;
