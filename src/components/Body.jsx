import { Routes, Route, useNavigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Login from './Login'
import Home from '../pages/HomePage/HomePage'
import { auth } from '../utils/firebase'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice'


const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName}));
        navigate("/home")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    
    return () => unsubscribe();
  },[])

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