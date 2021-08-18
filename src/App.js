import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Parallax from "./components/Parallax";
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  });

  return (
    <div>
      <Header />
      <Parallax />
      <Carousel items={[ 
        <CarouselItem title="Contact Keeper" tags={["JavaScript", "HTML", "CSS", "React", "MERN"]} description="A full-stack application built using React and Express."/>, 
        <CarouselItem title="IT Logger" tags={["JavaScript", "HTML", "CSS", "React", "Redux", "Materialize"]} description="A full-stack application built using React, Redux, and Express."/>
      ]}/>
      <Parallax />

    </div>
  );
}

export default App;
