import axios from "axios"
import { useContext } from "react"
import AuthContext from "../AuthContext"

const Buttons = () => {

  const { token, setToken } = useContext(AuthContext)
 
  // const getData = () => {
  //   fetch('http://localhost:3000/api/public')
  //     .then(response => response.text()
  //     .then(text => console.log(text)) 
  //     )
  // }
  
  const getPublic = async () => {
    const response = await fetch('http://localhost:3000/api/public')
    const text = await response.text()
  }

  const getPrivate = async () => {
    console.log('token', token);
    const sendtoken = token;
    console.log('sendtoken', sendtoken);
    const response = await axios.get('http://localhost:3000/api/private', {
      headers: {
        'Authorization': `Bearer ${sendtoken}`
      }
    })
    // const text = await response.text()
    console.log(response.data);
  }
  
  return (
    <>
      <button onClick={getPublic}>PUBLIC</button>
      {token && <button onClick={getPrivate}>PRIVATE</button>}
    </>
  )
}
export default Buttons