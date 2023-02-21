import React from 'react'
import "./_header.scss"

import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications, MdApps} from "react-icons/md"
import img from '../../assets/female-user-1.png'
import Search from '../search/Search'
const Header = ({handleSidebar}) => {
  return (
    <div className='border border-dark header'>
        <FaBars className='header__menu' 
        onClick={()=> handleSidebar()}
        size={26} />
        <img 
        src='https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png'
        alt=''
        className='header__logo'
        />
       <Search/>
        <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src={img}
            alt="avatar"
            />
        </div>
    </div>
  )
}

export default Header 