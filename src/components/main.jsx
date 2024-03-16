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

        <Form>
            <Row>
                <Col  xs={1}><Button>remove </Button></Col>
                <Col xs={11} >hello this is ur message</Col>
            </Row>
        </Form> 

        </Container>)
}
