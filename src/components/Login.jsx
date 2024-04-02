import { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const handleFormSubmit = () => {

      const errors = checkValidData(name.current?.value, email.current?.value, password.current?.value);

      setNameErrorMessage(errors.name || '');
      setEmailErrorMessage(errors.email || '');
      setPasswordErrorMessage(errors.password || '');

      if (!isSignIn) {
        // Sign up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user created successfully', user);
          navigate('/home');
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
      }else{
        // Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user sign in', user);
          navigate('/home');
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  }

  const handleFormToggle = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <section className='w-full h-[100%] bg-[url("/src/assets/banner.jpg")] bg-left-top'>
      <div className="w-full h-full bg-black/50 lg:py-[10%] py-[12%]">
        <div className='lg:w-[35%] w-[60%] p-[5%] bg-black/80 mx-auto'> 
          <form onSubmit={(e) => e.preventDefault()} className='text-white'>
            <h2 className='text-[30px] font-bold'>{isSignIn ? "Sign In" : "Sign Up"}</h2>
            {
              !isSignIn && (
                <div>
                  <div className='w-full mt-6'>
                    <input ref={name} type="text" name="name" placeholder='Full Name' className='w-full border-[1px] border-white/70 bg-transparent rounded-[4px] p-[10px]' />
                  </div>
                  <p className='mt-4 text-[#e50914]'>{nameErrorMessage}</p>
                </div>
              )
            }
            <div className='w-full mt-6'>
              <input ref={email} type="email" name="email" placeholder='Email' className='w-full border-[1px] border-white/70 bg-transparent rounded-[4px] p-[10px]' />
            </div>
            <p className='mt-4 text-[#e50914]'>{emailErrorMessage}</p>
            <div className='w-full mt-6'>
              <input ref={password} type="password" name="pass" placeholder='Password' className='w-full border-[1px] border-white/70 bg-transparent rounded-[4px] p-[10px]' />
            </div>
            <p className='mt-4 text-[#e50914]'>{passwordErrorMessage}</p>
            <button type='submit' className='text-white bg-[#e50914] w-full mt-6 mb-4 py-[10px] rounded-[4px] font-medium' onClick={() => handleFormSubmit()}>
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            {isSignIn && (
              <p className='text-center cursor-pointer'>Forgot password?</p>
            )}
            <div className='text-white'>
              <div className='mt-[20%] mb-4'>
                <input type="checkbox" defaultChecked className='w-4 h-4' />
                <label className='ml-2'>Remember me</label>
              </div>
              {
                isSignIn ?
                <p className='my-2'><span className='text-gray-400'>New to Netflix?</span> <span className='font-semibold cursor-pointer' onClick={() => handleFormToggle()}>Sign up now.</span></p> :
                <p className='my-2'><span className='text-gray-400'>Already registered?</span> <span className='font-semibold cursor-pointer' onClick={() => handleFormToggle()}>Sign in now.</span></p>
              }
              <p className='text-gray-400 text-[14px]'>This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <span className='text-blue-600'>Learn more.</span></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login