import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Term = () => {
    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row lg:px-48 mt-10">
    <img src={treatment} className="h-96 w-72 rounded-lg shadow-2xl mx-10" />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental<br/> Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary bg-sky-400">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Term;