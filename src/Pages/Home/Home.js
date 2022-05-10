import React from 'react';
import Footer from '../Shares/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import MiddleBanner from './MiddleBanner';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='p-12'>
            <Banner/>
            <Info/>
            <Services/>
            <MiddleBanner/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
            
        </div>
    );
};

export default Home;