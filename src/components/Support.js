import React from 'react';
import food from '../assets/food.jpg'
import school from '../assets/school.jpg'
import water from '../assets/water.jpg'

const Support = () => {
    return (
        <div className='container mt-2 mb-5'>
            <div className='text-center mb-5'>
                <h2 style={{ color: '#efbc2f' }}>Donate Now</h2>
                <h6>Make a positive impact</h6>
            </div>
            <div className='row'>
                <div className='col-md-4 mb-3'>
                    <div class="card" >
                        <img src={school} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Study For Poor Children</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-3'>
                    <div className="card">
                        <img src={food} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Food For Old Ages</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div><div className='col-md-4 mb-3'>
                    <div className="card">
                        <img src={water} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pure Water For Everyone</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Support;