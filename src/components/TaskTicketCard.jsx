
const TaskTicketCard = ({ticket, handleResolvedTask}) => {
    return (
        <div className="bg-white shadow-xl mb-2 p-2 w-60 rounded flex flex-col gap-5">
            <p>{ticket.title}</p>
            <button className="btn btn-primary" onClick={()=>handleResolvedTask(ticket)}>Complete</button>
        </div>
    );
};

export default TaskTicketCard;