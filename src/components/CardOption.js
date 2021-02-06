import React from 'react';
import flutterwave from '../assets/flutterwave.png'
import paypal from '../assets/paypal.png'
import cashapp from '../assets/cashapp.png'



const CardOption = () => {
    const redirectUrl = (url) => {
        console.log(url);
        window.location.assign(url);
    }

    return (
        <div>
            <p  className='text-center mt-3' >Select from the available options to donate</p>
            <div className='row text-center mt-4'>
                <div className='col-4'>
                    <div className='card-container rounded text-center p-2' onClick={() => redirectUrl('https://give.coza.org.ng/')}>
                        <img src={flutterwave} className='img-fluid' alt='flutterwave-logo' />
                    </div>
                    <p className=''>Flutterwave</p>
                </div>
                <div className='col-4'>
                    <div className='rounded card-container rounded text-center p-2 ' onClick={() => redirectUrl('https://paypal.me/COZAGLOBAL')}>
                        <img src={paypal} className='img-fluid ' alt='paypal-logo' />
                    </div>
                    <p>Paypal</p>
                </div>
                <div className='col-4'>
                    <div className='rounded card-container  rounded text-center p-2' onClick={() => redirectUrl('https://cash.app/$GiveCoza')}>
                        <img src={cashapp} className='img-fluid' alt='cashapp-logo' />
                    </div>
                    <p>Cashapp</p>
                </div>
            </div >
        </div>

    )
}
export default CardOption;