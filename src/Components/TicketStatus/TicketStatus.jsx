import React from 'react';

const TicketStatus = ({ task,inProgress, setInProgress, complete, setComplete }) => {
    // console.log(ticketData.map=>(ticketData[0]));
    // console.log(task)
    // console.log(complete)

function  handleComplete (taskStatus){
    console.log(taskStatus)
setComplete(true);
setInProgress(inProgress - 1)
}

    return (
        <div>
            <h2 className='my-2.5 font-semibold text-2xl mx-3.5'>Task Status</h2>

            {
                task.map(taskStatus => <div className='bg-white rounded-lg p-3 my-2 mr-2  border-b-emerald-400'>
                    <h4 className='my-2.5 font-semibold text-xl mx-3.5'>{taskStatus.title}</h4>
                    <button onClick={() =>handleComplete()}
                         className = "btn btn-accent bg-[#02A53B] text-white items-center w-full" > {complete ?  " Completed !" : " Complete"}</button>
            </div>)
}
{/* <div className='bg-white rounded-xl p-3  border-b-emerald-400'>
            <h3>{task.customer}</h3>
            </div> */}
        </div >
    );
};

export default TicketStatus;