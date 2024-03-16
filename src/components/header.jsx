import {Container, Col, Row, Button, Form } from 'react-bootstrap';

import { useState } from 'react';

export default function Heading () {
/*
    function addTask () {
        console.log("hi")
        console.log(tasks)
        setTask([...tasks, "testString"])
    }
*/

    const [rows, setRows] = useState([]);

    function addRows () {
        
    
    }
    return(
        /*
        <Container id='task-list-container' onClick={addTask}>
            <ul id="task-list">
                <li>this is cont</li>
                {
                    tasks.map( (task) => {
                        return <li>{task}</li>
                    })
                }
            </ul>
        </Container>
         */
            <Form onSubmit={addRows}>
                <Container id="header-container">
                    
                        <Form.Group className="mb-3" controlId="task">
                            <Row className='task-add-container'>
                                <Col xs={1} id='task-add-button'><Button onClick={addRows} className="test">Add</Button></Col>
                                <Col xs={11} id="task-add-input"><Form.Control type="text" placeholder="enter task"/></Col>
                            </Row>
                        </Form.Group>
                    
                </Container>
            </Form>
    );

}