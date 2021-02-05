import React from 'react';
const Donation = (props) => {
    const children = props.children;
    return (
        <div className='vh-100 donation'>
            <div className='text-center'>
                <h5>Give</h5>
            </div>
            <div className='d-flex'>
                <h3>Card</h3>
                <h3>Transfer</h3>
            </div>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}
export default Donation;