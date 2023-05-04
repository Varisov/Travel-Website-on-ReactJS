import React, {Component} from "react"; 
import { Container, Card, Col, Row, ListGroup } from "react-bootstrap";
import blog from '../Pages/about2.jpg'
import blog2 from'../Pages/about.jpg'
import blog3 from '../Pages/discover1.jpg'
import blog4 from '../Pages/blog.jpg'
export default class Blog extends Component{
    render() {
        return (
          <Container>
            <Row>
                <Col md ="9">
                    <Card className ="m-5">
                        <img
                        height={150}
                        width={150}
                        className="mr-3"
                        src={blog} 
                        /> 

                        <Card.Body>
                            <h5>Bali</h5>
                            <p>
                            Escape to Paradise - Bali! Immerse yourself in breathtaking landscapes, stunning beaches, and an endless array of cultural experiences. Book your trip now and discover the magic of Bali!                            </p>
                        </Card.Body>
                    </Card>
                    <Card className ="m-5">
                        <img
                        height={150}
                        width={150}
                        className="mr-3"
                        src={blog2} 
                        /> 

                        <Card.Body>
                            <h5>Hvar</h5>
                            <p>
                            Experience luxury on the Adriatic Sea - Hvar is the perfect destination for those seeking a Mediterranean paradise. With crystal clear waters, stunning beaches, and world-class dining, Hvar has it all.                            </p>
                        </Card.Body>
                    </Card>
                    <Card className ="m-5">
                        <img
                        height={150}
                        width={150}
                        className="mr-3"
                        src={blog3} 
                        /> 

                        <Card.Body>
                            <h5>Bora Bora</h5>
                            <p>
                            Escape to a tropical paradise - Bora Bora is the ultimate destination for those seeking luxury, relaxation, and breathtaking scenery. Book your trip now and experience the magic of Bora Bora.                            </p>
                        </Card.Body>
                    </Card>
                    <Card className ="m-5">
                        <img
                        height={150}
                        width={150}
                        className="mr-3"
                        src={blog4} 
                        /> 

                        <Card.Body>
                            <h5>Hawaii</h5>
                            <p>
                            Experience the Aloha spirit in Hawaii - a land of sun, sand, and surf. With breathtaking landscapes, world-class beaches, and a rich cultural heritage, Hawaii is the ultimate destination for your next vacation.                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <h5>Places</h5>
                    <Card>
                        <ListGroup  variant="flush">
                            <ListGroup.Item>Bali</ListGroup.Item>
                            <ListGroup.Item>Hawaii</ListGroup.Item>
                            <ListGroup.Item>Bora Bora</ListGroup.Item>
                            <ListGroup.Item>Hvar</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className="mt-5">
                        <Card.Body>
                            <Card.Title>Side widget</Card.Title>
                            <Card.Text>
                            Book your trip now and experience the magic of the islands                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
          </Container>
        )
    }
}