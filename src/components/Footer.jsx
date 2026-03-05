import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-black text-white p-15">
            <div className="flex flex-col md:flex-row justify-center gap-5">
                <div className="md:w-[25%] space-y-3">
                    <p className="text-3xl">CS-Ticket System</p>
                    <p className="text-justify text-gray-400">This project is a React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using React-Toastify.</p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-3">

                    <div className="space-y-3">
                        <p>Company</p>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <a href="/" className="text-gray hover:text-white">About Us</a>
                            <a href="/" className="text-gray hover:text-white">Our Mission</a>
                            <a href="/" className="text-gray hover:text-white">Contact Saled</a>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p>Services</p>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <a href="/" className="text-gray hover:text-white">Products & Services</a>
                            <a href="/" className="text-gray hover:text-white">Customer Stories</a>
                            <a href="/" className="text-gray hover:text-white">Download Apps</a>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p>Information</p>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <a href="/" className="text-gray hover:text-white">Privacy Policy</a>
                            <a href="/" className="text-gray hover:text-white">Terms & Conditions</a>
                            <a href="/" className="text-gray hover:text-white">Join Us</a>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p>Social Links</p>
                        <div className="flex flex-col gap-2 text-gray-400 ">
                            <div className="flex items-center justify-center hover:text-white">
                                <FaSquareXTwitter className=""/><a href="/" className="text-gray ">@CS — Ticket System</a>
                            </div>
                            <div className="flex items-center justify-center hover:text-white">
                                <FaSquareXTwitter className=""/><a href="/" className="text-gray ">@CS — Ticket System</a>
                            </div>
                            <a href="/" className="text-gray hover:text-white">@CS — Ticket System</a>
                            <a href="/" className="text-gray hover:text-white">@CS — Ticket System</a>
                            <a href="/" className="text-gray hover:text-white">@CS — Ticket System</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t text-center mt-5">
                <p className="mt-5">© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;