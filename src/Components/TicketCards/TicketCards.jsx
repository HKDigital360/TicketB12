
// import circleImg from "../../assets/icons8-circle-48.png"
import calenderImg from "../../assets/calendar.png"

const TicketCards = ({customerTicket,inProgress, setInProgress, task, setTask}) => {
    // console.log(customerTicket)

   function handleClick() {
    
    setInProgress(inProgress + 1);

    setTask([...task,customerTicket])
  }

//    const cusTicketHandle = ()=>{
// alert("Ticket Card Clicked")
// }

    return (


        // <div className='grid  md:grid-cols-2 p-3 '>

            <div onClick={()=>handleClick()} className=' max-w-100px transition-transform duration-300 hover:scale-101 hover:bg-sky-50 rounded-lg bg-white p-3'>

                <div className='flex
             justify-between '>
                    <h2 className='font-semibold text-xl'>{customerTicket.title}</h2>
                    {/* <div className='flex'><img src={circleImg} alt="" /> */}
                    <div className='flex items-center gap-2 bg-green-300 rounded-3xl h-6 p-1'>
                        <div className='w-4 h-4 bg-linear-to-r from-green-700 to-lime-400  relative rounded-full'></div>
                        <h3>{customerTicket.status}</h3>
                    </div>


                </div>

                <p className='text-[#627382] py-1.5'>{customerTicket.description}</p>
                <div className='flex justify-between pt-3'>
                    <div className='flex gap-3'>
                        <p>{customerTicket.id}</p>
                        <h4>{customerTicket.priority}</h4>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h4>{customerTicket.customer}</h4>
                        <img className='w-4 h-4' src={calenderImg} alt="" />
                        <h4>{customerTicket.createdAt}</h4>
                    </div>

                </div>
            </div>

        // </div>



    );
};

export default TicketCards;