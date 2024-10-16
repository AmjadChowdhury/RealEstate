import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import  "./Navbar.css"


const Navbar = () => {
  const { user,logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {
      alert('Successfully log out')
    })
    .catch(error => {
      console.log(error.message)
    })
       
  }
  const links = <>
      <NavLink to="/"><li className="btn bg-[#0000ff12] md:text-xl md:mr-1 mb-1 sm:w-full">Home</li></NavLink>
      <NavLink to="/categories"><li className="btn bg-[#0000ff12] md:text-xl sm:w-full">Categories</li></NavLink>
    </>
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
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-blue-950 font-bold">RealEstate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
          
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className="flex items-center gap-1">
            <div className="w-10 h-10 rounded-lg">
              <img className="w-full h-full" src={user?.photoURL} alt="" />
            </div>
            <button onClick={handleLogOut} className="btn bg-red-400 text-white">LogOut</button>
          </div> :
           <Link to="/login"><button className="btn bg-blue-700 text-white">LogIn</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
