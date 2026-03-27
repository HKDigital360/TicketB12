import React from 'react';

const TicketSolve = ({resolvedTasks, setResolvedTasks}) => {
console.log(resolvedTasks)
    
    return (
        <div >

            <div className='text-xl font-semibold  mt-6'>
                <h2>Ticket Resolve</h2>
            </div>
        <div className=' bg-white rounded-lg p-3 my-2 mr-2  border-b-emerald-400'>
            <p>No Task Resolved yet</p>
        </div>

        </div>
    );
};

export default TicketSolve;