import React from 'react';
import img from '../../../assets/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section style={{ backgroundImage: `url(${img})` }}>
       <footer className="footer p-10 bg-base-200 text-base-content items-center" >
  <div>
    <span className="footer-title">Services</span> 
    <Link className="link link-hover">Emergency Checkup</Link> 
    <Link className="link link-hover">Monthly Checkup</Link> 
    <Link className="link link-hover">Weekly Checkup</Link> 
    <Link className="link link-hover">Deep Checkup</Link>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <Link className="link link-hover">Fluoride Treatment</Link> 
    <Link className="link link-hover">Cavity Filling</Link> 
    <Link className="link link-hover">Teath Whitening</Link> 
  </div> 
  <div>
    <span className="footer-title">Address</span> 
    <Link className="link link-hover">Gulshan,Dhaka</Link> 
    
  </div>
  </footer>

  </section>
    );
};

export default Footer;