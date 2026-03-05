import tickets from "../data/AllTickets";
import Ticket from "./Ticket";

const Tickets = ({handleSelectedTickets, resolvedTickets}) => {
    const allTickets = tickets();
    const unResolvedTickets = allTickets.filter(ticket=>!resolvedTickets.some(res=>res.id===ticket.id))
    return (
        <div className='md:w-[75%]'>
            <p className="text-3xl font-bold mb-5">Customer Tickets: {unResolvedTickets.length}</p>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    unResolvedTickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} handleSelectedTickets={handleSelectedTickets}/>)
                }
            </div>
        </div>
    );
};

export default Tickets;