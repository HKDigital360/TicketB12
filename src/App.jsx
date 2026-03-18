
import './App.css'
import HeroBoard from './Components/HeroBoard/HeroBoard'
import MainTicketSection from './Components/MainTicketSection/MainTicketSection'
import NavBar from './Components/NavBar/NavBar'
import TicketCards from './Components/TicketCards/TicketCards'

const fetchTickets = async ()=>{
const res = await fetch("/ticket.json")
return res.json();
}
const ticketPromise = fetchTickets()
// console.log(ticketPromise);

function App() {
 

  return (
    <>
     
     <NavBar></NavBar>
     <HeroBoard></HeroBoard>
     <MainTicketSection ticketPromise={ticketPromise}></MainTicketSection>
    {/* <TicketCards></TicketCards> */}
    </>
  )
}

export default App
