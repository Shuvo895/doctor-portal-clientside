import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';


const Appointment = () => {
    return (
       <section className='mt-32'
       style={{
        background:`url(${appointment
        })`
       }}>
         <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} alt='' className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
    <div>
        <h2 className='text-xl font-bold text-sky-400'>Appointment</h2>
      <h1 className="text-white text-3xl font-bold">Make an appointment Today</h1>
      <p className=" text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary bg-sky-400">Get Started</button>
    </div>
  </div>
</div>
       </section>
    );
};

export default Appointment;