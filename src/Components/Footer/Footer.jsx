import React from 'react';
import fImg from "../../assets/facebook.png"
import xImg from "../../assets/twitter.png"
import lImg from "../../assets/linkedin.png"
import mImg from "../../assets/email.png"
const Footer = () => {
    return (
        <div>
            <div className='footer mx-auto max-w-360 bg-black grid md:grid-cols-5 sm:grid-cols-1  gap-15 py-10 px-10'>
               
               <div >
<h2 className=' text-2xl text-white '>CS — Ticket System</h2>
<p className='text-[#A1A1AA] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>

<div>
    <h3 className="footer-title text-white text-xl">Company</h3>
    <a className="link link-hover text-[#A1A1AA]">About Us</a>
    <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
    <a className="link link-hover text-[#A1A1AA]">Contact Sale</a>
</div>
<div>
    <h3 className="footer-title text-white text-xl">Services</h3>
    <a className="link link-hover text-[#A1A1AA]">Products & Services</a>
    <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
    <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
</div>
<div>
    <h3 className="footer-title text-white text-xl">Information</h3>
    <a className="link link-hover text-[#A1A1AA]">Privacy Policy</a>
    <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
    <a className="link link-hover text-[#A1A1AA]">Join Us</a>
</div>
<div>
    <h3 className="footer-title text-white text-xl">Social Links</h3>
    <div className='flex gap-1.5'><img className='h-5 w-5 bg-yellow-50' src={fImg} alt="" /><a className="link link-hover text-[#A1A1AA]">@CS — Ticket System</a></div>
    <div className='flex gap-1.5'><img className='h-5 w-5 bg-yellow-50' src={xImg} alt="" /><a className="link link-hover text-[#A1A1AA]">@CS — Ticket System</a></div>
    <div className='flex gap-1.5'><img className='h-5 w-5 bg-yellow-50' src={lImg} alt="" /><a className="link link-hover text-[#A1A1AA]">@CS — Ticket System</a></div>
    <div className='flex gap-1.5'><img className='h-5 w-5 bg-yellow-50' src={mImg} alt="" /><a className="link link-hover text-[#A1A1AA]">support@cst.com</a></div>
</div>

            </div>

<div className='text-white border-t-2 border-gray-500 items-center text-center mx-auto max-w-360 bg-black py-3 mb-8'>
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
 
</div>
        </div>
    );
};

export default Footer;