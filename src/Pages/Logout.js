import React, { useEffect } from 'react'
import Emitter from '../emitter'
import {auth} from '../firebase/config'
import {signOut} from 'firebase/auth'
import LogOut from '../Logout'


function Logout() {
    useEffect(()=>{
      console.log("Attempting to log you out in a minute.....")
      signOut(auth);
      //remove session and localstorage data
      sessionStorage.removeItem('_user');
      localStorage.removeItem('_user');
      console.log("Finished logging out.")
      Emitter.emit("logoutSuccess");
    })
  return (
    <div><LogOut/></div>
  )
}

export default Logout