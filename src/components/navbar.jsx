import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                {/* 1. Use <Link> for the logo to go home */}
                {/* 2. Put <img> directly inside */}
                <Link to='/'>
                    <img src='/images/logo.png' alt="Logo" />
                </Link>
                
                <ul>
                    {/* 3. Put <li> *inside* the <Link> */}
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/about'>About-Us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/login'>Login/Register</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;