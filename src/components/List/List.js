import React,{useState} from 'react'
import { Button, ListGroup, Row } from 'react-bootstrap'

import './List.css'

const List = (props) => {
   const [item, seItem] = useState([])

    return (
        <div>
            <h2 className="heading">What Should I Do Today?</h2> 
            <Button  variant="success" onClick={props.showModal}>Add</Button>  
            <div>
                <Row>
                    <ListGroup>
                        
                    </ListGroup>
                </Row>                
            </div>          
        </div>
    )
}

export default List
