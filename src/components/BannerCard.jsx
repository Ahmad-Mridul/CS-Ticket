const BannerCard = ({title, style, selectedTickets}) => {
    return (
        <div className={`relative w-full overflow-hidden md:h-48 h-30 flex justify-center items-center rounded-xl 
                bg-linear-to-r  text-white ${style}`}>
            <img
                src="/vector1.png"
                alt="vector"
                className="absolute right-0  "
            />
            <img
                src="/vector1.png"
                alt="vector"
                className="absolute left-0"
            />

            {/* Content */}
            <div className="text-center">
                <p className="text-lg font-medium">{title}</p>
                <h1 className="text-5xl font-bold">{selectedTickets.length}</h1>
            </div>
        </div>
    );
};

export default BannerCard;