import Header from "./Components/Header"
import { Routes,Route} from "react-router"
import Login from "./Pages/Login"
import Browse from "./Pages/Browse"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/browse" element={<Browse/>}></Route>
    </Routes>
    
  )
}

export default App
