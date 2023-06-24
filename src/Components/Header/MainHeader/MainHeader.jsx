import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import {
  HiMenu,
  HiOutlineGift,
  HiSearch,
  HiUsers,
} from "react-icons/hi";
import logo from "../../../Assets/img/logo.png";
import { AuthContext } from "../../../Context/UserContext";

const MainHeader = () => {
  const { user, logoutUser,cart } = useContext(AuthContext);
  const handleSearch = (e) =>{
  e.preventDefault();
  console.log(e.target.value);

  }
  // this is for log out function
  const handleLogOut = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-slate-900 sticky top-0 z-50">
      <div className="navbar max-w-screen-2xl mx-auto sticky top-0 z-50  flex justify-around drop-shadow-sm ">
        <div className="navbar-start flex justify-between gap-5 w-full">
          <div className="dropdown flex justify-between">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenu></HiMenu>
            </label>
          </div>

          <div>
            <Link to="/" className="w-[100px] md:w-[125px] relative">
              <img
                alt="Ichaporon"
                src={logo}
                className="w-24 h-24"
                decoding="async"
                data-nimg="responsive"
              />
            </Link>
          </div>

          {/* search box here */}
          <div className="grow hidden lg:block relative">
            <form
              method="post"
              className="h-10 md:h-11 flex items-center rounded overflow-hidden bg-white"
            >
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Type your product"
                className="font-SFProDisplayMedium h-full px-4 outline-none grow"
              />
              <button
                type="submit"
                className="h-full px-3 bg-orange-400 text-primary text-2xl"
              >
                <HiSearch className="h-6 text-gray-50"></HiSearch>
              </button>
            </form>
          </div>

          <div className="navbar-center hidden lg:flex gap-10">
            <div className="flex items-center gap-2">
              <div>
                <HiOutlineGift className="text-4xl text-gray-100"></HiOutlineGift>
              </div>
              <div>
                <p className="text-gray-100 text-xl">offers</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="indicator">
                <BsCart4 className="text-4xl text-gray-100"></BsCart4>
                <span className="badge badge-sm indicator-item bg-orange-500 text-gray-100">
                  {cart.length}
                </span>
              </div>
              <div>
                <Link to="/card" className="text-gray-100 text-xl">
                  Cart
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {user || user?.email || user?.uid || user?.displayName ? (
                <>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          src={user?.photoURL}
                          className="w-10 h-10 rounded-full"
                          alt="user"
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li className="">
                        <Link to="/blog">My Account</Link>
                      </li>
                      <li className="">
                        <Link to="/blog">My Order</Link>
                      </li>
                      <li className="">
                        <Link to="/card">My Cart</Link>
                      </li>
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/" onClick={handleLogOut}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <FaRegUser className="text-4xl text-gray-100"></FaRegUser>
                  </div>
                  <div>
                    <Link to="/login" className="text-gray-100 text-xl">
                      Account
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
