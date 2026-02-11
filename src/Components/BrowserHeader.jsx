
import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router';
import profilePicture from "../../public/profilePicture.png"
import Error from '../Pages/Error';

const BrowserHeader = () => {
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
        }).catch((error) => {
        // An error happened.
        // console.log(error);
        navigate("/error");
        });
    }
  return (
    <div className='flex justify-between py-4 absolute w-full px-6 z-20 bg-gradient-to-b from-black/80 to-transparent'>
        {/* Logo */}
        <div className='ml-3'>
            <img className='w-44 bg-linear-to-b from-black' 
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo" />  
        </div>
          {/*SignOut Button*/}
        <div className='flex gap-4 items-center'>   
            <div>
                <img src={profilePicture} alt="profile-picture"
                className='size-8 rounded'
                />
            </div>    
            <div>
                <button onClick={handleSignOut}
                className='bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded mr-5'>
                    Sign Out
                </button>
            </div>
        </div>          
    </div>
  )
}

export default BrowserHeader;



