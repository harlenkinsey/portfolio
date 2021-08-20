import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.js';

const Carousel = ({ items }) => {

    const carouselItems = items.map( item => 
            <li key={item.props.title} >{item}</li>
    );

    useEffect(() => {
        let element = document.querySelectorAll('.carousel');
        M.Carousel.init(element, {indicators: true, shift: 30});
        
        // Removes the click listener on carousel
        // which was causing the click listeners on child buttons to not fire
        let instance = M.Carousel.getInstance(element[0]);
        instance.el.removeEventListener('click', instance._handleCarouselClickBound);

    }, []);

    return (
            <div id='carousel' className='carousel center'>
                <ul>{carouselItems}</ul>
            </div>
    )
}

export default Carousel
