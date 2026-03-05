
import { ToastContainer, toast  } from 'react-toastify'
import './App.css'
import BannerCard from './components/BannerCard'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import RightBar from './components/RightBar'
import Tickets from './components/Tickets'
import { useState } from 'react'

function App() {
  const [selectedTickets, setSelectedTicket] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const handleSelectedTickets = (ticket) => {
    if (selectedTickets.some(t => t.id === ticket.id)) {
      return toast("Already in progress");
    } else {
      const newTickets = [...selectedTickets, ticket]
      setSelectedTicket(newTickets);
      toast('In Progress !')
    }

  }
  const handleResolvedTask = (ticket) => {
    toast(`"${ticket.title}" has been resolved`);
    const filteredTickets = selectedTickets.filter(t => t.id !== ticket.id);
    const newResolvedTickets = [...resolvedTickets, ticket];
    setResolvedTickets(newResolvedTickets);
    setSelectedTicket(filteredTickets);
  }
  return (
    <div className='bg-gray-200 text-black'>
      <NavBar />
      <div className='flex justify-center items-center gap-5 p-15'>
        <BannerCard selectedTickets={selectedTickets} title="In Progress" style="from-purple-600 to-purple-500" />
        <BannerCard selectedTickets={resolvedTickets} title="Resolved" style="from-[#54CF68] to-[#00827A]" />
      </div>
      <div className="flex md:flex-row flex-col-reverse md:p-15 p-5 gap-2">
        <Tickets handleSelectedTickets={handleSelectedTickets} resolvedTickets={resolvedTickets} />
        <RightBar selectedTickets={selectedTickets} resolvedTickets={resolvedTickets} handleResolvedTask={handleResolvedTask}></RightBar>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
