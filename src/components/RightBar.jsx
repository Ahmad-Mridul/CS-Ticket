import ResolvedTask from "./ResolvedTask";
import TaskTicketCard from "./TaskTicketCard";

const RightBar = ({selectedTickets, handleResolvedTask, resolvedTickets}) => {
    return (
        <div className="md:w-[15%]">
            <p className="text-2xl mb-5">Task Status</p>
            {
                selectedTickets.map(ticket=><TaskTicketCard key={ticket.id} ticket={ticket} handleResolvedTask={handleResolvedTask}/>)
            }
            <p className="text-2xl mb-5">Resolved Task</p>
            {
                resolvedTickets.map(ticket=><ResolvedTask key={ticket.id} ticket={ticket}/>)
            }
        </div>
    );
};

export default RightBar;