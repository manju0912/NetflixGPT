import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Login from './Login'
import Home from '../pages/HomePage'


const Body = () => {

  return (
    <div className='max-w-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default Body