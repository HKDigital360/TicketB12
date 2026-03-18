import React, { use } from 'react';
import TicketCards from '../TicketCards/TicketCards';

const MainTicketSection = ({ticketPromise}) => {
    const ticketData=use(ticketPromise);
     console.log(ticketData)
    return (
        <div className='mx-auto bg-[#edeef0] max-w-360  mt-20 flex justify-between gap-5'>

            <div className='w-3/4'>
            <h2 className='my-2.5 font-semibold text-2xl'>Customer Tickets</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-2 '>
            {
            ticketData.map(customerTicket=> <TicketCards></TicketCards>)
            }
            </div>
            </div>
            

            
            <div className='w-1/4  border-2 border-amber-600'>
            <h2 className='my-2.5 font-semibold text-2xl mx-3.5'>Task Status</h2>
            </div>


        </div>
    );
};

export default MainTicketSection;