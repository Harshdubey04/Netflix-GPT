import React, { useState } from 'react'
import Header from '../Components/Header'

const Login = () => {
    const [signUp,setSignUp]=useState(false);
    const handleSignup=()=>{
        setSignUp((prev)=>!prev)
    }
  return (
    <div className='relative'>

      <Header/>

      {/* BG Img */}
      <div>
        <img className='object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg" alt="bg-img" />
      </div >

      {/* Form */}
        
    <div className="absolute inset-0 flex justify-center items-center">
        <form className="flex flex-col items-start bg-black/85 text-white rounded p-8 w-full max-w-md">
            {
                signUp?(
                    <>
                        <p className='font-bold text-3xl mb-6 w-full'>Sign Up</p>
                        <input
                        type='text'
                        placeholder='Enter your name'
                        required
                        className='p-3 mb-5 border border-gray-400 w-full rounded bg-gray-900'
                        />
                    </>
                    
                ):(
                    <p className='font-bold text-3xl mb-6 w-full'>Sign In</p>
                )
            }

            <input
            type='email'
            placeholder='Email Address'
            required
            className='p-3 mb-5 border border-gray-400 w-full rounded bg-gray-900'
            />

            <input
            type='password'
            required
            placeholder='Enter Password'
            className='p-3 mb-5 border border-gray-400 w-full rounded bg-gray-900'
            />
            {
                signUp && <input
            type='password'
            required
            placeholder='Confirm Password'
            className='p-3 mb-5 border border-gray-400 w-full rounded bg-gray-900'
            />
            }

            <button className='w-full px-6 py-3 cursor-pointer bg-red-600 hover:bg-red-700 rounded font-bold'>
            {signUp?"Sign Up":"Sign In"}
            </button>

            <p className='pt-6 text-gray-300'
            onClick={handleSignup}>
                {
                    signUp?(
                        <>Already have an account?<span className="text-white font-semibold cursor-pointer">Sign in</span></>
                    ):(
                        <>New to Netflix?<span className="text-white font-semibold cursor-pointer">Sign up now</span></>
                    )
                }
                
            </p>

        </form>
    </div>

    </div>
  )
}

export default Login


