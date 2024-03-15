import {Container, Col, Row, Button, Form } from 'react-bootstrap';

import { useState } from 'react';

export default function Heading () {
/*
    const [tasks, setTask] = useState([]);

    function addTask () {
        console.log("hi")
        console.log(tasks)
        setTask([...tasks, "testString"])
    }
*/
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
            <Form>
                <Container style={{background: "red"}}>
                    <Row>
                        <Col xs={1} className='task-add-button'><Button className="test">Add</Button></Col>
                        <Col>A separte col</Col>
                    </Row>
                </Container>
            </Form>
    );

}