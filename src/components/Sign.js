
import "./SignStyles.css";
import React, { Component } from 'react'

import {useState} from "react";
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebase"



// export default class sign extends Component 
function Sign(){

  
    const [loginEmail,setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")

    const [user,setUser]=useState({});

    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });

    const login=async()=>{
      try{
        const user=await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
        }catch(error){
          console.log(error.message);
        }
  
      
    }

  
    return (
      <div className="container">
      <form>
        <h3>Log In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={(event)=>{
              setLoginEmail(event.target.value)
            }} 
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(event)=>{
              setLoginPassword(event.target.value)
            }} 
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={login}>
            Submit
          </button>
        </div>
        
      </form>
      </div>
    )
  
}

export default Sign