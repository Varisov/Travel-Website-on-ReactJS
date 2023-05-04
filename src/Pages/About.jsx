import React, {Component} from "react"; 
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import bali from'../Pages/Bali.png';
import bora from'../Pages/Bora Bora.png';
import hvar from'../Pages/Hvar.png';
import white from'../Pages/Whitehaven.png';
import hawaii from '../Pages/Hawaii.png';


export default class About extends Component{
    render() {
        return (
          <Container>
            <Tab.Container id = "ledt-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} >
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Bali</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Bora Bora</Nav.Link>
                            </Nav.Item>  
                            <Nav.Item>
                                <Nav.Link eventKey="third">Hvar</Nav.Link>
                            </Nav.Item>  
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Whitehaven</Nav.Link>
                            </Nav.Item>  
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Hawaii</Nav.Link>
                            </Nav.Item>    
                        </Nav>
                    </Col>
                    <Col sm = {9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey = "first">
                                <img src = {bali}
                                height={450}
                                width={800}/>
                                <p>
                                    Looking for a tropical paradise to escape to? Look no further than Bali, Indonesia!
                                    Bali is a stunning island located in the heart 
                                    of the Indonesian archipelago, known for its vibrant culture, 
                                    breathtaking landscapes, and world-class beaches. 
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "second">
                                <img src = {bora}
                                height={450}
                                width={800}/>
                                <p>
                                    Looking for the ultimate tropical getaway? Look no further than Bora Bora, French Polynesia!
                                    Bora Bora is a small island located in the heart of the South Pacific, known for its turquoise lagoon, 
                                    pristine beaches, and stunning overwater bungalows.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "third">
                                <img src = {hvar}
                                height={450}
                                width={800}/>
                                <p>
                                Looking for a Mediterranean getaway that offers a unique blend of history, culture, and stunning natural beauty? 
                                Look no further than Hvar, Croatia!Located in the heart of the Adriatic Sea, Hvar is an island paradise known 
                                for its crystal-clear waters, scenic beaches, and charming medieval towns.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "fourth">
                                <img src = {white}
                                height={450}
                                width={800}/>
                                <p>
                                Looking for a pristine paradise with some of the world's most beautiful beaches? Look no further than Whitehaven, Australia!
                                Whitehaven is a stunning stretch of beach located in the heart of the Whitsunday Islands, known for its crystal-clear waters, 
                                powdery white sand, and breathtaking views.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "fifth">
                                <img src = {hawaii}
                                height={450}
                                width={800}/>
                                <p>
                                Looking for a tropical paradise that offers the perfect blend of relaxation, adventure, and culture? Look no further than Hawaii, USA!
                                Hawaii is a stunning archipelago located in the heart of the Pacific Ocean, known for its lush greenery, white-sand beaches, and vibrant 
                                culture. It's the perfect place to escape the stresses of everyday life and immerse yourself in a world of natural beauty and adventure.
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
          </Container>
        )
    }
}