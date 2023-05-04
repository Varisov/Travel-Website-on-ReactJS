import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import beach from '../assets/5.png';
import dbeach from '../assets/2.png';
import cbeach from '../assets/3.png';

export default class CarouselBox extends Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block, w-100"
                    src={beach}
                    alt="Forest"
                    /> 
                    <Carousel.Caption>
                        <h3> Hvar </h3>
                        <p>You can find the most beautiful and pleasant places at the best 
                            prices with special discounts, you choose the place we will guide you all the way to wait, get your 
                            place now.</p>
                    </Carousel.Caption>                
                </Carousel.Item> 

                <Carousel.Item>
                    <img
                    className="d-block, w-100"
                    src={dbeach}
                    alt="Forest"
                    /> 
                    <Carousel.Caption>
                        <h3> Bali </h3>
                        <p>Find out more with our photo of the most beautiful and 
                        pleasant places for you and your family.</p>
                    </Carousel.Caption>                
                </Carousel.Item>  

                <Carousel.Item>
                    <img
                    className="d-block, w-100"
                    src={cbeach}
                    alt="Forest"
                    /> 
                    <Carousel.Caption>
                        <h3> Hawaii </h3>
                        <p>Travel you choose the destination, 
                            we offer you the experience.</p>
                    </Carousel.Caption>                
                </Carousel.Item>    

            </Carousel>
          
        )
    }
}