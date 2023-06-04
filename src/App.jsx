import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import HeaderPart from './components/HeaderPart.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

import './styles/HeaderPart.css';
import './styles/Footer.css';
import './styles/Home.css';

function App() {
  return (
    <>
    <Router>

      <HeaderPart />
      <Home />
      <Footer />
      <Routes>
        <Route path ='/' />
      </Routes>
      
      </Router>
    </>
  );
}

export default App;
