import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Reviews from '../Review/Reviews';
import Services from '../Services/Services';
import Term from '../Term/Term';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Term></Term>
            <Appointment></Appointment>
            <Contact></Contact>
            <Reviews></Reviews>
            
            
        </div>
    );
};

export default Home;