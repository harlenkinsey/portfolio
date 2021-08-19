import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Carousel = ({ items }) => {

    const carouselItems = items.map( item => 
            <li key={item.props.title} >{item}</li>
    );

    useEffect(() => {
        let element = document.querySelectorAll(".carousel");
        M.Carousel.init(element, {indicators: true, shift: 30});
    }, []);

    return (
            <div className="carousel center">
                <ul>{carouselItems}</ul>
            </div>
    )
}

export default Carousel
