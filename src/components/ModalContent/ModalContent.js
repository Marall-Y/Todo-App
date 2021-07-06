import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";

import { TodoItemsContext } from "../../context/todoItemsContext";
import { todoContext } from "../../context/todoContext";
import { modalContext } from "../../context/modalContext";

import "./ModalContent.css";

const ModalContent = () => {
  const [todo, setTodo] = useContext(todoContext);
  const [todoItems, setTodoItems] = useContext(TodoItemsContext);
  const [modalState, setModalState] = useContext(modalContext);

  // Modal Toggle
  const toggleModalHandler = () => {
    setModalState((prevState) => !prevState);
  };

  // On Change
  const changeFormHandler = ({ target }) => {
    setTodo({
      ...todo,
      [target.name]: target.value,
    });
  };

  // Submit todo
  const submitTodoHandler = (event) => {
    event.preventDefault();
    if (todo && todo.id) {
      const newTodoList = todoItems.map((item) => {
        if (item.id === todo.id) {
          item.title = todo.title;
          item.description = todo.description;
        }
        return item;
      });
      toggleModalHandler();
      return;
    } else {
      setTodoItems((prevState) => {
        const newTodoList = [...prevState, { ...todo, id: shortid.generate() }];
        return newTodoList;
      });
    }

    setTodo({});
    toggleModalHandler();
  };

  return (
    <Form onSubmit={submitTodoHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={todo.title}
          onChange={changeFormHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="description"
          value={todo.description}
          onChange={changeFormHandler}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        {todo && todo.id ? "edit" : "create"}
      </Button>
    </Form>
  );
};

export default ModalContent;
