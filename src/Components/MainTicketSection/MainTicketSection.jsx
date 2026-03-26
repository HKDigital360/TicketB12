import React, { use } from 'react';
import TicketCards from '../TicketCards/TicketCards';
import TicketStatus from '../TicketStatus/TicketStatus';
import TicketSolve from '../TicketSolve/TicketSolve';

const MainTicketSection = ({ ticketPromise, handleClick, inProgress, setInProgress, task, setTask, complete, setComplete }) => {
    const ticketData = use(ticketPromise);



    return (
        <div className='mx-auto bg-[#edeef0] max-w-360  mt-20 flex justify-between gap-5'>

            <div className='w-3/4'>

                <h2 className='my-2.5 font-semibold text-2xl'>Customer Tickets</h2>

                <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-2 '>
                    {
                        ticketData.map(customerTicket => <TicketCards key={customerTicket.id} customerTicket={customerTicket}
                            inProgress={inProgress} setInProgress={setInProgress} handleClick={handleClick} task={task} setTask={setTask}></TicketCards>)
                    }
                </div>
            </div>

            <div className='w-1/4  '>
                {
                    //    ticketData.map(customerTicket =>
                    //         <TicketStatus key={customerTicket.id} customerTicket={customerTicket}  handleClick={handleClick}>

                    //         </TicketStatus>)
                    <TicketStatus task={task} setTask={setTask} complete={complete} setComplete={setComplete}></TicketStatus>

                    
                }

                     <TicketSolve> </TicketSolve>

            </div>

        </div>
    );
};

export default MainTicketSection;