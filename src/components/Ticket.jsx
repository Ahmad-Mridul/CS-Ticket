import { CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const Ticket = ({ ticket,handleSelectedTickets }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;

    return (
        <div className="bg-white p-4 shadow-xl rounded space-y-3 cursor-pointer" onClick={()=>handleSelectedTickets(ticket)}>
            <div className="flex justify-between">
                <p className="text-xl ">{title}</p>
                <div className={`${status === "Open" ? "bg-green-200" : "bg-[#F8F3B9]"}  px-3 rounded flex justify-center items-center`}>
                    <p className={`${status === "Open" ? "text-green-500" : "text-yellow-400"}`}><GoDotFill /></p>
                    <p>{status}</p>
                </div>
            </div>
            <p>{description.slice(0,45)+"......"}</p>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex justify-between gap-2">
                    <p>#{id}</p>
                    <p className={`${priority === "High" ? "text-red-500" : "text-yellow-400"}`}>{priority}</p>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <p>{customer}</p>
                    <div className="flex items-center gap-1">
                        <CiCalendar />
                        <p>{createdAt.split("T")[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;