import React, { useState, useRef, useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import logo from '../../images/main.png'
import { BsSearch } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useUsergetActivejobsQuery } from '../../services/profile'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useGetcitylistQuery, useGetstatelistQuery, useGetActivepaginatedjobsQuery } from "../../services/profile";

import { Link } from 'react-router-dom';

const UserJobFeed = () => {
    //    const {data:Data} = useGetActivepaginatedjobsQuery(counter)

    const [counter, setcounter] = useState(0)
    console.log(counter, "counter")

    const { data } = useGetActivepaginatedjobsQuery(counter)
    const { data: Data } = useUsergetActivejobsQuery()
    let limit = Math.round(Data?.length / 4)
    console.log(limit, "limit");

    // console.log(Data, "19")
    // console.log(Data?.length, "20")
    const { data: citylist } = useGetcitylistQuery()

    // if (data) {

    //     data.map((value) => {
    //         console.log(value.Area);
    //     })
    // }


    const [menu, setMenu] = useState(false)
    const [menu1, setMenu1] = useState(false)

    const menuRef = useRef()
    const menuRef1 = useRef()
    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setMenu(false)
            }

        }
        document.addEventListener("mousedown", handler)
    }, [])

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef1.current.contains(e.target)) {
                setMenu1(false)

            }
        }
        document.addEventListener("mousedown", handler)
    }, [])


    return (
        <>

            {/* Search Fro a Job */}

            <div className='  rounded-xl mt-6 w-8/12 m-auto' >
                <div className=' border-black  flex flex-col gap-4 lg:flex-row  justify-evenly items-center  p-4' >

                    {/* <div className=' w-full relative' ref={menuRef}  >
                        <input
                            placeholder='Select job type , keywords, or company'
                            className='p-3 w-full m-auto text-tcolor border rounded-xl text-sm font-semibold bg-white  '
                            type="search"
                            onClick={() => setMenu(!menu)}
                        />
                        <div className={`${menu ? "null" : "hidden"} absolute top-full m-auto w-full bg-bgcolor z-10`} >
                            <div className='text-tcolor font-bold bg-white text-lg flex justify-between p-4 ' >
                                Choose job Type
                                <div onClick={() => setMenu(!menu)} >
                                    <ImCross />
                                </div>
                            </div>
                            <div className='flex items-center border bg-bgcolor border-gray-800' >
                                <BsSearch className=' mx-4 ' />
                                <input

                                    placeholder='Type To Search...'
                                    className=' focus:border-none  w-full  p-2 ' type="search" />
                            </div>
                            <ul className='flex flex-col gap-3 bg-white my-4 max-h-44 overflow-auto shadow-xl border' >
                                {
                                    !!data && data.map((value, index) => {
                                        return <div className='bg-white' key={index} >
                                            <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' > {value.jobRole}</li>
                                        </div>
                                    })
                                }

                            </ul>
                        </div>
                    </div> */}

                    <div className='w-full' >
                        <select className='w-full p-2 rounded foucus:outline-none border' name="" id="">
                            <option disabled value="">- city - </option>
                            {citylist?.map((e) => {
                                return <option value={e.name}
                                    className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >{e.name}</option>
                            })}
                            <option value="">mumbai</option>
                        </select>
                    </div>

                    <div className='w-full' >
                        <select className='w-full p-2 rounded foucus:outline-none border' name="" id="">
                            <option disabled value="">- city - </option>
                            {citylist?.map((e) => {
                                return <option value={e.name}
                                    className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >{e.name}</option>
                            })}
                            <option value="">mumbai</option>
                        </select>
                    </div>



                    <div className=' p-2 w-8/12 m-auto' >
                        <button className='text-white btncolor p-2 font-bold px-8 rounded border shadow w-full border-black' >Find Job</button>
                    </div>
                </div>
            </div >





            <div>
                <div className='flex justify-center items-center bg-bgcolor' >
                    <Link to="/userpage/userfindjob" >
                        <button className=' rounded text-3xl text-black font-black flex gap-5 items-center' >
                            Job Feed
                            <div className='text-white font-bold text-2xl p-2 bg-gray-700 rounded-lg' > New </div>
                        </button>
                    </Link>
                </div>
            </div>



            <div className='bg-bgcolor p-4' >
                <div className='text-center p-4' >
                    Jobs based on your activity on Indeed ??? Updated 20 min ago
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 ' >

                    {
                        !!data && data.map((value, index) => {
                            return <div className='my-6' key={index} >
                                <div>
                                    <div className='border shadow-xl rounded bg-white flex flex-col gap-1 p-4 lg:w-8/12 w-10/12 m-auto'
                                    >
                                        <div className='flex justify-between items-center text-black' >
                                            <div className='text-xl font-bold ' >
                                                <div className='font-bold text-3xl' >
                                                    {value.componayName}
                                                </div>

                                            </div>
                                            <BsThreeDotsVertical className='text-xl font-bold ' />
                                        </div>
                                        <div className='text-xl flex gap-3 ' >Interview city
                                            <div className='font-bold' >
                                                {value.InterviewCity}
                                            </div>
                                        </div>

                                        <div className='flex gap-3' >
                                            <div className='font-bold p-1 rounded text-white bbcolor text-sm' >???{value.Minimum} - ???{value.Maximum} a year</div>
                                            <div className='font-bold p-1 rounded text-white bbcolor text-sm' >{value.typeOfJob}</div>
                                            <div className='font-bold p-1 rounded text-white bbcolor text-sm' >{value.nightshift}</div>
                                        </div>


                                        <div className='flex flex-col gap-2' >
                                            <div className='flex gap-2 items-center' >
                                                Apply securely wit
                                                <div className='w-40' >
                                                    <img src={logo} alt="" />
                                                </div>
                                                Resume
                                            </div>
                                            <div className='flex gap-2 items-center' >
                                                <div><BsFillClockFill /></div  >
                                                <div className='font-bold' >
                                                    {value.experience}
                                                </div>
                                            </div>
                                            <div className='flex gap-2 items-center' >
                                                <div>Minimum Education</div>
                                                <div className='font-bold' >
                                                    {value.miniumEducation}
                                                </div>
                                            </div>
                                        </div>


                                        <div className='flex gap-3' >
                                            <div>Description</div>
                                            <div className='font-bold'>{value.description}</div>
                                        </div>

                                        <div className='text-sm flex gap-1 ' >
                                            Active 2 days ago . Base on <div className='font-bold' >Jobs you explored </div>
                                        </div>


                                        <div className='flex justify-between items-center p-2' >
                                            <Link to={`/userpage/userfindjob/jobdetail/${value._id}`} >
                                                <button
                                                    className='text-white p-2 px-6 rounded-lg font-bold bg-gray-600 shadow-2xl active:text-black text-sm lg:text-xl' >
                                                    Details
                                                </button>
                                            </Link>
                                            <Link to={`/userpage/userfindjob/applyjob/${value._id}`} >
                                                <button
                                                    className='text-white lg:p-2 lg:px-6 rounded-lg font-bold bg-btncolor shadow-2xl active:text-black p-2 text-sm lg:text-xl ' >
                                                    Apply Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>


                                </div>


                            </div>
                        })

                    }

                </div>

                {/* <button  onClick = {() => {setcounter(counter + 1)}}
                                                  className='text-white p-2 px-6 rounded-lg font-bold bg-gray-600 shadow-2xl active:text-black text-sm lg:text-xl' >
                                                     see more
                                                </button>   */}
                <div className='flex w-5/12 p-3 m-auto text-black justify-between'
                >


                    <div className='text-white bg-gray-400 p-2 rounded active:text-green-500'
                        onClick={() => { setcounter(counter > 0 ? counter - 1 : 0) }}
                    >Previous</div>

                    <Stack spacing={2}>
                        {/* <Pagination count={10} shape="rounded" /> */}
                        <Pagination onClick={() => { setcounter(limit) }} count={limit} variant="outlined" shape="rounded" />
                    </Stack>

                    {/* <div className='overflow-auto'
                        onClick={() => { setcounter(limit) }}>last page {limit}</div> */}


                    <div className='text-white bg-green-400 p-2 rounded active:text-green-500'
                        onClick={() => { setcounter(counter + 1) }}

                    >Next</div>

                </div>


            </div>
        </>
    )
}

export default UserJobFeed