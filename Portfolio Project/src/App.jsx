import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; // Changed from Projects to Home
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import React from 'react';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="flex">
          <div id="nav-brand">
            <h3>Who Am I</h3>
          </div>
          <div id="nav-options">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/projects">Projects</Link>
            </span>
            <span>
              <Link to="/contact">Contact Me</Link>
            </span>
          </div>
        </nav>

        <div className='flex header'>
          <div className='user-info'>
            <h1>Sadaf Saleem</h1>
            <p>
              Hi Visitor! I am a girl who created Studytonight, the Interactive courses and even this project that you are doing right now.
            </p>
          </div>
          <div className='user-pic'>
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format"
              alt="Professional businesswoman"
              className="img-responsive img-circle"
            />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Page not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;