
import { Suspense, useState } from 'react'
import './App.css'
import HeroBoard from './Components/HeroBoard/HeroBoard'
import MainTicketSection from './Components/MainTicketSection/MainTicketSection'
import NavBar from './Components/NavBar/NavBar'
import TicketCards from './Components/TicketCards/TicketCards'
// import TicketStatus from './Components/TicketStatus/TicketStatus'

const fetchTickets = async ()=>{
const res = await fetch("/ticket.json")
return res.json();
}

const ticketPromise = fetchTickets()

// console.log(ticketPromise);





function App() {
 
const [count, setCount] = useState(0);
const [task, setTask] =useState([])
//  console.log(task)

  return (
    <>
     
     <NavBar></NavBar>
     <HeroBoard count={count} setCount={setCount}></HeroBoard>
     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <MainTicketSection ticketPromise={ticketPromise} count={count} setCount={setCount} task={task} setTask={setTask} ></MainTicketSection>
      
      </Suspense>
    {/* <TicketCards></TicketCards> */}
   
    </>
  )
}

export default App
