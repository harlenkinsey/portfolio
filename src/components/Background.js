import React, { useEffect } from 'react';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

import M from 'materialize-css/dist/js/materialize.js';

const Background = () => {

    useEffect(() => {
        M.toast({html: 'Welcome!', classes: 'black white-text border'});
        M.toast({html: 'You can swipe or drag to get to the next card.', classes: 'black white-text border'});
    }, []);

    return (
        <div className='background'>
            <Carousel items={[ 
                <CarouselItem title='Contact Keeper' tags={['JavaScript', 'HTML', 'CSS', 'React', 'MERN']} description='A full-stack application built using React and Express.' link='https://serieux-croissant-39457.herokuapp.com/login'/>, 
                <CarouselItem title='Github Finder' tags={['JavaScript', 'HTML', 'CSS', 'React', 'Redux', 'Materialize']} description='A full-stack application built using React, Redux, and Express.' link='https://githubfinder901237.netlify.app'/>,
                <CarouselItem title='Star Destroyer' tags={['Android', 'Godot', 'GDScript', 'Python']} description='A small 2D game built with Godot for Android.' link='https://play.google.com/store/apps/details?id=com.lonepixel.studios&hl=en_US'/>
            ]}/>
        </div>
    )
}

export default Background
