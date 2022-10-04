import React from 'react'
import NavbarComponent from "./NavbarComponent";
import { useState } from "react";
import axios from "axios"

const LoginComponent = () => {
  const [state, setState] = useState({
    username: "",
    password:""
  })
  const {username,password} = state
  const inputValue = name => event => {
    setState({ ...state, [name]: event.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    axios
    .post(`${process.env.REACT_APP_API}/login`,{username,password})
    .then(response =>{
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
    }
  return (
    <div className="container p-5">
        <NavbarComponent />
        <h1 className="mt-2 mb-3 text-center">เข้าสู่ระบบ | Admin</h1>
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control mt-2 mb-3" value={username} onChange={inputValue("username")} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control mt-2 mb-3" value={password} onChange={inputValue("password")} />
          </div>
            <br />
          <input type="submit" value="เข้าสู่ระบบ" className="btn btn-primary" />
        </form>
    </div>
  )
}

export default LoginComponent;