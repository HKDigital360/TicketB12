import React from 'react';
import circleImg from "../../assets/icons8-circle-48.png"
const TicketCards = () => {
    return (


        // <div className='grid  md:grid-cols-2 p-3 '>

            <div className=' max-w-[100]  rounded-lg bg-white p-3'>

                <div className='flex
             justify-between '>
                    <h2>Login Issues - Can't Access Account</h2>
                    <div className='flex'><img src={circleImg} alt="" />
                        <h3>Open</h3>
                    </div>


                </div>

                <p>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <p>#1001</p>
                        <h4>HIGH PRIORITY</h4>
                    </div>
                    <div className='flex'>
                        <h4>John Smith</h4>
                        <h4>1/15/2024</h4>
                    </div>

                </div>
            </div>

        // </div>



    );
};

export default TicketCards;