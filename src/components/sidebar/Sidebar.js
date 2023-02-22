import React, { useEffect } from 'react'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
 } from 'react-icons/md'
 import "./_sidebar.scss"
 import { getAuth, signOut } from "firebase/auth";
 import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logoutProfile } from '../../redux/loginSlice';
import { useNavigate } from 'react-router-dom';
import request from '../../api';

const Sidebar = ({sidebar, handleSidebar}) => {

   const dispatch = useDispatch()
   const navigate = useNavigate()
  

   const logoutHandler = () => {
      signOut(auth).then(() => {
         // Sign-out successful.
         sessionStorage.removeItem('ytc-user')
         dispatch(logoutProfile())
         navigate("/auth")
       }).catch((error) => {
         // An error happened.
       });
   }
  return (
    <nav
    className={sidebar? "sidebar open" : "sidebar"} 
    onClick={()=> handleSidebar(false)}>
  
       <li>
          <MdHome size={23} />
          <span>Home</span>
       </li>
   
       <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
       </li>
   

    <li>
       <MdThumbUp size={23} />
       <span>Liked Video</span>
    </li>

    <li>
       <MdHistory size={23} />
       <span>History</span>
    </li>

    <li>
       <MdLibraryBooks size={23} />
       <span>Library</span>
    </li>
    <li>
       <MdSentimentDissatisfied size={23} />
       <span>I don't Know</span>
    </li>

   
    <li onClick={logoutHandler}>
       <MdExitToApp size={23} />
       <span>Log Out</span>
    </li>

    <hr />
 </nav>
  )
}

export default Sidebar 