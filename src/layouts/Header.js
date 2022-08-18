import React from 'react'
import logo from '../assets/img/logo.svg'
import user from '../assets/img/user.svg'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>
        <div>
            <figure className='logo'><NavLink to="/"><img src={logo} alt="Logo" /></NavLink></figure>
            <nav className='header__menu'>
                <NavLink to="/" activeclassname="active">STORE</NavLink>
                <NavLink to="/faq" activeclassname="active">FAQ</NavLink>
                <NavLink to="/help" activeclassname="active">HELP</NavLink>
                <NavLink to="/unrealengine" activeclassname="active">UNREAL ENGINE</NavLink>
            </nav>
        </div>   
        <div>
            <button className='header__login'><img src={user} alt="Login" />SIGN IN</button>
            <button className='header__cart'>DOWNLOAD</button>
        </div>   
    </header>
  )
}

export default Header