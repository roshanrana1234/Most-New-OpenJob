import React, { useState, useRef, useEffect } from 'react'
import logo from '../../../images/main.png'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { BsFillBellFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdArrowDropDown, MdKeyboardArrowDown } from "react-icons/md";
import { getToken, removeToken } from '../../../services/userLocalStorage';

const UserPage = () => {
    const [open, setopen] = useState(false)
    const [main, setMain] = useState(false)
    const hide = useRef()

    const navigate = useNavigate()
    const handleLogout = () => {
        removeToken('token')
        navigate('/userlogin')

    }


    useEffect(() => {
        const handler = (e) => {
            if (!hide.current.contains(e.target)) {
                setMain(false)
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, []);
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
                                    className='text-white font-bold flex gap-1 items-center relative z-10'
                                    ref={hide}
                                >
                                    <button
                                        className='flex gap-1  items-center '
                                        onClick={() => setMain(!main)}
                                    >
                                        <BsFillPersonFill className='text-xl text-white' />
                                    </button>

                                    <div
                                        className={`${main ? "visible" : "invisible"} absolute bg-[#fff] text-gray-600 top-full right-0 border shadow-xl  font-semibold rounded flex flex-col w-[240px] justify-start gap-1 `} >
                                        <Link to="#" className='hover:bg-gray-200  p-3 text-start flex items-center gap-3  '>
                                            <span><CgProfile className='text-xl' /></span>
                                            Profile
                                        </Link>
                                        <Link to="#" className='hover:bg-gray-200  p-3 text-start flex items-center gap-3  ' >
                                            <span><AiOutlineDownload className='text-xl' /></span>
                                            Download applications
                                        </Link>
                                        <div className='hover:bg-gray-200 cursor-pointer  p-3 text-start flex items-center gap-3 cursor:pointer '
                                            onClick={handleLogout}
                                        >
                                            <span className='cursor:pointer' ><BsFillArrowRightCircleFill /></span>

                                            Sign Out
                                        </div>
                                    </div>
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