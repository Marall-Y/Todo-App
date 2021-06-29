import React from "react";
import Home from "./pages/Home/Home";

import "./App.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="py-3">
      <Home />
    </Container>
  );
};

export default App;
