import React from 'react'
import logo from '../../images/main.png'
import { ImLocation } from "react-icons/im";
import { BiBuildings } from "react-icons/bi";
import { GiHandBag } from "react-icons/gi";
import { FcGraduationCap } from "react-icons/fc";
import { BsFillPersonFill, BsFillEmojiSunglassesFill, BsFillCalendar2DayFill, BsCardChecklist } from "react-icons/bs";
import { HiLightBulb, } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetjobsbyIdQuery } from '../../services/profile'

const JobDetailPage = () => {
    let { detailId } = useParams();
    const { data } = useGetjobsbyIdQuery(detailId)
    console.log(data?.componayName, "dsfg")

    return (
        <>
            <div className='bg-bgcolor p-4 ' >
                {/* HR number */}
                <div className='w-10/12 lg:8/12 m-auto mb-2 shadow p-3 rounded flex justify-between items-center bg-white ' >

                    <div className='lg:w-40 w-24' >
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex gap-4' >
                        <button className='font-bold active:text-black bg-btncolor p-3 px-5 rounded  text-white hidden md:block' >Call HR</button>
                        <Link to={`/userpage/userfindjob/applyjob/${detailId}`} >
                            <button className='font-bold active:text-black bg-green-500 lg:p-3 lg:px-5 p-2 text-sm rounded text-white' >APPLY NOW</button>
                        </Link>
                    </div>
                </div>


                {/* Main Form */}
                <div className='w-10/12 lg:8/12 m-auto shadow p-3 rounded bg-white text-gray-600 flex flex-col gap-4' >


                    <div className='flex flex-col' >
                        <div className='font-bold text  flex gap-2' >
                            <div className='flex gap-3 items-center' >
                                <BiBuildings className='text-xl text-orange-500' />
                                {data?.componayName}
                            </div>
                            <div className='border text-sm text-gray-400 rounded-3xl p-1' >
                                Verified Employer
                            </div>
                        </div>
                    </div>

                    <br />
                    <hr />

                    {/*  Location*/}
                    <div className='text-sm' >
                        <div className='flex gap-4 flex-col lg:flex-row' >
                            <div className='flex  items-center  gap-3' >
                                <ImLocation className='text-3xl text-orange-400' />
                                <div className='flex flex-col' >
                                    <div>Location</div>
                                    <div><ul className='flex font-bold flex-col  lg:flex-row ' >
                                        {data?.InterviewCity}

                                    </ul></div>
                                </div>
                            </div>

                            <div className='flex  items-center  gap-3' >
                                <GiHandBag className='text-3xl text-orange-400' />
                                <div className='flex flex-col' >
                                    <div>
                                        Experience Required</div>
                                    <div className='font-bold' > {data?.experienceYear}</div>
                                </div>
                            </div>

                            <div className='flex  items-center  gap-3' >
                                <FcGraduationCap className='text-3xl text-orange-400' />
                                <div className='flex flex-col' >
                                    <div>

                                        Education Required</div>
                                    <div className='font-bold' >{data?.miniumEducation}

                                    </div>
                                </div>
                            </div>

                            <div className='flex  items-center  gap-3' >
                                <BsFillPersonFill className='text-3xl text-orange-400' />
                                <div className='flex flex-col' >
                                    <div>Gender</div>
                                    <div className='font-bold' >{data?.Gender
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <hr />

                    <div className='flex flex-col' >
                        <div className='font-bold text  flex gap-2' >
                            <div className='flex gap-3 items-center' >
                                <FcMoneyTransfer className='text-3xl text-orange-500' />
                                <div className='font-bold' >
                                    ₹15000 - ₹ 25000 / month
                                </div>
                            </div>
                        </div>
                    </div>

                    <br /><hr />

                    <div className='flex  items-center  gap-3' >
                        <HiLightBulb className='text-3xl text-orange-400' />
                        <div className='flex flex-col' >
                            <div className='text-xl font-black' >Job Type : Full Time</div>
                            <div className='flex gap-7 mt-3' >
                                <div className='flex flex-col gap-3 justify-center items-center' >
                                    <div>shift</div>
                                    <BsFillEmojiSunglassesFill className='text-3xl text-orange-400' />
                                    <div className='font-bold' >{data?.nightshift}</div>
                                </div>
                                <div className='flex flex-col gap-3 justify-center items-center' >
                                    <div>Days of Work</div>
                                    <BsFillCalendar2DayFill className='text-3xl text-orange-400' />
                                    <div className='font-bold' >6 Days / Week</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <hr />

                    <div className='flex  items-center  gap-3' >
                        <IoIosPaper className='text-3xl text-orange-400' />
                        <div className='flex flex-col' >
                            <div className='font-bold text-lg' >Other Requirements</div>
                            <div className='flex gap-3' >
                                <div>logo</div>
                                <div className='font-semibold' >{data?.perks}</div>
                            </div>
                        </div>
                    </div>

                    <br /><hr />

                </div>


                {/* Job Description */}

                <div className='w-10/12 lg:8/12 m-auto mb-2 shadow p-3 rounded flex gap-5 mt-2 bg-white flex-col ' >

                    <div className=' flex  gap-3' >
                        <div><BsCardChecklist className='text-3xl text-orange-400' /></div>
                        <div className='font-bold' >Job Description</div>
                    </div>
                    <div>
                        <p>We are looking for candidates joining us as Maid in Ghaziabad. The salary for the role would range from 15000 to 25000.</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default JobDetailPage