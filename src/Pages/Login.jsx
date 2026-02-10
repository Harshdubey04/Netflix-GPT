import React, { useState ,useRef} from 'react'
import Header from '../Components/Header'
import {checkValidSignInData,checkValidSignUpData} from '../Utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../Utils/Firebase";
import { useNavigate } from 'react-router';
import { addUser } from '../Utils/Store/userSlice';
import { useDispatch } from 'react-redux';
import { PROFILE_PHOTO,BG_IMG } from '../Utils/Constants';

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
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+"-"+errorMessage);
            });
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
                    photoURL: PROFILE_PHOTO
                }).then(() => {
                // Profile updated!
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                    navigate("/browse");
                }).catch((error) => {
                // An error occurred
                seterrorMessage(error.message); 
                });
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+"-"+errorMessage);
            });
            
        }
    };
 


  return (
    <div className='relative'>

      <Header/>

      {/* BG Img */}
      <div>
        <img className='object-cover' src={BG_IMG} alt="bg-img" />
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


