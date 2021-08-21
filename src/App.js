import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Background from './components/Background';
import SocialMediaButtons from './components/SocialMediaButtons';
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

      {window.innerWidth > 700 && <SocialMediaButtons />}
      <Header />
      <Background />
      {window.innerWidth < 700 && <SocialMediaButtons />}      
      {window.innerWidth < 700 && <Copyright />}      
      
    </div>
  );
}

export default App;
