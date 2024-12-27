import React from 'react';
import logo from './photos/clublogo3.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Discord from './pages/discord.js';
import About from './pages/about.js';
import Home from './pages/home.js';
import Showcase from './pages/showcase.js';

import NavContainer from './nav-bar/nav-container';
import Footer from './pages/footer.js';

function App() {
  return (
    <Router>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
    </head>
    <div className="App font-orbitron">
      <div class="fixed top-0 left-0 z-50 w-full bg-black">
      <header className="flex flex-row justify-center sm:justify-between px-12 items-center py-4 sm:py-0">
        <img src={logo} alt='Logo' className='h-24 hidden sm:block' />
        <span class="flex flex-col gap-2 sm:hidden items-center justify-center">
          <small>Utah Tech University</small>
          <p className="font-bold sm:hidden text-xl text-center">Cyber Security Club</p>
        </span>
        
        <NavContainer />
      </header>
      </div>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discord' element={<Discord />} />
          <Route path='/about' element={<About />} />
          <Route path='/showcase' element={<Showcase />} />
        </Routes>
      </main>
    <Footer />
    </div>
  
    </Router>
    
  );
}

export default App;
