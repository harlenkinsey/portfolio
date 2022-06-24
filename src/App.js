import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Post1 from './pages/Post1';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {

  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/hello-world' element={<Post1/>}/>
      </Routes>
    </Router>

  );
}

export default App;
