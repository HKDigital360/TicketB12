import React from 'react';

const TicketStatus = ({ task, customerTicket }) => {
    // console.log(ticketData.map=>(ticketData[0]));
    console.log(task)
    return (
        <div>
            <h2 className='my-2.5 font-semibold text-2xl mx-3.5'>Task Status</h2>

{
    task.map(taskStatus=><div className='bg-white rounded-xl p-3 my-2 mr-2  border-b-emerald-400'>
        <h4 className='my-2.5 font-semibold text-xl mx-3.5'>{taskStatus.title}</h4>
            <h3>{taskStatus.customer}</h3>
            <h4>{taskStatus.status}</h4>
            
            
            </div>)
}
            {/* <div className='bg-white rounded-xl p-3  border-b-emerald-400'>
            <h3>{task.customer}</h3>
            </div> */}
        </div>
    );
};

export default TicketStatus;