import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='footer mx-auto max-w-360 bg-black grid md:grid-cols-5 sm:grid-cols-1  gap-25 py-10 px-4'>
               
               <div >
<h2 className=' text-2xl text-white '>CS — Ticket System</h2>
<p className='text-[#A1A1AA] max-w-[350px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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

            </div>
        </div>
    );
};

export default Footer;