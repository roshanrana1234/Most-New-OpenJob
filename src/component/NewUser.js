import React, { useState, useRef, useEffect } from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { FaRegHandPointer } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { getToken, removeToken } from '../services/LocalStorage';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/main.png'
import { useGetDetailsQuery } from '../services/profile';
import { useGetpostjobsQuery, useDeletejobbyidMutation } from '../services/profile';


const NewUser = () => {
    let token = getToken('token')
    const { data: Data } = useGetpostjobsQuery(token)

    const [deletepost] = useDeletejobbyidMutation()

    console.log("NewData", Data);
    const [main, setMain] = useState(false)
    const hide = useRef()

    const { data } = useGetDetailsQuery(token)
    console.log(data?.user)
    const navigate = useNavigate();
    useEffect(() => {
        const handler = (e) => {
            if (!hide.current.contains(e.target)) {
                setMain(false)
            }
        }
        document.addEventListener("mousedown", handler)
    }, []);

    const handleLogout = () => {
        removeToken('token')
        navigate('/login')

    }

    return (
        <>
            <div
                className='max-h-screen  overflow-hidden' >
                <div
                    className='grid lg:grid-cols-3 h-screen grid-cols-1' >
                    <div className=' col-span-1  ' >
                        <div className='bbcolor p-5' >
                            <div className='flex flex-col gap-2' >

                                <div className='flex justify-between gap-7 ' >
                                    <div className='text-[#fff] text-2xl font-bold' >
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
                                            {data?.user?.fullname} <span><MdArrowDropDown /></span>
                                        </button>

                                        <div
                                            className={`${main ? "visible" : "invisible"} absolute bg-[#fff] text-gray-600 top-full right-0 border shadow-xl  font-semibold rounded flex flex-col w-[240px] justify-start gap-1 `} >
                                            <Link to="profile" className='hover:bg-gray-200  p-3 text-start flex items-center gap-3  '>
                                                <span><CgProfile className='text-xl' /></span>
                                                Profile
                                            </Link>
                                            <Link to="downloadapplicants" className='hover:bg-gray-200  p-3 text-start flex items-center gap-3  ' >
                                                <span><AiOutlineDownload className='text-xl' /></span>
                                                Download applications
                                            </Link>
                                            <div className='hover:bg-gray-200  p-3 text-start flex items-center gap-3 cursor:pointer ' onClick={handleLogout}  >
                                                <span className='cursor:pointer' ><BsFillArrowRightCircleFill /></span>
                                                Sign Out
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <Link to="postjob" className='p-3' >
                                    <button className='bg-btncolor border active:text-black w-full p-2 rounded text-white font-bold ' >Post a Job</button>
                                </Link>

                            </div>
                        </div>


                        <div className='p-3 hidden lg:block max-h-screen overflow-auto  ' >
                            {
                                !!Data && Data.map(({ jobRole, Minimum, Maximum, InterviewCity, JobActivation, _id }) => {
                                    return <div className=' bg-bgcolor shadow border flex flex-col gap-2 p-3 my-5 rounded w-9/12 m-auto' key={_id} >
                                        <div className='font-bold text-xl ' >
                                            {jobRole}
                                        </div>
                                        <div>
                                            ₹{Minimum} - ₹{Maximum}
                                        </div>
                                        <div>
                                            {InterviewCity}
                                        </div>
                                        <div>
                                            <button className='text-red-500 border p-1 px-2 font-bold text-sm border-red-500 rounded-sm' >
                                                {JobActivation}
                                            </button>
                                        </div>
                                        <div className='flex gap-4' >
                                            <button className='p-2 text-white font-bold px-5 rounded bg-btncolor' >
                                                Edit
                                            </button>
                                            <button className='p-2 text-white font-bold px-5 rounded bg-red-500' onClick={() => deletepost({ token, _id })}  >
                                                Delete

                                            </button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>








                    <div className='lg:col-span-2 border col-span-3  bg-[#F8F8F8]  p-10 place-items-center max-h-screen  overflow-auto ' >

                        <Outlet />


                    </div>

                </div>
            </div>
        </>
    )
}

export default NewUser