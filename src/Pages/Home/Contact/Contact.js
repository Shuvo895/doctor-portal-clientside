import React from 'react';
import contact from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className="hero min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${contact})` }}>
            
            <div className="form-control w-full max-w-xs p-5 ">
            <h5 className='text-sky-600 text-xl items-center'>Contact Us </h5>
            <h2 className='text-white text-3xl mb-4'>Stay With Us</h2>
                <input className='h-10 rounded-lg' type='text' placeholder='Email Address'></input>
                <input className='h-10 my-8 rounded-lg' type='text' placeholder='Subject'></input>
                <input className='h-20 rounded-lg' type='text' placeholder='your message'></input>
                <button className='btn btn-info mt-6' type='submit'>Submit</button>
            </div>
        </div>
    );
};

export default Contact;