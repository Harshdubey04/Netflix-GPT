import React, { useState ,useRef} from 'react'
import Header from '../Components/Header'
import {checkValidSignInData,checkValidSignUpData} from '../Utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../Utils/Firebase";
import { useNavigate } from 'react-router';
import { addUser } from '../Utils/Store/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [errorMessage,seterrorMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const confirmedPassword=useRef(null);
    
    const [signUp,setSignUp]=useState(false);
    
    const toggleSignup=()=>{
        setSignUp((prev)=>!prev);
    }

    const handleButtonClick = () => {
        // Sign In flow
        if (!signUp) {
            const errorMessage = checkValidSignInData(
            email.current.value,
            password.current.value
            );

            seterrorMessage(errorMessage);

            if (errorMessage) return;

            //  proceed with sign-in logic Firebase 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+"-"+errorMessage);
            });
            console.log("Sign In Successful");
        }

        // Sign Up flow
        else {
            const errorMessage = checkValidSignUpData(
            name.current.value,
            email.current.value,
            password.current.value,
            confirmedPassword.current.value
            );

            seterrorMessage(errorMessage);

            if (errorMessage) return;

            //proceed with sign-up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // User is created so update the profile
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: "https://media.licdn.com/dms/image/v2/D5635AQERO96Ty6cpdg/profile-framedphoto-shrink_400_400/B56Zr29CmAL8Ag-/0/1765079788280?e=1770807600&v=beta&t=IXBQnTkHsuWI_spSpMHdlYb2vLJHokpinfcUMOYyUcI"
                }).then(() => {
                // Profile updated!
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                    navigate("/browse");
                }).catch((error) => {
                // An error occurred
                seterrorMessage(error.message); 
                });
                console.log(user);
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+"-"+errorMessage);
            });
            console.log("Sign Up Successful");
        }
    };
 


  return (
    <div className='relative'>

      <Header/>

      {/* BG Img */}
      <div>
        <img className='object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg" alt="bg-img" />
      </div >

      {/* Form */}        
    <div className="absolute inset-0 flex justify-center items-center">
        <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col items-start bg-black/85 text-white rounded p-8 w-full max-w-md">
            {
                signUp?(
                    <>
                        <p className='font-bold text-3xl mb-6 w-full'>Sign Up</p>
                        <input
                        ref={name}
                        type='text'
                        placeholder='Enter your name'
                        required
                        className='p-3 mb-5 border border-gray-400 w-full rounded bg-gray-900'
                        name='name'
                        />
                    </>                    
                ):(
                    <p className='font-bold text-3xl mb-6 w-full'>Sign In</p>
                )
            }

            <input
            ref={email}
            type='email'
            placeholder='Email Address'
            required
            name='email'
            className='p-3 mb-5 border border-gray-400 w-full rounded bg-gray-900'
            />

            <input
            ref={password}
            type='password'
            required
            placeholder='Enter Password'
            name='password'
            className='p-3 mb-5 border border-gray-400 w-full rounded bg-gray-900'
            />
            {
            signUp && <input
            ref={confirmedPassword}
            type='password'
            required
            placeholder='Confirm Password'
            name='confirmpassword'
            className='p-3 mb-5 border border-gray-400 w-full rounded bg-gray-900'
            />
            }

            
            <p className='text-red-500 mb-1 font-bold'>{errorMessage}</p>
            <button onClick={handleButtonClick}  className='w-full px-6 py-3 cursor-pointer bg-red-600 hover:bg-red-700 rounded font-bold'>
               {signUp?"SignUp":"SignIn"}
            </button>
            
            

            <p className='pt-6 text-gray-300'
            onClick={toggleSignup}>
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


