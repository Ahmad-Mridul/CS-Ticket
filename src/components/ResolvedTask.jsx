
const ResolvedTask = ({ ticket }) => {
    return (
        <div className="bg-green-300 shadow-xl mb-2 p-2 w-60 rounded flex flex-col gap-5">
            <p>{ticket.title}</p>
        </div>
    );
};

export default ResolvedTask;