import React from "react";

import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import { TodoItemsProvider } from "./context/todoItemsContext";
import { TodoProvider } from "./context/todoContext";
import { ModalProvider } from "./context/modalContext";

const App = () => {
  return (
    <TodoItemsProvider>
      <TodoProvider>
        <ModalProvider>
          <Container className="py-3">
            <Home />
          </Container>
        </ModalProvider>
      </TodoProvider>
    </TodoItemsProvider>
  );
};

export default App;
