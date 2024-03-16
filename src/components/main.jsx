import { Container, Row, Col, Form, Button } from "react-bootstrap"
/*
export default function Gridz () {

    const [count, setCount] = useState(0);

    const addBox = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        const interval = setInterval (() => {
            setCount(count + 1)
        }, 60000);
        return () => clearInterval(interval);
    }, [count])

    

    return(<div>
         <div>
        do not click here
        </div>
        <div className="test" onClick={() => addBox()}>
        <h1>{count}</h1>      
        </div>
        </div>
        
    )
}
*/
export default function Main() {


    return(<Container id="main-container">

        <Form >
            <Row id="main-row">
                <Col id="main-col"  xs={2}>
                    <Button className="main-button">remove</Button>
                </Col>
                <Col id="main-col1" xs={10}>
                    <div className="main-col1-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nostrum exercitationem vitae, aut obcaecati sint accusantium at. Optio, ullam quam excepturi eos cumque modi dolores rerum fuga itaque tempora laudantium.</div>
                </Col>
            </Row>
        </Form> 

        </Container>)
}
