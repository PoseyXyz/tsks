import React from "react";
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiSquare2Stack } from 'react-icons/hi2'
import { BsPlusLg } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { FaRegBell } from 'react-icons/fa'

function DashNav() {
    return (
        <>
            <nav className="hidden md:flex gap-8 text-2xl items-center p-6 bg-[#20212C]">
                <button className="text-[#585A60] hover:text-white duration-500">
                    <GiHamburgerMenu />
                </button>
                <div className="flex justify-between  flex-auto items-center">
                    <div className="flex gap-8">
                        <button className="flex gap-3 items-center text-[#585A60] hover:text-white duration-500">
                            <i><BsFillGrid1X2Fill /></i>
                            Dashboard
                        </button>
                        <button className="flex gap-3 items-center text-[#585A60] hover:text-white duration-500">
                            <i><HiSquare2Stack /></i>
                            Collections
                        </button>
                    </div>

                    <div className="flex gap-8 items-center">
                        <button className="plus-btn p-4 rounded-2xl">
                            <i><BsPlusLg /></i>
                        </button>
                        <button className="hover:text-white text-[#585A60] duration-500">
                            <i><ImSearch /></i>
                        </button>
                        <button className="hover:text-white text-[#585A60] duration-500">
                            <i><FaRegBell /></i>
                        </button>
                        <button className="rounded-full w-4 h-4 bg-red-500 p-4">

                        </button>
                    </div>
                </div>
            </nav>

            <nav>
                <div className="flex justify-between text-3xl p-6 md:hidden items-center">
                    <h3>Dashboard</h3>
                    <button className="rounded-full w-4 h-4 bg-red-500 p-4">

                    </button>
                </div>
            </nav>

            <nav className="flex gap-8 text-xl items-center justify-between p-4 fixed md:hidden w-full bottom-0 bg-[#20212C]">
                <button className="flex gap-3 items-center text-white duration-500">
                    <i><BsFillGrid1X2Fill /></i>
                </button>
                <button className="flex gap-3 items-center text-[#585A60] hover:text-white duration-500">
                    <i><HiSquare2Stack /></i>
                </button>
                <button className="plus-btn p-4 rounded-2xl hover:text-white duration-500">
                    <i><BsPlusLg /></i>
                </button>
                <button className="hover:text-white text-[#585A60] duration-500">
                    <i><ImSearch /></i>
                </button>
                <button className="hover:text-white text-[#585A60] duration-500">
                    <i><FaRegBell /></i>
                </button>
            </nav>
        </>

    )
}

export default DashNav