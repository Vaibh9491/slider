import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
    return ( 
        <div className="quat">
         <React.Fragment/>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <React.Fragment/>
        </div>   
    )
}