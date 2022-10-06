import React, { useState, useRef, useEffect } from 'react'
import logo from '../../../images/main.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BsFillBellFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";


const UserPage = () => {

    return (
        <>
            <>
                <div className='bg-bgcolor text-slate-600' >

                    {/* Header */}
                    <nav className='flex justify-between  bbcolor p-6 border-b-2 items-center  '
                    >
                        <div className='flex items-center gap-5' >
                            <div className='lg:w-48 w-28 lg:ml-5  '>
                                <img className='' src={logo} alt="OPENJOB" />
                            </div>
                            <div>
                                <ul className='flex font-semibold items-center text-white gap-5' >
                                    <NavLink to="userfindjob" ><li>Find Job</li></NavLink>
                                    <NavLink to="usercompanyreview" > <li>Company Review</li></NavLink>
                                    <NavLink to="usersalaryguide" >  <li>Salary Guide</li></NavLink>
                                </ul>
                            </div>
                        </div>


                        <div className='flex gap-6 text-white mr-5 ' >
                            <div className='text-xl text-white ' ><BsFillBellFill /></div>
                            <div>
                                <div
                                    className='text-xl text-white' >
                                    <BsFillPersonFill />
                                </div>
                                <div>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </nav>

                    <Outlet />

                </div>
            </>
        </>
    )
}

export default UserPage