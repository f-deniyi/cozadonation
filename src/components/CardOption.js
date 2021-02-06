import React from 'react';
import flutterwave from '../assets/flutterwave.png'
import paypal from '../assets/paypal.png'
import cashapp from '../assets/cashapp.png'

import stripe from '../assets/stripe.png'


const CardOption = () => {
    const redirectUrl = (url) => {
        console.log(url);
        window.location.assign(url);
    }

    return (
        <div>
            <p  className='text-center mt-3' style={{color:'#efbc2f'}}>Select from the available options to donate</p>
            <div className='row text-center mt-4'>
                <div className='col-3'>
                    <div className='card-container rounded text-center p-2' onClick={() => redirectUrl('https://give.coza.org.ng/')}>
                        <img src={flutterwave} className='img-fluid' alt='flutterwave-logo' />
                    </div>
                    <p className=''>Flutterwave</p>
                </div>
                <div className='col-3'>
                    <div className='rounded card-container rounded text-center p-2 ' onClick={() => redirectUrl('https://cash.app/$GiveCoza')}>
                        <img src={paypal} className='img-fluid ' alt='paypal-logo' />
                    </div>
                    <p>Paypal</p>
                </div>
                <div className='col-3'>
                    <div className='rounded card-container  rounded text-center p-2' onClick={() => redirectUrl('https://cash.app/$GiveCoza')}>
                        <img src={cashapp} className='img-fluid' alt='cashapp-logo' />
                    </div>
                    <p>Cashapp</p>
                </div>
                <div className='col-3'>
                    <div className='rounded card-container  rounded text-center p-2' onClick={() => redirectUrl()}>
                        <img src={stripe} className='img-fluid' alt='stripe-logo' />
                    </div>
                    <p>Stripe</p>
                </div>
            </div >
        </div>

    )
}
export default CardOption;