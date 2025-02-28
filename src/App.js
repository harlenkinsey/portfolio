import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CardContainer from './components/CardContainer';
import M from 'materialize-css';

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
    var elems = document.querySelectorAll('.modal');
    var instance = M.Modal.init(elems);
    return () => { window.removeEventListener('resize', handleResize) }
  });

  return (
    <Fragment>
      <Header />
      <CardContainer />
      <Footer />
    </Fragment>
  );
}

export default App;
