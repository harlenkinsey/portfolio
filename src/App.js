import React from 'react';
import Header from "./components/Header";
import Parallax from "./components/Parallax";
import ProjectBlock from './components/ProjectBlock';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  return (
    <div>
      <Header />
      <Parallax />
      <ProjectBlock />
      <Parallax />
      <ProjectBlock />
      <Parallax />
    </div>
  );
}

export default App;
