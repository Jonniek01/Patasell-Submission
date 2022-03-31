import React, { useEffect } from 'react'
import Emitter from './emitter';
import axios from 'axios';
import Page from './Page'
import LogIn from './LogIn'
// import LogOut from './LogOut'

import Logout from './Pages/Logout';
import {CreateAccount} from './Pages/CreateAccount';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';

window.axios = axios;
window.SERVER_URL='http://localhost:5000';

function App() {
    const [loggedIn,setLoggedIn]=useState(sessionStorage.getItem('_user')?true:false);
    useEffect(()=>{
        Emitter.on("loginSuccess",(user)=>{
            setLoggedIn(true);
        });
        Emitter.on('logoutSuccess',()=>{
            this.setLoggedIn(false);
        })
    })

    if (loggedIn===true){
        return (
            <div><Page /></div>
          )
        

    }
    else{
        return(
            <div>
            
                <BrowserRouter>
                <Routes>
                <Route path='/' element={<LogIn/>} exact/>
                <Route path='/login' element={<LogIn/>} exact/>
                <Route path='/createAccount' element={<CreateAccount/>} exact/>
                <Route path='/logout' element={<Logout/>} exact/>
                </Routes>
                </BrowserRouter>
            </div>

        )
    }
}

export default App
