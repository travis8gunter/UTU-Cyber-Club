import React from 'react';
import logo from './photos/clublogo3.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Discord from './pages/discord.js';
import About from './pages/about.js';
import Home from './pages/home.js';

import NavContainer from './nav-bar/nav-container';
import Footer from './pages/footer.js';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='Logo' className='App-logo' />
        <NavContainer />
      </header>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discord' element={<Discord />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    <Footer />
    </div>
  
    </Router>
    
  );
}

export default App;
