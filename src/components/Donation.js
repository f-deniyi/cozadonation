import React from 'react';
import { Link, NavLink, } from 'react-router-dom';
const Donation = (props) => {
    const children = props.children;
    return (
        <div className='vh-100 donation text-light'>
            <div className='text-center pt-5'>
                <h5>Give</h5>
            </div>
            <nav className='d-flex justify-content-around border-bottom border-success pt-4 pb-2'>
                <NavLink to='/' activeClassName='activeLink' className='text-center'>Card</NavLink>
                <NavLink to='/Transfer' className='text-center'>Transfer</NavLink>

            </nav>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}
export default Donation;