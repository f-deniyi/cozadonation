import React from 'react';
import logo from '../assets/logo.png'
const Header = () => {
    return (
            <nav class="navbar fixed-top">
                <a className="navbar-brand" href='/' >
                    <img src={logo} style={{width:"150%", height:"90%"}} className="d-inline-block align-top" alt="" />
                </a>
                <h2 className='text-light'>COZA Donation</h2>
            </nav>
    )
}
export default Header;