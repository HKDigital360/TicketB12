import React from 'react';
import { toast } from 'react-toastify';

const TicketStatus = ({ task,setTask, inProgress, setInProgress, complete, setComplete, resolved, setResolved, resolvedTasks, setResolvedTasks}) => {
    // console.log(ticketData.map=>(ticketData[0]));
    // console.log(task)
    // console.log(complete)

function  handleComplete (tComplete){
    
    
setComplete(true);
setInProgress(inProgress - 1);
setResolved(resolved + 1);
setTask(task.filter(taskStatus => taskStatus.id !== tComplete.id));
const completedTask = (task.find(taskStatus => taskStatus.id !== tComplete.id));
setResolvedTasks([...resolvedTasks, tComplete])
toast("Task Completed")
}

    return (
        <div>
            <h2 className=' my-2.5 whitespace-nowrap font-semibold text-2xl '>Task Status</h2>

            {
                task.map(taskStatus => <div className='bg-white rounded-lg p-3 my-2 mr-2  border-b-emerald-400 '>
                    <h4 className='my-2.5 font-semibold text-xl mx-3.5'>{taskStatus.title}</h4>
                    <button onClick={() =>handleComplete(taskStatus)}
                         className = "btn btn-accent bg-[#02A53B] transition-transform duration-300 hover:scale-105 text-white items-center w-full" > {complete ?  " Completed !" : " Complete"}</button>
            </div>)
}
{/* <div className='bg-white rounded-xl p-3  border-b-emerald-400'>
            <h3>{task.customer}</h3>
            </div> */}
        </div >
    );
};

export default TicketStatus;