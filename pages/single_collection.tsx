import React from 'react'
import DashNav from '../components/dashNav'
import { BsArrowRight, BsBrushFill } from 'react-icons/bs'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { FaEllipsisH } from 'react-icons/fa'
import RightNav from '../components/rightNav'

export default function SingleCollection() {
    return (
        <main>
            <DashNav />
            <section className='flex'>
                <RightNav/>
                <section className="container flex flex-col gap-8 max-w-4xl px-6 md:px-8 py-12 mb-24 md:mb-0">
                    <div className="justify-between hidden md:flex items-center mb-10">
                        <h2 className="text-4xl text-center">Dashboard</h2>
                        <button className="hover:text-white text-[#585A60] duration-500"><i><FaEllipsisH /></i></button>
                    </div>

                    <div className="flex flex-col gap-3 mb-8">
                        <h2 className="text-4xl">Good morning,</h2>
                        <h2 className="text-4xl">Sydney Idundun</h2>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <button className="px-4 py-2 bg-[#403F51] text-white duration-500 hover:bg-transparent hover:border-[#403F51] border-2 border-transparent rounded-2xl">Daily Overview</button>
                        <button className="px-4 py-2 border-2 border-[#403F51] text-white hover:bg-[#403F51] duration-500 rounded-2xl">Statistics</button>
                    </div>

                    <div className='bg-[#20212C] rounded-2xl'>
                        <button className='flex justify-between rounded-t-2xl items-center w-full text-xl p-4 bg-[#272833]'>
                            <i className='rounded-2xl items-center flex gap-6'>
                                <i className={`bg-[#AA6BDB] p-4 rounded-2xl`}><BsBrushFill /></i>
                                <span className='font-black'>Design</span>
                            </i>

                            <i className='text-2xl'><MdKeyboardArrowUp /></i>
                        </button>
                        <div className='flex flex-col gap-4 pt-4'>
                            <div className='flex gap-4 p-4'>
                                <span className='p-4 w-4 h-5 border-4 border-[#AA6BDB] rounded-xl'></span>
                                <span className='flex flex-col gap-2'>
                                    <span className='font-black text-xl'>Prepare dribbble shot</span>
                                    <span className='text-red-400'>Today 12:00</span>
                                </span>
                            </div>
                            <div className='flex gap-4 p-4'>
                                <span className='p-4 w-4 h-5 border-4 border-[#AA6BDB] rounded-xl'></span>
                                <span className='flex flex-col gap-2'>
                                    <span className='font-black text-xl'>Invoice dashboard wireframe</span>
                                    <span className='text-red-400'>Today</span>
                                </span>
                            </div>
                            <button className='border-t border-gray-500 w-full flex gap-4 items-center justify-center p-6'>Go to Collection <BsArrowRight /></button>
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
                    {/* <CollectionCard id={1} name='School' border='border-[#F8769F]' hover='hover:border-[#F8769F]' completed_tasks={4} total_tasks={8} iconBg='bg-[#F8769F]' />
                    <CollectionCard id={2} name='Personal' border='border-[#76C0BB]' hover='hover:border-[#76C0BB]' completed_tasks={3} total_tasks={5} iconBg='bg-[#76C0BB]' />
                    <CollectionCard id={3} name='Design' border='border-[#AA6BDB]' hover='hover:border-[#AA6BDB]' completed_tasks={15} total_tasks={15} iconBg='bg-[#AA6BDB]' />
                    <CollectionCard id={4} name='Groceries' border='border-[#CDB350]' hover='hover:border-[#CDB350]' completed_tasks={2} total_tasks={10} iconBg='bg-[#CDB350]' />
                    <button className="border-2 border-[#403F51] text-[#403F51] h-1/2 hover:border-white hover:h-full hover:text-white p-8 flex justify-center items-center rounded-2xl duration-500 flex-col gap-4 group"><i className="group-hover:animate-spin"><BsPlusLg /></i><span className="group-hover:block hidden">Add new collection</span></button> */}
                    {/* </div> */}
                </section>
            </section>
        </main>
    )
}