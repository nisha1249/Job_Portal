import React from 'react';
import './Header.css';
import logo from '../assets/logo2.jpg';

const Header = () => {
  return (
    <>
    <nav>
        <div className='navbar'>
        <img src={logo} alt='logo' />
        <div className='navbar-option'>
            <ul>
                <li>Jobs</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Login</li>
            </ul>
        </div>

        </div>
        
    </nav>
    </>
  )
}

export default Header