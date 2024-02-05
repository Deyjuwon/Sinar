import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'



function App() {


  return (
    <div className='bg-gradient-to-b from-bgstart  to-bg2'>
      <Routes>
        <Route path="/" element={<Home />} />

        
      </Routes>
    </div>
    
  )
}

export default App
