import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Layout from './Layout/index.jsx';
import Home from "./pages/Home"
import About from "./pages/About"



function App() {


  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/' element={<Home />} /> */}
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App;
