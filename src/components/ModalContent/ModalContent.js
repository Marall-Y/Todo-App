import React,{useState} from 'react'
import { Button , Form } from 'react-bootstrap'

import './ModalContent.css'

const ModalContent = (props) => {
    const [title, setTitle]= useState("")
    const [description, setDescription]= useState("")

    return (      
        <Form>
            <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control  type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={2} value={description} onChange={(event) => setDescription(event.target.value)}/>
            </Form.Group>
            <Button variant="success" type="submit">Create</Button>
        </Form>        
)
}

export default ModalContent