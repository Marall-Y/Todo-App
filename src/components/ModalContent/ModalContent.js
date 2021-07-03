import React from "react";
import { Button, Form } from "react-bootstrap";
import "./ModalContent.css";

const ModalContent = ({ formHandler, todo, submitHandler }) => {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={todo.title}
          onChange={formHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="description"
          value={todo.description}
          onChange={formHandler}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        {todo && todo.id ? "edit" : "create"}
      </Button>
    </Form>
  );
};

export default ModalContent;
