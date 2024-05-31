import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface User{
    email:string,
    pass:string,
}
export default function Register() {
    let navigate=useNavigate();
    const [user,setUser]=useState<User>({email:'',pass:''});
    const register=()=>{
        // lấy giá trị người dùng nhập vào
        // xử lý những tác vụ
        //muốn chuyển sang trang login
        let usert={
            email:user.email,
            pass:user.pass,
        }
        navigate('/login',{state:usert});
    }
  return (
    <div>Register
        <br></br>
        <label htmlFor="">email</label>
        <input onChange={(e)=>setUser({...user,email:e.target.value})} type="text" />
        <br></br>
        <label htmlFor="">Password</label>
        <input type="text"  onChange={(e)=>setUser({...user,pass:e.target.value})} />
        <br></br>
        <button onClick={register}>register</button>
    </div>
  )
}
