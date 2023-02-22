import { useState } from "react"
import axios from 'axios'

const RegistrationPage = () => {

  const [ buttonAvailable, setButtonAvailable] = useState(true)
  const [ username, setUsername ] = useState("")
  const [ usernameOk, setUsernameOk ] = useState(true)
  const [ email, setEmail ] = useState("")
  const [ emailOk, setEmailOk ] = useState("")
  const [ password, setPassword ] = useState("")

  const registerUser = async () => {
    const response = await axios.post('http://localhost:3000/api/signup', {
      username,
      email,
      password
    })
    console.log(response.status);
  }

  const checkUsername = async (e) => {
    setUsername(e)
    const data = { username: e}
    const response = await axios.post('http://localhost:3000/api/check/username', data)
    if (response.data) {
      setUsernameOk("this username is not available")
    } else if (!response.data) {
      setUsernameOk("")
    }
    console.log(response);
  }
  
  const checkEmail = async (e) => {
    setEmail(e)
    const data = { email: e}
    const response = await axios.post('http://localhost:3000/api/check/email', data)
    if (response.data) {
      setEmailOk("this email is not available")
    } else if (!response.data) {
      setEmailOk("")
    }
    console.log(response);
  }
  

  return (
    <div>
      <h1>Registration</h1>
      <p>username: </p>
      <input type="text" value={username} onChange={(e) => checkUsername(e.target.value)}/>
      <p>{usernameOk}</p>
      <p>email: </p>
      <input type="email" value={email} onChange={(e) => checkEmail(e.target.value)} />
      <p>{emailOk}</p>
      <p>password: </p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={registerUser}>Registration</button>
      {/* <button disabled={buttonAvailable}>Registration</button> */}
    </div>
  )
}

export default RegistrationPage