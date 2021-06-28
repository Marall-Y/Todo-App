import React, { useState } from "react";

import Wrapper from "../../hoc/Wrapper";
import List from "../../components/List/List";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import ItemList from "../../components/ItemList/ItemList";

import "./Home.css";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [items, setItem] = useState([]);

  const showModalHandler = () => {
    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };
  const addItemHandler = (item) => {
    setItem((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          ...item,
        },
      ];
    });
  };

  const removeItemHandler = (deleteditem) => {
    let newItems = items.filter((item) => {
      return item !== deleteditem;
    });

    setItem(newItems);
  };

  return (
    <Wrapper>
      <Modal show={modal} closeModal={closeModalHandler}>
        <ModalContent addItem={addItemHandler} closeModal={closeModalHandler} />
      </Modal>
      <List showModal={showModalHandler} />
      <ItemList items={items} remove={removeItemHandler} />
    </Wrapper>
  );
};

export default Home;
