import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import shortid from "shortid";

import TodoList from "../../components/TodoList/TodoList";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";

import { TodoItemsContext } from "../../context/todoItemsContext";
import { todoContext } from "../../context/todoContext";
import { modalContext } from "../../context/modalContext";

const Home = () => {
  const [todoItems, setTodoItems] = useContext(TodoItemsContext);
  const [modalState, setModalState] = useContext(modalContext);
  const [todo, setTodo] = useContext(todoContext);

  // ********** Hooks ******/
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  useEffect(() => {
    modalState === false && setTodo({ title: "", description: "" });
  }, [modalState]);

  // ********** Functions ******* //

  // Modal Toggle
  const toggleModalHandler = () => {
    setModalState((prevState) => !prevState);
  };

  return (
    <div>
      <Modal>
        <ModalContent />
      </Modal>

      <div className="main-text">
        <h2 className="heading">What Should I Do Today?</h2>
        <Button variant="success" onClick={toggleModalHandler}>
          Add
        </Button>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
