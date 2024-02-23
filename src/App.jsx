import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Courses from './Pages/Courses';
import DiscoverPage from './Pages/DiscoverPage';
import FeedbackPage from './Pages/FeedbackPage';



function App() {


  return (
    <div className='bg-gradient-to-b from-bg4  to-bg2'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/discover' element={<DiscoverPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        

        
      </Routes>
    </div>
    
  )
}

export default App
