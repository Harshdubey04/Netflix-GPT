import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router';
import profilePicture from "../../public/profilePicture.png"
import Error from '../Pages/Error';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSeachView } from '../Utils/Store/gptSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/languageConstants';
import { changeLanguage } from '../Utils/Store/configSlice';

const BrowserHeader = () => {
    const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
    const dispatch=useDispatch();
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

    const handleGPTSearchClick=()=>{
        dispatch(toggleGptSeachView());
    }

    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
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
            {showGptSearch && <div>
                <select name="language" id="language" 
                onChange={handleLanguageChange}
                    className='px-4 py-1 text-white bg-black border border-gray-400 rounded '
                >
                    {
                        SUPPORTED_LANGUAGES.map((language)=>(<option key={language.identifier} value={language.identifier}>{language.name}</option>))
                    }
                </select>
           </div>}

                {/* GPT Search */}
            <div>
                <button 
                className='p-2 m-2 border border-black 
                text-white bg-pink-400 cursor-pointer rounded active:scale-95 hover:shadow-[0_0_15px_#ec4899]
                transition-all duration-300'
                onClick={handleGPTSearchClick}
                >
                {showGptSearch?"Browse Movies":"GPT Search"}    
                </button>
            </div>

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



