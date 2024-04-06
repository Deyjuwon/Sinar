import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Courses from './Pages/Courses';
import DiscoverPage from './Pages/DiscoverPage';
import FeedbackPage from './Pages/FeedbackPage';
import Login from './Pages/Login';
import AccountPage from './Pages/AccountPage';
import PaymentPanelPage from './Pages/PaymentPanelPage';



function App() {

  const [isAuth, setIsAuth] = useState(false);
  

  return (
    <div className='bg-gradient-to-b from-bg4  to-bg2'>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} setIsAuth={setIsAuth}  />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/discover' element={<DiscoverPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/PaymentPanel' element={<PaymentPanelPage />} />

        

        

        
      </Routes>
    </div>
    
  )
}

export default App
