import React, { useContext } from "react";
import "./TodoList.css";
import { TodoItemsContext } from "../../context/todoItemsContext";
import { todoContext } from "../../context/todoContext";
import { modalContext } from "../../context/modalContext";

const TodoList = () => {
  const [todoItems, setTodoItems] = useContext(TodoItemsContext);
  const [todo, setTodo] = useContext(todoContext);
  const [modalState, setModalState] = useContext(modalContext);

  // Modal Toggle
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

  return (
    <section className="item-list">
      <ul variant="flush">
        {todoItems.map((todo) => {
          return (
            <li key={todo.title}>
              <p className="title">Title: {todo.title}</p>
              <p className="description">Description: {todo.description}</p>
              <i
                className="fa fa-check-circle"
                onClick={() => deleteTodoHandler(todo.id)}
              ></i>
              <i
                className="fa fa-edit"
                onClick={() => editTodoHandler(todo.id)}
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
