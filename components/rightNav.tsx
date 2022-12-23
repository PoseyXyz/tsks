import React from "react";
import { BsBrushFill } from "react-icons/bs";
import { FaBookOpen, FaShoppingCart, FaUser } from "react-icons/fa";

export default function RightNav() {
    return (
        <nav className="flex-col gap-8 bg-[#20212C] hidden md:flex min-h-screen md:min-w-[40vh] sticky lg:min-w-[24vh] p-6">
            <h2 className="text-2xl mb-5">Collections</h2>
            <button className="flex gap-3 items-center text-lg text-[#403F51] hover:text-white duration-500 group">
                <i className={`shadow-2xl bg-[#F8769F] p-4 rounded-2xl self-start text-white group-hover:bg-transparent border border-transparent group-hover:border-[#f8769f] duration-500`}><FaBookOpen/></i>
                School
            </button>
            <button className="flex gap-3 items-center text-lg text-[#403F51] hover:text-white duration-500 group">
                <i className={`shadow-2xl bg-[#76c0bb] p-4 rounded-2xl self-start text-white group-hover:bg-transparent border border-transparent group-hover:border-[#76c0bb] duration-500`}><FaBookOpen/></i>
                Personal
            </button>
            <button className="flex gap-3 items-center text-lg text-[#403F51] hover:text-white duration-500 group">
                <i className={`shadow-2xl bg-[#aa6bdb] p-4 rounded-2xl self-start text-white group-hover:bg-transparent border border-transparent group-hover:border-[#aa6bdb] duration-500`}><FaBookOpen/></i>
                Design
            </button>
            <button className="flex gap-3 items-center text-lg text-[#403F51] hover:text-white duration-500 group">
                <i className={`shadow-2xl bg-[#cdb350] p-4 rounded-2xl self-start text-white duration-500 group-hover:bg-transparent border border-transparent group-hover:border-[#cdb350]`}><FaBookOpen/></i>
                Groceries
            </button>
        </nav>
    )
}