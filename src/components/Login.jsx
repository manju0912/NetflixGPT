import React, { useState } from 'react'

const Login = () => {

  const [isSignIn, SetIsSignIn] = useState(true);

  const handleClick = () => {
    SetIsSignIn(!isSignIn);
  }

  return (
    <section className='w-full h-[1080px] bg-[url("/src/assets/banner.jpg")] bg-left-top'>
      <div className="w-full h-full bg-black/50">
        <div className='w-[35%] p-[5%] bg-black/80 left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%] absolute'>
          <div className="text-white">
            <h2 className='text-[30px] font-bold'>{isSignIn ? "Sign In" : "Sign Up"}</h2>
            <form>
              {
                !isSignIn && (
                  <div className='w-full mt-6'>
                    <input type="text" name="name" placeholder='Full Name' className='w-full border-[1px] border-white/70 bg-transparent rounded-[4px] p-[10px]' />
                  </div>
                )
              }
              <div className='w-full mt-6'>
                <input type="email" name="email" placeholder='Email' className='w-full border-[1px] border-white/70 bg-transparent rounded-[4px] p-[10px]' />
              </div>
              <div className='w-full mt-4'>
                <input type="password" name="pass" placeholder='Password' className='w-full border-[1px] border-white/70 bg-transparent rounded-[4px] p-[10px]' />
              </div>
              <button type='submit' className='text-white bg-[#e50914] w-full my-4 py-[10px] rounded-[4px] font-medium'>{isSignIn ? "Sign In" : "Sign Up"}</button>
              {isSignIn && (
                <p className='text-center cursor-pointer'>Forgot password?</p>
              )}
            </form>
            <div>
              <div className='mt-[20%] mb-4'>
                <input type="checkbox" className='w-4 h-4' />
                <label className='ml-2'>Remember me</label>
              </div>
              {
                isSignIn ?
                <p className='my-2'><span className='text-gray-400'>New to Netflix?</span> <span className='font-semibold cursor-pointer' onClick={() => handleClick()}>Sign up now.</span></p> :
                <p className='my-2'><span className='text-gray-400'>Already registered?</span> <span className='font-semibold cursor-pointer' onClick={() => handleClick()}>Sign in now.</span></p>
              }
              <p className='text-gray-400 text-[14px]'>This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <span className='text-blue-600'>Learn more.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login