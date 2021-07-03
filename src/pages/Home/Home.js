import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import shortid from "shortid";

import TodoList from "../../components/TodoList/TodoList";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";

// ********** Local Storage  ******** //
const initialTodoItems = localStorage.getItem("todoItems")
  ? JSON.parse(localStorage.getItem("todoItems"))
  : [];
// ********* End of Local Storage *****//

const Home = () => {
  // ********** States *********//
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [modalState, setModalState] = useState(false);
  const [todo, setTodo] = useState({ title: "", description: "" });

  // ********** Hooks ******/
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  useEffect(() => {
    modalState === false && setTodo({ title: "", description: "" });
  }, [modalState]);

  // ********** Functions ******* //

  // Modal
  const toggleModalHandler = () => {
    setModalState((prevState) => !prevState);
  };
  // Delete todo
  const deleteTodoHandler = (id) => {
    const newTodoList = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodoList);
  };
  // Edit todo
  const editTodoHandler = (id) => {
    toggleModalHandler();
    const todo = todoItems.find((todo) => todo.id === id);
    setTodo(todo);
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

  const changeFormHandler = ({ target }) => {
    setTodo({
      ...todo,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <Modal appear={modalState} closeModal={toggleModalHandler}>
        <ModalContent
          todo={todo}
          formHandler={changeFormHandler}
          submitHandler={submitTodoHandler}
          closeModal={toggleModalHandler}
        />
      </Modal>
      <div className="main-text">
        <h2 className="heading">What Should I Do Today?</h2>
        <Button variant="success" onClick={toggleModalHandler}>
          Add
        </Button>
      </div>
      <TodoList
        todoItems={todoItems}
        deleteTodo={deleteTodoHandler}
        editTodo={editTodoHandler}
      />
    </div>
  );
};

export default Home;
