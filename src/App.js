import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Copyright from './components/Copyright';

import 'materialize-css/dist/css/materialize.min.css';
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
      <CardContainer />     
      {window.innerWidth < 700 && <Copyright />}      
      
    </div>
  );
}

export default App;
