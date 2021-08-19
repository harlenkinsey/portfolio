import React from 'react';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import background from '../images/background-image.png';
import background2 from '../images/background-image-2.png';

const Background = () => {
    return (
        <div  style={{ backgroundImage: `url(${window.innerWidth > 700 ? background : background2})`, width: "100%", height: "900px" }}>
            <Carousel items={[ 
                <CarouselItem title="Contact Keeper" tags={["JavaScript", "HTML", "CSS", "React", "MERN"]} description="A full-stack application built using React and Express."/>, 
                <CarouselItem title="IT Logger" tags={["JavaScript", "HTML", "CSS", "React", "Redux", "Materialize"]} description="A full-stack application built using React, Redux, and Express."/>,
                <CarouselItem title="Star Destroyer" tags={["Android", "Godot", "GDScript", "Python"]} description="A small 2D game built with Godot for Android."/>
            ]}/>
        </div>
    )
}

export default Background
