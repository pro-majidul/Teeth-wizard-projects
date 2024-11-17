import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../provider/Provider";

const Navbar = () => {
    const { user, LogoutUser, setUser } = useContext(AuthProvider)
    const handelLogOut = () => {
        LogoutUser()
            .then(resutl => {
                setUser(resutl.user)
            })
            .catch(error => {
                console.log(error.code);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success text-white font-normal text-lg' : ' font-normal text-lg btn'} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success text-white font-normal text-lg' : ' font-normal text-lg btn'} to='/teatments'>All Treatments</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success text-white font-normal text-lg' : ' font-normal text-lg btn'} to='/appoinment'>My Appoinments</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-success text-white font-normal text-lg' : ' font-normal text-lg btn'} to='/profile'>Profile</NavLink>

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-bold md:text-xl">TEETH WIZARD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-success text-white font-normal text-lg' : ' font-normal text-lg btn'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-success text-white font-normal text-lg' : ' font-normal text-lg btn'} to='/teatments'>All Treatments</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-success text-white font-normal text-lg' : ' font-normal text-lg btn'} to='/appoinment'>My Appoinments</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-success text-white font-normal text-lg' : ' font-normal text-lg btn'} to='/profile'>Profile</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email ? <div className="flex  gap-2 items-center">
                        <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                        <Link onClick={handelLogOut} className="btn text-lg font-normal">Log Out</Link>
                    </div>  : <Link to='/login' className="btn text-lg font-normal">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;