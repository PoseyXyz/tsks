import React from "react";
import { FaBookOpen, FaEllipsisH, FaShoppingCart, FaUser } from 'react-icons/fa'
import DashNav from "../components/dashNav";
import CollectionCard from "../components/collectionCard";
import { BsPlusLg, BsBrushFill } from 'react-icons/bs'

function Collections() {
    return (
        <main>
            <DashNav />
            <section className="container flex flex-col gap-8 max-w-4xl px-6 md:px-8 py-12 mb-24 md:mb-0">   
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-4xl text-center">Collections</h2>
                    <button className="hover:text-white text-[#585A60] duration-500"><i><FaEllipsisH /></i></button>
                </div>

                <div className="flex gap-4">
                    <button className="px-4 py-2 border-2 border-[#403F51] text-white hover:bg-[#403F51] duration-500 rounded-2xl">Favourites</button>
                    <button className="px-4 py-2 bg-[#403F51] text-white duration-500 hover:bg-transparent hover:border-[#403F51] border-2 border-transparent rounded-2xl">All collections</button>
                </div>
                
                <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <CollectionCard icon={<FaBookOpen/>} id={1} name='School' border='border-[#F8769F]' hover='hover:border-[#F8769F]' completed_tasks={4} total_tasks={8} iconBg='bg-[#F8769F]'/>
                    <CollectionCard icon={<FaUser/>} id={2} name='Personal' border='border-[#76C0BB]' hover='hover:border-[#76C0BB]' completed_tasks={3} total_tasks={5} iconBg='bg-[#76C0BB]'/>
                    <CollectionCard icon={<BsBrushFill/>} id={3} name='Design' border='border-[#AA6BDB]' hover='hover:border-[#AA6BDB]' completed_tasks={15} total_tasks={15} iconBg='bg-[#AA6BDB]'/>
                    <CollectionCard icon={<FaShoppingCart/>} id={4} name='Groceries' border='border-[#CDB350]' hover='hover:border-[#CDB350]' completed_tasks={2} total_tasks={10} iconBg='bg-[#CDB350]'/>
                    <button className="border-2 border-[#403F51] text-[#403F51] h-1/2 hover:h-full hover:border-white hover:text-white p-8 flex justify-center items-center rounded-2xl duration-500 flex-col gap-4 group"><i className="hover:scale-75"><BsPlusLg/></i><span className="group-hover:block hidden">Add new collection</span></button>
                </div>
            </section>
        </main>
    )
}

export default Collections