import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Courses from './Pages/Courses';



function App() {


  return (
    <div className='bg-gradient-to-b from-bgstart  to-bg2'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />

        
      </Routes>
    </div>
    
  )
}

export default App
