import React from 'react'
import './SignUp.css';
import { FaUser,FaLock,FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const signup = () => {
  return (
    <div className='main'>
      <form action="">
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required></input>
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="email" placeholder='Email Address' required></input>
          <IoMdMail className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required></input>
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="tel" placeholder='Phone Number' required></input>
          <FaPhoneSquareAlt className='icon'/>
        </div>
        <button type='submit'>Sign Up</button>
        <div className="login-link">
          <p>Already have account?<a href="/">Login</a></p>
        </div>
      </form>
    </div>
  )
}

export default signup