import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import AuthContext from "../AuthContext"

const LoginPage = () => {

  const { token, setToken } = useContext(AuthContext)

  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
 

  const sendLogin = async () => {
    const response = await axios.post("http://localhost:3000/api/login", {
      username,
      password
    })
    console.log(response);
    setToken(response.data)
  }

  return (
    <div>
      <h1>Login</h1>
      <input 
        type="text" 
        value={username} 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)}/>
      <br />
      <input 
        type="password" 
        value={password} 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}/>
      <br />
      <button onClick={sendLogin}>Login</button>
    </div>
  )
}

export default LoginPage