import React from 'react';

const TicketSolve = ({resolvedTasks}) => {
console.log(resolvedTasks)
    
    return (
        <div >

           <div className=''>
            <div className='text-xl font-semibold mt-6 whitespace-nowrap'>
                <h2>Ticket Resolve</h2>
            </div>
            {resolvedTasks.length === 0
                ? <div className='bg-white rounded-lg p-3 my-2 mr-2 w-full'>
                    <p>No Task Resolved yet</p>
                  </div>
                : resolvedTasks.map(ticket => (
                    <div  className='bg-white rounded-lg p-3 my-2 mr-2'>
                        <h4 className='font-semibold'>{ticket.title}</h4>
                        <p className='text-green-600 text-sm'>✓ Resolved</p>
                    </div>
                ))
            }
        </div>

        </div>
    );
};

export default TicketSolve;