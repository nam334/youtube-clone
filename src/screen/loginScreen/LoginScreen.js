import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { login } from '../../redux/actions/auth.action'
import './loginScreen.scss'
import { getAuth, GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { loginSuccess, userProfile } from '../../redux/loginSlice';
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import img from '../../assets/googleLogo.png'
const LoginScreen = () => {
  const dispatch = useDispatch()
  const userData = useSelector(store => store.login.userData)
  const accessToken = useSelector(store => store?.login?.userData[0]?.accessToken)
  const navigate = useNavigate()

  useEffect(()=>{
    if(accessToken){
      navigate('/')
    }
    else navigate('/auth')
  },[accessToken, navigate])
  
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
  //const auth = getAuth();
  const handleLogin= () => {
   signInWithPopup(auth, provider) 
  .then((result) => {
    const user = result.user;
   
    const profile = {
       name : user.displayName ,
       image : user.photoURL ,
       accessToken : user.accessToken
    }

    // sessionStorage.setItem("ytc-access-token", user.accessToken)

    sessionStorage.setItem("ytc-user", JSON.stringify(profile))
    //dispatch(loginSuccess(accessToken))
    dispatch(userProfile(profile))

    // ...
  }).catch((error) => {
  
  });
 

   
  }
  return (
    <div className='login'>
        <div className='login__container'>
            <img 
            //src='https://i.ytimg.com/vi/KuMrlY3kCdM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHroQNOgFI5SpTIA6dTr0uPNJT8A'
            src='https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png'
            alt=''
            />
        </div>
        <button onClick={handleLogin} className='login__button'>
          <img src={img} alt='logo' className='login__button__img'/> Sign in with Google</button>
        {/* <p>This project is made using youtube api</p> */}
    </div>
  )
}

export default LoginScreen