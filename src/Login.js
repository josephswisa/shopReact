import React from "react";
import {useState} from "react";
import {User} from "./User";

function Login(setLogged) {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const [userLogin,setUserLogin]=useState('')
    const [passLogin,setPassLogin]=useState('')


    let newUser = new User(',',',',',','')
    const [login,setLogin]= useState(true)

    const changeAuthMode=()=> {
        setLogin(!login)
    }
    const onUserLogin=(e)=>{
        setUserLogin(e.target.value)
    }
    const onPassLogin=(e)=>{
        setPassLogin(e.target.value)
    }


    const onUser=(e)=>{
        setUsername(e.target.value)
    }
    const onEmail=(e)=>{
        setEmail(e.target.value)
    }
    const onName=(e)=>{
        setName(e.target.value)
    }
    const onPassword=(e)=>{
        setPassword(e.target.value)
    }

    const onSignup=()=>{
        newUser.email = email;
        newUser.username = username;
        newUser.name = name;
        newUser.password = password;
        console.log(newUser)
        changeAuthMode()
    }

    const onLogin=()=> {
        setLogged()
    }

    return(
        <div>
            {login ?
                <div>
                LOGIN:
                <br/>
                    Don't have a user? <a onClick={changeAuthMode}> Sign up!</a>
                <br/>
                <input placeholder={"Enter your username"} onClick={onUserLogin}/>
                <br/>
                <input placeholder={"Enter your password"} onClick={onPassLogin}/>
                <br/>
                <button onClick={onLogin}>Login</button>
                </div>
                :
                <div>
                    SIGNUP:
                    <br/>
                    Already have a user? <a onClick={changeAuthMode}> Sign in!</a>
                    <br/>
                    <input placeholder={"Enter your username"} onChange={onUser}/>
                    <br/>
                    <input placeholder={"Enter your e-mail"} onChange={onEmail}/>
                    <br/>
                    <input placeholder={"Enter your name"} onChange={onName}/>
                    <br/>
                    <input placeholder={"Enter your password"} onChange={onPassword}/>
                    <br/>
                    <button onClick={onSignup}>SUBMIT</button>
                </div>
            }
        </div>
    )
}

export default Login