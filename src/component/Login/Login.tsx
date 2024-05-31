import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Login() {
    // dùng hook useLocation của react-router-dom đc cung cấp
    const location=useLocation();
    console.log('giá trị',location);
  return (
    <div>
        Login
        <br></br>
        <label htmlFor="">Email</label>
        <input type="text" value={location.state.email} />
        <br />
        <label htmlFor="">Password</label>
        <input type="text" value={location.state.pass} />
    </div>
  )
}
