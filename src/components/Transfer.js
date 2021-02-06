import React, { useState } from 'react';
import access from '../assets/access.png'
import gtb from '../assets/gtb.png'
import zenith from '../assets/zenith.png'
import firstbank from '../assets/firstbank.png'
import uba from '../assets/uba.png'
import ecobank from '../assets/ecobank.png'

const Transfer = () => {
    const [clicked, updateClicked] = useState(false);
    const copyAccountNumber = () => {
        updateClicked(!clicked);
        navigator.clipboard.writeText(1013275906)
    }


    const [gtbAmount, updategtbAmount] = useState('');
    const handleGtbAmount = (e) => {
        console.log(e.target.value);
        updategtbAmount(e.target.value);
    }


    const [accessAmount, updateAccessAmount] = useState('');
    const handleAccessAmount = (e) => {
        console.log(e.target.value);
        updateAccessAmount(e.target.value);
    }

    const [zenithAmount, updateZenithAmount] = useState('');
    const handleZenithAmount = (e) => {
        console.log(e.target.value);
        updateZenithAmount(e.target.value);
    }

    const [firstBankAmount, updateFirstBankAmount] = useState('');
    const handleFirstBankAmount = (e) => {
        console.log(e.target.value);
        updateFirstBankAmount(e.target.value);
    }

    const [UBAAmount, updateUBAAmount] = useState('');
    const handleUBAAmount = (e) => {
        console.log(e.target.value);
        updateUBAAmount(e.target.value);
    }

    const [EcobankAmount, updateEcobankAmount] = useState('');
    const handleEcobankAmount = (e) => {
        console.log(e.target.value);
        updateEcobankAmount(e.target.value);
    }

    return (
        <div className='mt-3'>
            <p className='text-center'>For Bank Transfers. Kindly use your banking application</p>
            <div className='transfer-container mb-3 p-2'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-2'>
                        <img src={zenith} className='img-fluid' alt='zenith-bank' />
                    </div>
                    <div className='col-4 text-center'>
                        <p className='mb-0'>Naira Account</p>
                        <p className='mb-0'>1013275906</p>
                    </div>
                    <div className='col-6'>
                        <button className='btn font-weight-bold btn-warning' onClick={copyAccountNumber}>
                            {clicked ? 'Number Copied' : 'Copy Account number'}
                        </button>
                    </div>
                </div>
            </div>

            <h6 className='text-center font-weight-bold my-4'>Transfer Options</h6>


            <div className='transfer-container mb-3 p-2'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-2'>
                        <img src={access} className='img-fluid' alt='zenith-bank' />
                    </div>
                    <div className='col-6 mb-2 '>
                        <p className='mb-0 text-center'>*426*000*306*</p>
                        <input className='rounded form-control w-100 px-2' onChange={handleAccessAmount} type='number' placeholder='Input amount' />
                    </div>
                    <div className='col-3'>
                        <a className='btn font-weight-bold btn-warning' onClick={() => console.log(accessAmount)} href={`tel:*426*000*306*${accessAmount}#`}>
                            Give
                    </a>
                    </div>
                </div>
            </div>

            <div className='transfer-container mb-3 p-2'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-2'>
                        <img src={gtb} className='img-fluid' alt='zenith-bank' />
                    </div>
                    <div className='col-6 mb-2 '>
                        <p className='mb-0 text-center'>*737*000*306*</p>
                        <input className='rounded form-control w-100 px-2' onChange={handleGtbAmount} type='number' placeholder='Input amount' />
                    </div>
                    <div className='col-3'>
                        <a className='btn font-weight-bold btn-warning' onClick={() => console.log(gtbAmount)} href={`tel:*737*000*306*${gtbAmount}#`}>
                            Give
                    </a>
                    </div>
                </div>
            </div>





            <div className='transfer-container mb-3 p-2'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-2'>
                        <img src={zenith} className='img-fluid' alt='zenith-bank' />
                    </div>
                    <div className='col-6 mb-2 '>
                        <p className='mb-0 text-center'>*996*000*306*</p>
                        <input className='rounded form-control w-100 px-2' onChange={handleZenithAmount} type='number' placeholder='Input amount' />
                    </div>
                    <div className='col-3'>
                        <a className='btn font-weight-bold btn-warning' onClick={() => console.log(zenithAmount)} href={`tel:*996*000*306*${zenithAmount}#`}>
                            Give
                    </a>
                    </div>
                </div>
            </div>


            <div className='transfer-container mb-3 p-2'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-2'>
                        <img src={firstbank} className='img-fluid' alt='zenith-bank' />
                    </div>
                    <div className='col-6 mb-2 '>
                    <p className='mb-0 text-center'>*894*000*306*</p>
                        <input className='rounded form-control w-100 px-2' onChange={handleFirstBankAmount} type='number' placeholder='Input amount' />
                    </div>
                    <div className='col-3'>
                        <a className='btn font-weight-bold btn-warning' onClick={() => console.log(firstBankAmount)} href={`tel:*894*000*306*${firstBankAmount}#`}>
                            Give
                    </a>
                    </div>
                </div>
            </div>


            <div className='transfer-container mb-3 p-2'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-2'>
                        <img src={uba} className='img-fluid' alt='zenith-bank' />
                    </div>
                    <div className='col-6 mb-2 '>
                        <p className='mb-0 text-center'>*919*000*306*</p>
                        <input className='rounded form-control w-100 px-2' onChange={handleUBAAmount} type='number' placeholder='Input amount' />
                    </div>
                    <div className='col-3'>
                        <a className='btn font-weight-bold btn-warning' onClick={() => console.log(UBAAmount)} href={`tel:*919*000*306*${UBAAmount}#`}>
                            Give
                    </a>
                    </div>
                </div>
            </div>


            <div className='transfer-container mb-3 p-2'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-2'>
                        <img src={ecobank} className='img-fluid' alt='zenith-bank' />
                    </div>
                    <div className='col-6 mb-2 '>
                        <p className='mb-0 text-center'>*326*000*306*</p>
                        <input className='rounded form-control w-100 px-2' onChange={handleEcobankAmount} type='number' placeholder='Input amount' />
                    </div>
                    <div className='col-3'>
                        <a className='btn font-weight-bold btn-warning' onClick={() => console.log(EcobankAmount)} href={`tel:*326*000*306*${EcobankAmount}#`}>
                            Give
                    </a>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Transfer;