
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userLogInData, setUserLogInData] = useState({ email: '', password: '' });
  //    console.log(userLogInData,"userLoginData here");
  const router = useNavigate();
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("isUserLogged"));
    if (localStorageData) {
      // console.log("user logged in already, Directing to home");
      router('/');
    }
  },[]);
  // -------------handleSubmit--------------------------
  function submitHandle(e) {
    e.preventDefault();
    if (userLogInData.email && userLogInData.password) {
      const registeredData = JSON.parse(localStorage.getItem("userData"));
      console.log(registeredData, "registerDATA here");
      if (registeredData) {
        var flag = false;
        for (var i = 0; i < registeredData.length; i++) {
          console.log("inside fo loop");
          if (registeredData[i].email === userLogInData.email && registeredData[i].password === userLogInData.password) {
            // localStorage.setItem("isUserLogged", "true");
            flag = true;
          }
        }
        if (flag === true) {
          localStorage.setItem("isUserLogged", "true");
          router('/')
          toast.success("Login Successfull WELCOME HOME!")
        } else {
          toast.error("Wrong Credentials !")
        }
      } else {
        toast.error("User Not Found plz Register First.");
      }
    } else {
      toast.error("Fill The All Fields !!")
    }
}
// ---------------------------------------------HnadleChnage--------------------------------------------------------
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  setUserLogInData((e) => ({ ...e, [name]: value }));
}


return (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "80px" }}>
    <form onSubmit={submitHandle} style={{ border: "1px solid #5cb0b1", padding: "30px", paddingRight: "50px", backgroundColor: "#5cb0b1", borderRadius: "10px" }} id="form">
      <          h1 style={{ color: "#f21274" }}>Login Form</h1>
      <label style={{ fontSize: "20px" }}>Email</label><br />
      <input style={{ padding: "10px", width: "100%" }} type="email" placeholder='Email' name='email' onChange={handleChange} /><br /><br />
      <label style={{ fontSize: "20px" }} >Password</label><br />
      <input style={{ padding: "10px", width: "100%" }} type="password" placeholder=' Password' name='password' onChange={handleChange} /><br /><br />
      <input style={{cursor:"pointer", padding: "8px", width: "40%", margin: "10px", marginLeft: "60px", color: "white", backgroundColor: "#cc4600", border: "1px solid #cc4600" }} type="submit" /><br />
      <span onClick={()=>{router('/Register')}} style={{cursor:"pointer", color: "white", textDecoration: "none", marginLeft: "20px", fontWeight: "500", color: "blue" }}>Not User? Register here</span>
    </form>
  </div>
)
}

export default Login;
