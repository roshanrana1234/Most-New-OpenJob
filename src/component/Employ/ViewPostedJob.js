import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BsThreeDotsVertical } from "react-icons/bs";

const ViewPostedJob = () => {
    const [open, setopen] = useState(false)
    const hide = useRef()

    useEffect(() => {
        const handler = (e) => {
            if (!hide.current.contains(e.target)) {
                setopen(false)
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, []);

    return (
        <>
            <div className='' >
                <div className='w-11/12 m-auto' >

                    <div className='flex justify-between bg-white p-4 rounded' >
                        <div>
                            <div>
                                Bike Rider
                            </div>
                            <div>
                                <ul className='text-gray-500 text-sm flex gap-4' >
                                    <li  >₹34,500 - ₹50,000 |</li>
                                    <li> Bhopal , saketnagar</li>
                                    <li>Job Detail</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center justify-evenly' >
                            <div className='text-blue-600 text-sm bg-blue-200 p-1 rounded font-bold' >active</div>
                            <div className='p-1 px-3 border rounded text-sm border-blue-400 cursor-pointer active:text-green-500 ' >Expire job</div>
                            <div ref={hide} className='relative' >
                                <button onClick={() => { setopen(!open) }} >
                                    <BsThreeDotsVertical className='text-xl cursor-pointer' />
                                </button>
                                <div className={`${open ? "null" : "hidden"}`} >
                                    <ul className='flex flex-col gap-1 bg-white border p-2 rounded absolute right-0 min-w-[250px] text-sm shadow-xl font-bold' >
                                        <li className='hover:bg-gray-600 hover:text-white p-2 rounded' >Edit</li>
                                        <li className='hover:bg-gray-600 hover:text-white p-2 rounded' >Duplicate</li>
                                        <Link to="postjobdetail"  >
                                            <li className='hover:bg-gray-600 hover:text-white p-2 rounded' >View Job Details</li>
                                        </Link>
                                        <li className='hover:bg-gray-600 hover:text-white p-2 rounded' >View stats</li>
                                        <li className='hover:bg-gray-600 hover:text-white p-2 rounded' >Edit Communication Preference</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-3 items-center p-4 pl-0' >
                            <div className='font-bold text-xl' >Applications |</div>
                            <div className='text-sm' >Receiving on <span className='font-bold' > Calls and Whatsapp</span></div>
                        </div>
                    </div>

                    <div>
                        <ul className='flex gap-7 bg-gray-200 rounded-t-md  items-center p-2 box-border font-bold text-gray-600' >
                            <NavLink to="reviewpending" >
                                <li>Review Pending (50)</li>
                            </NavLink>
                            <NavLink to="reviewed" >
                                <li>Revied (34)</li>
                            </NavLink>
                            <NavLink to="notrelavent" >
                                <li>Not relavent (34)</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='bg-bgcolor p-5' >
                        <Outlet />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewPostedJob