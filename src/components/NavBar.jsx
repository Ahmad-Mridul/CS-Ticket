
const NavBar = () => {
    const links = <>
        <li><a href="/">Home</a></li>
        <li><a href="/">FAQ</a></li>
        <li><a href="/">Changelog</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Download</a></li>
        <li><a href="/">Contact</a></li>
    </>
    return (
        <div className="navbar md:px-15 bg-white text-black shadow-sm">
            <div className="navbar-start">
                <div className="dropdown bg-white">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-white rounded-b z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CS - Ticket System</a>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div> */}
            <div className="navbar-end">
                <ul className="hidden md:flex menu menu-horizontal px-1">
                    {links}
                </ul>
                <a className="btn btn-primary bg-linear-65 from-[#632EE3] to-[#9F62F2]">+ New Ticket</a>
            </div>
        </div>
    );
};

export default NavBar;