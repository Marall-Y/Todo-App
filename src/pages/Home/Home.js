import React,{useState} from 'react'

import Wrapper from '../../hoc/Wrapper'
import List from '../../components/List/List'
import Modal from '../../components/Modal/Modal'
import ModalContent from '../../components/ModalContent/ModalContent'


import './Home.css'

const Home = () => {
    const [modal, setModal]= useState(false)

    const showModalHandler = () => {
        setModal(true)
    }
    const closeModalHandler = () => {
        setModal(false)
    }

    return (
        <Wrapper>
            <Modal show ={modal} closeModal={closeModalHandler}>
                <ModalContent  />
            </Modal>
            <List showModal={showModalHandler}/>
        </Wrapper>
    )
}

export default Home
