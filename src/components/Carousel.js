import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import background from '../images/background-image-2.png';

const Carousel = ({ items }) => {

    const carouselItems = items.map( item => 
            <li>{item}</li>
    );

    useEffect(() => {
        let element = document.querySelectorAll(".carousel");
        M.Carousel.init(element);
    }, []);
 // style={{backgroundImage: `url(${background})`}}
    return (
        <div className="black"> 
            <div className="carousel">
                <ul>{carouselItems}</ul>
            </div>
        </div>
    )
}

export default Carousel
