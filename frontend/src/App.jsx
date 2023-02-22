import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet, Link } from 'react-router-dom'
import AuthContext from './AuthContext'
import { useContext } from 'react'
import Buttons from './components/Buttons'
import jwt_decode from "jwt-decode"
import { useEffect } from 'react'

function App() {

  const [ loggedInUser, setLoggedInUser] = useState("")
  const {token, setToken} = useContext(AuthContext)
  console.log(token);


  useEffect(() => {
    if (token !== "") {
      const decode = jwt_decode(token)
      console.log(decode);
      setLoggedInUser(decode.username)
    }
  }, [token])

 

  return (
    <>
      
        <div className="App">
          <h1>{loggedInUser}</h1>
            <Buttons />
          <div>
            <Link to='registration'>Registration</Link>
          </div>
          <div>
            <Link to='login'>Login</Link>
          </div>
          <Outlet></Outlet>
        </div>
      
    </>
  )
}

export default App
