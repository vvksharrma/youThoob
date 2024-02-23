import React, { useEffect } from 'react'
import './loginScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
    const dispatch = useDispatch()

    const handleLogin =()=>{
        dispatch(login())
    }
    const accessToken = useSelector(state=>state.auth.accessToken);
    const navigate =useNavigate();
    useEffect(()=>{
        if(accessToken){
            navigate('/')
        }
    },[accessToken,navigate])

  return (
    <div className="login">
        <div className="login__container">
            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='logo'/>
            <button onClick={handleLogin}>Login with google</button>
            <p>This Project is made using YOUTUBE API by <span><a href='https://www.linkedin.com/in/vvksharrma/'>@vvksharrma</a></span></p>
        </div>
    </div>
    )
}

export default LoginScreen