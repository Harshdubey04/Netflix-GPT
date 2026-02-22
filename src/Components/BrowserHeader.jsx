import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSeachView, clearGptResults } from "../Utils/Store/gptSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const BrowserHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSeachView());
    setMenuOpen(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Clear GPT results when signing out
        dispatch(clearGptResults());
        navigate("/"); // Navigate to home
      })
      .catch((error) => {
        console.error(error);
        navigate("/error"); // Optional: navigate to an error page
      });
    setMenuOpen(false);
  };

  return (
    <div className="fixed left-0 w-full bg-black/65 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black z-50">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Hamburger - Mobile Only */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <h1 className="text-red-600 text-2xl md:text-3xl font-extrabold tracking-wide">
          NETFLIX
        </h1>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={handleGPTSearchClick}
          className="bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-md text-white font-semibold transition duration-200"
        >
          {showGptSearch ? "Home" : "GPT Search"}
        </button>

        <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white text-lg">
          😊
        </div>

        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md text-white font-semibold transition duration-200"
        >
          Sign Out
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-6 bg-black border border-gray-700 rounded-lg shadow-lg flex flex-col gap-4 px-6 py-5 md:hidden">
          <button
            onClick={handleGPTSearchClick}
            className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md text-white font-semibold"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white text-lg">
            😊
          </div>

          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowserHeader;