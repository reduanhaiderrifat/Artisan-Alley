import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <NavLink
        className="hover:bg-base-200 p-2 hover:rounded-lg"
        style={({ isActive, isTransiTion }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#fc9f27" : "",
            borderBottom: isActive ? "2px solid #fc9f27" : "",
            viewTimelineName: isTransiTion ? "silder" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="hover:bg-base-200 p-2 hover:rounded-lg"
        style={({ isActive, isTransiTion }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#fc9f27" : "",
            borderBottom: isActive ? "2px solid #fc9f27" : "",
            viewTimelineName: isTransiTion ? "silder" : "",
          };
        }}
        to="/allartscrafts"
      >
        All Arts&Crafts
      </NavLink>
      <NavLink
        className="hover:bg-base-200 p-2 hover:rounded-lg"
        style={({ isActive, isTransiTion }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#fc9f27" : "",
            borderBottom: isActive ? "2px solid #fc9f27" : "",
            viewTimelineName: isTransiTion ? "silder" : "",
          };
        }}
        to="/addartscrafts"
      >
        Add Arts & Crafts
      </NavLink>
      <NavLink
        className="hover:bg-base-200 p-2 hover:rounded-lg"
        style={({ isActive, isTransiTion }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#fc9f27" : "",
            borderBottom: isActive ? "2px solid #fc9f27" : "",
            viewTimelineName: isTransiTion ? "silder" : "",
          };
        }}
        to="/myartscrafts"
      >
        My Arts & Crafts
      </NavLink>
    </>
  );
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <div className="my-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="">
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden mr-2 hover:bg-slate-200 p-2 rounded-lg"
              >
                {open === true ? (
                  <IoCloseSharp size={30} />
                ) : (
                  <FaBarsStaggered size={30} />
                )}
              </button>
              <div
                className={`lg:hidden top-20 fixed inset-0 z-50 transition-transform ${
                  open
                    ? "transform-none duration-500 pointer-events-auto"
                    : "-translate-x-full pointer-events-none"
                }`}
              >
                <div className=" h-full w-64 ">
                  <ul className="bg-white p-4 px-6 space-y-5 flex flex-col rounded-r-lg">
                    {links}
                  </ul>
                </div>
              </div>
            </div>
            <button className="btn">Arts & Crafts</button>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6">{links}</ul>
          </div>

          <div className="">
            {loading ? (
              <div className="mr-8 ">
                <span className="loading loading-spinner loading-md"></span>
              </div>
            ) : user ? (
              // <div className=" flex items-center">
              //   <div className="dropdown dropdown-hover dropdown-left">
              //     <div tabIndex={0} role="button" className=" m-1">
              //       <img
              //         className="w-10 h-10 rounded-full"
              //         src={user.image}
              //         alt=""
              //       />
              //     </div>
              //     <ul
              //       tabIndex={0}
              //       className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              //     >
              //       <h2>{user.displayName}</h2>
              //     </ul>
              //   </div>
              //   <button onClick={handleLogOut} className="btn">
              //     logout
              //   </button>
              // </div>
              <div className="dropdown dropdown-hover dropdown-left ">
                <div tabIndex={0} role="button" className="btn m-1">
                  <img src={user.image} alt="" />
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] card card-compact  p-2 shadow bg-primary text-primary-content"
                >
                  <div className="card-body">
                    <img src={user.image} alt="" />
                    <h3 className="card-title">{user.displayName}</h3>
                    <p>{user.email}</p>
                  </div>
                  <button onClick={handleLogOut} className="">
                    logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="">
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/register" className="btn">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
