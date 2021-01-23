import React from 'react';
import { Form, Col } from 'react-bootstrap'
const Donate = () => {
    return (
        <div className='donate py-5'>
            <div className='mx-auto w-50'>
                <Form className='bg-light rounded p-3'>
                    <div className='text-center'>
                        <h6>Make a Donation</h6>
                        <p style={{ color: '#efbc2f' }}>Let's make a change</p>
                    </div>
                    <Form.Group controlId="Card Number">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="Number" placeholder="Card Number" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="Expiry">
                            <Form.Label>Expiry</Form.Label>
                            <Form.Control type="text" placeholder="Expiry" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="CVV">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control type="number" placeholder="CVV" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="Amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Amount" />
                    </Form.Group>


                    <button className='w-100 p-2 font-weight-bold btn' style={{ backgroundColor: '#efbc2f', color: 'white' }} type="submit">
                        Donate
                     </button>
                </Form>
            </div>
        </div >
    )
}
export default Donate