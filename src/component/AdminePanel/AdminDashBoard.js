import React, { useState, useRef, useEffect } from 'react'
import { MdArrowDropDown, MdKeyboardArrowDown } from "react-icons/md";
import { FaRegHandPointer } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { getToken, removeToken } from '../../services/adminLocalStorage';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import logo from '../../images/main.png'
const AdminDashBoard = () => {
    const [open, setopen] = useState(false)
    const [main, setMain] = useState(false)
    const [jobs, setjobs] = useState(false)
    const hide = useRef()

    const navigate = useNavigate()
    const handleLogout = () => {
        removeToken('token')
        navigate('/adminelogin')

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
            <div className='max-h-screen overflow-hidden bg-bgcolor relative lg:flex ' >

                <nav className={`${open ? "opend" : "close"} duration-500 `} >
                    <div className='flex justify-between items-center' >
                        <div className=''>
                            <img
                                className='w-64' src={logo} alt="" />
                        </div>
                        <button
                            onClick={() => setopen(!open)}
                            className=' lg:hidden text-2xl p-2 focus:outline-none focus:bbcolor hover:bg-gray-500 active:bg-gray-600' ><IoMdArrowDropleftCircle /></button>
                    </div>

                    <div className='mt-8 font-semibold' >
                        <div>
                            <div onClick={() => setjobs(!jobs)} className='flex py-2 px-4 w-full justify-between p-2 hover:bbcolor rounded border' >Jobs <span><MdKeyboardArrowDown /></span> </div>
                            <div className={`border ${jobs ? "null" : "hidden"}`} >
                                <NavLink
                                    className=' active:text-green-400 block px-4 py-2 hover:bbcolor rounded'
                                    to="adminealljob" >
                                    <div>All Job</div>
                                </NavLink>
                                <NavLink
                                    className='active:text-green-400 block px-4 py-2 hover:bbcolor rounded'
                                    to="admineunderreview" >
                                    <div>New Posted Jobs</div>
                                </NavLink>
                                <NavLink
                                    className='active:text-green-400 block px-4 py-2 hover:bbcolor rounded'
                                    to="admineactivatejob" >
                                    <div>All active jobs</div>
                                </NavLink>
                                <NavLink
                                    className='active:text-green-400 block px-4 py-2 hover:bbcolor rounded'
                                    to="admineexpiredjob" >
                                    <div>All Expired jobs</div>
                                </NavLink>

                            </div>
                        </div>


                    </div>
                </nav>


                <div className='relative z-0 lg:flex-grow text-white' >
                    <header className='bbcolor flex  items-center  ' >
                        <button
                            onClick={() => setopen(!open)}
                            className='text-3xl lg:hidden ml-3 p-2 focus:outline-none focus:bg-white hover:bg-white hover:text-black active:bg-red-700' ><GiHamburgerMenu /></button>
                        <div className='flex items-center justify-between w-full px-4' >
                            {/* <span className='text-2xl md:text-3xl text-white p-4 block font-bold'>
                                OpenJob
                            </span> */}
                            <div className='text-[#fff] text-2xl font-bold p-4 block' >
                                <div className='w-40' >
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <div
                                className='text-white font-bold flex gap-1 items-center relative'
                                ref={hide}
                            >
                                <button
                                    className='flex gap-1  items-center '
                                    onClick={() => setMain(!main)}
                                >
                                    roshan <span><MdArrowDropDown /></span>
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
                        </div>
                    </header>
                    <div className='bg-bgcolor h-screen overflow-hidden p-4 pb-20' >
                        <div className='h-full overflow-auto text-black' >
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashBoard



















// import React, { useState, useRef, useEffect } from 'react'
// import { MdArrowDropDown } from "react-icons/md";
// import { FaRegHandPointer } from "react-icons/fa";
// import { Link, Outlet } from 'react-router-dom';
// import { CgProfile } from "react-icons/cg";
// import { AiOutlineDownload } from "react-icons/ai";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { getToken, removeToken } from '../../services/adminLocalStorage';
// import { NavLink, useNavigate } from 'react-router-dom';
// // import { useGetDetailsQuery } from '../services/profile';
// import logo from '../../images/main.png'

// const AdminDashBoard = () => {
//     const [main, setMain] = useState(false)
//     const hide = useRef()

//     const navigate = useNavigate()
//     const handleLogout = () => {
//         removeToken('token')
//         navigate('/adminelogin')

//     }

//     useEffect(() => {
//         const handler = (e) => {
//             if (!hide.current.contains(e.target)) {
//                 setMain(false)
//             }
//         }
//         document.addEventListener("mousedown", handler)
//     }, []);

//     return (
//         <>
//             <div className='h-screen bg-bgcolor overflow-hidden' >
//                 <div className='flex  ' >
//                     {/* Left */}
//                     <div className='basis-1/4 h-screen bbcolor  overflow-auto  border-r-.5' >
//                         <div>
//                             <img className='p-3' src={logo} alt="" />
//                         </div>
//                         <div>
//                             <ul className='flex flex-col font-bold' >
//                                 <Link className='text-white p-2 hover:text-black hover:bg-white active:text-green-500' to="adminealljob" > <li>All Post Job</li></Link>
//                                 <Link className='text-white p-2 hover:text-black hover:bg-white active:text-green-500' to="admineunderreview" > <li>Under Review Jobs</li></Link>
//                                 <Link className='text-white p-2 hover:text-black hover:bg-white active:text-green-500' to="admineactivatejob" >  <li>Activated Jobs</li></Link>
//                             </ul>
//                         </div>
//                     </div>


//                     {/* Right */}
//                     <div className='basis-3/4 h-screen overflow-auto ' >

//                         <div>
//                             {/* Nav */}
//                             <div className='flex justify-between gap-7 bbcolor p-3' >
//                                 <div className='text-[#fff] text-2xl font-bold' >
//                                     <div className='w-40' >
//                                         <img src={logo} alt="" />
//                                     </div>
//                                 </div>
//                                 <div
//                                     className='text-white font-bold flex gap-1 items-center relative'
//                                     ref={hide}
//                                 >
//                                     <button
//                                         className='flex gap-1  items-center '
//                                         onClick={() => setMain(!main)}
//                                     >
//                                         roshan <span><MdArrowDropDown /></span>
//                                     </button>

//                                     <div
//                                         className={`${main ? "visible" : "invisible"} absolute bg-[#fff] text-gray-600 top-full right-0 border shadow-xl  font-semibold rounded flex flex-col w-[240px] justify-start gap-1 `} >
//                                         <Link to="#" className='hover:bg-gray-200  p-3 text-start flex items-center gap-3  '>
//                                             <span><CgProfile className='text-xl' /></span>
//                                             Profile
//                                         </Link>
//                                         <Link to="#" className='hover:bg-gray-200  p-3 text-start flex items-center gap-3  ' >
//                                             <span><AiOutlineDownload className='text-xl' /></span>
//                                             Download applications
//                                         </Link>
//                                         <div className='hover:bg-gray-200  p-3 text-start flex items-center gap-3 cursor:pointer '
//                                             onClick={handleLogout}
//                                         >
//                                             <span className='cursor:pointer' ><BsFillArrowRightCircleFill /></span>

//                                             Sign Out
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                             {/* Main */}
//                             <div className='p-3 bg-bgcolor'  >
//                                 <Outlet />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AdminDashBoard