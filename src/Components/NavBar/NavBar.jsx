import React from 'react';

const NavBar = () => {
    return (
        <div className='shadow-sm'>
            <div className="navbar mx-auto max-w-360">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl ">CS- Ticket System</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>ChangeLog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><a className=' bg-linear-to-r from-purple-700 to-purple-400'><span>+</span>New Ticket</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;