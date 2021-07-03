import React from "react";

import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Container className="py-3">
      <Home />
    </Container>
  );
};

export default App;
