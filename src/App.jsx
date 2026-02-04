import Header from "./Components/Header"
import { Routes,Route, useNavigate} from "react-router"
import Login from "./Pages/Login"
import Browse from "./Pages/Browse"
import { useEffect } from "react"
import { auth } from "./Utils/Firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "./Utils/Store/userSlice"
import Error from "./Pages/Error"

function App() {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Sign in user
        const {uid,email,displayName,photoURL} = user;
        //Add user to the Store
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        //Navigate the user to the browse page
        navigate("/browse");
        
      } else {
        // User is signed out
        dispatch(removeUser());
        //Navigate to login page
        navigate("/");
      }
      
    });
  },[dispatch,navigate])

  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/browse" element={<Browse/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>    
  )
}
export default App


