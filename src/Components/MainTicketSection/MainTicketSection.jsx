import React, { use } from 'react';
import TicketCards from '../TicketCards/TicketCards';
import TicketStatus from '../TicketStatus/TicketStatus';

const MainTicketSection = ({ ticketPromise, handleClick, count, setCount, task, setTask }) => {
    const ticketData = use(ticketPromise);



    return (
        <div className='mx-auto bg-[#edeef0] max-w-360  mt-20 flex justify-between gap-5'>

            <div className='w-3/4'>

                <h2 className='my-2.5 font-semibold text-2xl'>Customer Tickets</h2>

                <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-2 '>
                    {
                        ticketData.map(customerTicket => <TicketCards key={customerTicket.id} customerTicket={customerTicket}
                            count={count} setCount={setCount} handleClick={handleClick} task={task} setTask={setTask}></TicketCards>)
                    }
                </div>
            </div>

            <div className='w-1/4  '>
                {
                    //    ticketData.map(customerTicket =>
                    //         <TicketStatus key={customerTicket.id} customerTicket={customerTicket}  handleClick={handleClick}>

                    //         </TicketStatus>)
                    <TicketStatus task={task} setTask={setTask}></TicketStatus>

                }
            </div>

        </div>
    );
};

export default MainTicketSection;