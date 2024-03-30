import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Login from './Login'
import Home from '../pages/HomePage'


const Body = () => {

  return (
    <div className='max-w-full'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}



export default Body