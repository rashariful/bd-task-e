import React from "react";
import { HiDesktopComputer, HiDeviceMobile, HiMenu } from "react-icons/hi";
import { GoDeviceDesktop, GoGift, IconName } from "react-icons/go";
import { GiKevlar, } from "react-icons/gi";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="bg-slate-800">
      <div className="flex justify-between max-w-screen-2xl mx-auto">
        {/* all category start*/}

        <div className="flex items-center cursor-pointer gap-3 h-12 w-52 px-3 bg-rose-500 relative group">

          <HiMenu className="text-slate-100 text-2xl"></HiMenu>
          <p className="text-slate-100 font-semibold">Browse Categories</p>
          
          <div className="absolute left-0 w-full top-full py-3 shadow-md bg-white rounded-b-md z-30 opacity-0 group-hover:opacity-100 transition duration-700 invisible group-hover:visible">
            <ul className="divide-y divide-slate-200 divide-dashed capitalize">
              <li className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition">
                <HiDeviceMobile className="w-5 h-5"></HiDeviceMobile>
                <Link to="/blog">phones-gadgets</Link>
              </li>
              <li className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition">
                <GoDeviceDesktop className="w-5 h-5"></GoDeviceDesktop>
                <Link to="/blog">computer-office</Link>
              </li>
              <li className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition">
                <HiMenu className="w-5 h-5"></HiMenu>
                <Link to="/blog">grocery-organic-dairy</Link>
              </li>
              <li className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition">
                <GiKevlar className="w-5 h-5"></GiKevlar>
                <Link to="/blog">womens-fashion</Link>
              </li>
              <li className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition">
                <HiMenu className="w-5 h-5"></HiMenu>
                <Link to="/blog">mens-fashion</Link>
              </li>
              <li className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition">
                <HiMenu className="w-5 h-5"></HiMenu>
                <Link to="/blog">kids-babies-toys</Link>
              </li>
              <li className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition">
                <HiMenu className="w-5 h-5"></HiMenu>
                <Link to="/blog">beauty-health-hair</Link>
              </li>
              <li className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition">
                <HiMenu className="w-5 h-5"></HiMenu>
                <Link to="/blog">others</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* all category end*/}

        {/* navbar links*/}
        <div className="flex items-center">
          <ul className="flex justify-center text-gray-100 gap-5 capitalize font-semibold">
            <li>
              <a href="/#">home</a>
            </li>
            <li>
              <a href="/#">today's deals</a>
            </li>
            <li>
              <a href="/#">trending products</a>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <a href="/#">special offers</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
