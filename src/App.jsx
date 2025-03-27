import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Layout from './Layout/index.jsx';
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Blog from './pages/Blog'
import Project from './pages/Project'



function App() {


  return (
    <div className='contayner'>
      <Router>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="project" element={<Project />} />
          </Route>         
        </Routes>
      </Router>
    </div>
  )
}

export default App;
