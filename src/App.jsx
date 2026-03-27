
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
 
const [inProgress, setInProgress] = useState(0);
const [task, setTask] =useState([]);
const [complete, setComplete]= useState(false);
const [resolved, setResolved] = useState(0);
const [resolvedTasks, setResolvedTasks] = useState([]);

//  console.log(task)

  return (
    <>
     
     <NavBar></NavBar>
     <HeroBoard 
     inProgress={inProgress} setInProgress={setInProgress} complete={complete} setComplete={setComplete} resolved={resolved}>

     </HeroBoard>

     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>

      <MainTicketSection ticketPromise={ticketPromise} inProgress={inProgress} setInProgress={setInProgress} task={task} setTask={setTask}  complete={complete} setComplete={setComplete}
      resolved={resolved} setResolved={setResolved} resolvedTasks={resolvedTasks}
  setResolvedTasks={setResolvedTasks}
      >

      </MainTicketSection>
      
      </Suspense>
    {/* <TicketCards></TicketCards> */}
   
    </>
  )
}

export default App
