import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Support from '../components/Support';
import Donate from '../components/Donate';
const View = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Support />
            <Donate />
            <Footer />
        </React.Fragment>
    )
}
export default View
