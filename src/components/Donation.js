import React from 'react';
import { NavLink, } from 'react-router-dom';
const navStyle = { textDecoration: 'none', color: 'white', fontSize: '1.1em' }
const Donation = (props) => {
    const children = props.children;

    return (
        <div className='vh-100 donation overflow-auto text-light'>
            <div className='text-center pt-5'>
                <h5>Give</h5>
            </div>
            <nav className='d-flex justify-content-around py-3 px-4' style={{borderColor:' #2e0049'}}>
                <NavLink exact to='/' style={navStyle} activeClassName='activeLink' className='text-center '>Card</NavLink>
                <NavLink exact to='/Transfer' style={navStyle} activeClassName='activeLink' className='text-center'>Transfer</NavLink>
            </nav>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}
export default Donation;