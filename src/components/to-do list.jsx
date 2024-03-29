import {Container, Col, Row, Button, Form } from 'react-bootstrap';

import { useState } from 'react';



    

export default function ToDoList () {
/*
    function addTask () {
        console.log("hi")
        console.log(tasks)
        setTask([...tasks, "testString"])
    }
    
*/
    const [tasks, setTask] = useState([])
    

    function addTask (event) {
        event.preventDefault();
        let input = event.target[1].value
        setTask([...tasks, input])
    }

    function removeTask (index) {
        setTask(t => t.filter((__, i) => i !== index));
    }

    const forms = tasks.map((task, index) => 
    <Row key={index} className="main-row">
        <Col className="main-col"  xs={2}>
            <Button title="remove-item" onClick={() =>removeTask(index)} className="main-button">remove</Button>
        </Col>
        <Col className="main-col1" xs={10}>
            <div className="main-col1-text">{task} index is {index}</div>
        </Col>
    </Row>)



    const loadForm = () => {
        return (<div>

            <Form onSubmit={addTask}>
                <Container id="header-container">
                    
                        <Form.Group className="mb-3" controlId="task">
                            <Row className='task-add-container'>
                                <Col xs={1} id='task-add-button'><Button title="add-item" type="submit" className="test">Add</Button></Col>
                                <Col xs={11} id="task-add-input"><Form.Control type="text" placeholder="enter task"/></Col>
                            </Row>
                        </Form.Group>
                </Container>
            </Form>

        </div>)
    }

   

    return(<div>

            {loadForm()}

            
            {forms}
                
                </div>);
    
}
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