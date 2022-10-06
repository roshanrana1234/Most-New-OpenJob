import React, { useState, useEffect, useRef } from 'react'
import { GiPartyPopper } from "react-icons/gi";
import logo from "../images/main.png"
import { BsArrowRight } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { CgDanger } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { GrDownload } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import Images from "../ImagesList"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {
    const [menu, setMenu] = useState(false)
    const [menu1, setMenu1] = useState(false)
    const [faq1, setFaq1] = useState(false)
    const [faq2, setFaq2] = useState(false)
    const [faq3, setFaq3] = useState(false)
    const [faq4, setFaq4] = useState(false)
    const [faq5, setFaq5] = useState(false)
    const [faq6, setFaq6] = useState(false)
    const [faq7, setFaq7] = useState(false)
    const [faq8, setFaq8] = useState(false)
    const [pic, setpic] = useState(3)
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
            <div className='bg-bgcolor' >

                {/*  */}
                <div className='flex lg:justify-between items-center bg-[#1A2025] p-4 justify-center' >
                    <div className='w-48 ml-10'>
                        <img className='p1' src={logo} alt="OPENJOB" />
                    </div>
                    <div className='flex' >
                        <Link to="/userlogin" className='text-white font-bold btncolor p-3 rounded px-5 mr-10 hidden lg:block  ' >
                            <button>Apply For Job</button>
                        </Link>
                        <Link to="login" className='text-white font-bold  p-3 rounded px-5 mr-10 hidden btncolor lg:block ' >
                            <butto >
                                Employem Login / SignUp
                            </butto>
                        </Link>
                    </div>
                </div>

                {/* Search Fro a Job */}

                <div className='  rounded-xl ' >
                    <div className=' flex justify-center items-center  pt-2 font-black  lg:text-xl' >
                        Search For A Job
                    </div>

                    <div className=' border-black  flex flex-col gap-4 lg:flex-row  justify-evenly items-center  p-4' >

                        <div className=' w-full relative' ref={menuRef}  >
                            <input
                                placeholder='Select job type , keywords, or company'
                                className='p-3 w-full m-auto text-tcolor border rounded-xl text-sm font-semibold bg-white  '
                                type="search"
                                onClick={() => setMenu(!menu)}
                            />
                            <div className={`${menu ? "null" : "hidden"} absolute top-full m-auto w-full bg-bgcolor`} >
                                <div className='text-tcolor font-bold bg-white text-lg flex justify-between p-4' >
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
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Ac Texhnician</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Accounts / Finance</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Admin / Offive Assistant</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Aircraft Maintainace</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Back Office</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Bank Office</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-full relative' ref={menuRef1}  >
                            <input
                                placeholder='Select City'
                                className='p-3 w-full m-auto text-tcolor border rounded-xl text-sm font-semibold bg-white  '
                                type="search"
                                onClick={() => setMenu1(!menu1)}
                            />

                            <div className={`${menu1 ? "null" : "hidden"} absolute top-full m-auto w-full bg-bgcolor`} >
                                <div className='text-tcolor font-bold bg-white text-lg flex justify-between p-4' >
                                    City
                                    <div onClick={() => setMenu1(!menu1)} >
                                        <ImCross />
                                    </div>
                                </div>
                                <div className='flex items-center border bg-bgcolor border-gray-800' >
                                    <BsSearch className=' mx-4 ' />
                                    <input

                                        placeholder='Type To Search...'
                                        className='border  w-full  p-2 bg-bgcolor' type="search" />
                                </div>
                                <ul className='flex flex-col gap-3 bg-white my-4 max-h-44 overflow-auto shadow-xl border' >
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Ac Texhnician</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Accounts / Finance</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Admin / Offive Assistant</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Aircraft Maintainace</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Back Office</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Bank Office</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                    <li className='cursor:poiner hover:bg-primary hover:text-white w-full p-2 ' >Beautician / Hair Stylist</li>
                                </ul>
                            </div>
                        </div>

                        <div className=' p-2 w-8/12 m-auto' >
                            <Link to="/userpage/userfindjob" >
                                <button className='text-white btncolor p-2 font-bold px-8 rounded w-full shadow' >Find Job</button>
                            </Link>
                        </div>
                    </div>
                </div >



                <div div className='flex justify-center  items-center p-2 mt-7' >
                    <div className='bodycolor text-4xl font-black lg:text-6xl  ' >India's #1 Professional Job Platform</div>
                </div >

                <div className='flex justify-center  items-center p-2' >
                    <div className=' font-bold lg:text-3xl p-2 lg:py-4 txtcolor' >
                        1 Lakh+ Jobs | 100+ Cities
                    </div>
                </div>


                {/* Cards */}

                <div className='grid lg:grid-cols-2  grid-cols-1 place-items-center p-4 gap-4 lg:gap-8 my-10' >

                    <Link to="/userlogin" className='max-w-sm bbcolor p-3 px-8 rounded-lg border border-white shadow-2xl ' >
                        <div className='flex flex-col gap-3 itmes-center justify-center' >
                            <div className='w-full h-full ' >
                                <img className='border rounded-b-3xl  bgcolor h-48 w-full' src="https://st2.depositphotos.com/3837271/5462/i/950/depositphotos_54629433-stock-photo-board-with-text-youre-hired.jpg" alt="" />
                            </div>
                            <div className='flex flex-col justify-center items-center' >
                                <div className='text-white font-bold text-2xl pb-4' >Want a job ?</div>
                                <div className='text-white font-bold text-xl bgcolor p-2 px-5 rounded-xl' >Get A Job</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/login" className='max-w-sm bbcolor p-3 px-8 rounded-lg border border-white shadow-2xl ' >
                        <div className='flex flex-col gap-3 itmes-center justify-center' >
                            <div className='w-full h-full ' >
                                <img className='border rounded-b-3xl  bgcolor h-48 w-full' src="https://www.betterteam.com/images/betterteam-free-job-posting-sites-5877x3918-20210222.jpg?crop=4:3,smart&width=1200&dpr=2" alt="" />
                            </div>
                            <div className='flex flex-col justify-center items-center' >
                                <div className='text-white font-bold text-2xl pb-4' >Want To Hire ?</div>
                                <div className='text-white font-bold text-xl bgcolor p-2 px-5 rounded-xl' >Post Job For Free</div>
                            </div>
                        </div>
                    </Link>



                </div>


                <div className='  flex  justify-center items-center my-6 lg:mt-[80px] ' >
                    <div className='text-xl font-bold lg:text-3xl ' >Trusted by 100+ Companies</div>
                </div>


                {/* Job for Every One */}
                <div className=' p-4 my-10' >

                    <div className='text-xl  font-black flex justify-center items-center p-5 lg:text-4xl' >A Job For Everyone</div>

                    <div className=' grid  place-items-center  p-4  lg:grid-cols-3 gap-4' >

                        <div className='flex p-6 items-center gap-2 justify-evenly bbbcolor border shadow-xl rounded bg-white' >
                            <div className='bg-primary rounded-full' >
                                <img className='w-16 h-16 rounded-full' src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3NtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
                            </div>
                            <div className=' rounded font-bold text-xl ' >Part Time jobs</div>
                            <div className='font-bold' >
                                <BsArrowRight
                                    className='text-tcolor text-xl' />
                            </div>
                        </div>

                        <div className='flex p-6 items-center gap-2 justify-evenly bbbcolor border shadow-xl rounded bg-white' >
                            <div className='bg-primary rounded-full' >
                                <img className='w-16 h-16 rounded-full' src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3NtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
                            </div>
                            <div className=' rounded font-bold text-xl ' >Full Time jobs</div>
                            <div className='font-bold' >
                                <BsArrowRight
                                    className='text-tcolor text-xl' />
                            </div>
                        </div>


                        <div className='flex p-6 items-center gap-2 justify-evenly bbbcolor border shadow-xl rounded bg-white' >
                            <div className='bg-primary rounded-full' >
                                <img className='w-16 h-16 rounded-full' src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3NtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
                            </div>
                            <div className=' rounded font-bold text-xl ' >Jobs for Freshers</div>
                            <div className='font-bold' >
                                <BsArrowRight
                                    className='text-tcolor text-xl' />
                            </div>
                        </div>
                    </div>
                </div>








                <div div className='my-20' >
                    <div className=' flex justify-center items-center p-2 font-black text-xl  lg:text-3xl my-8 ' >
                        How To Get a Job On Openjob
                    </div>


                    <div className='p-4 grid grid-cols-1 place-items-center gap-3  lg:grid-cols-3' >

                        <div className='max-w-sm bg-red-200 flex items-center space-x-3 p-3 rounded-md border shadow-lg w-full lg:flex-col lg:gap-3' >
                            <div className='bg-[#FFD166] rounded-full w-12 h-12 flex justify-center items-center' >
                                <GrDownload className='text-xl ' />
                            </div>
                            <div
                                className='text-xl text-primary font-semibold flex flex-col items-center' >Dawnload Openjob App
                                <span className='text-red-600 p-1 flex gap-1 items-center' >Comming soon <CgDanger /> </span>
                            </div>
                        </div>


                        <div className='max-w-sm bg-white flex items-center space-x-3 p-3 rounded-md border shadow-lg w-full  lg:flex-col lg:gap-3' >
                            <div className='bg-[#FFD166] rounded-full w-12 h-12 flex justify-center items-center' >
                                <BsSearch className='text-xl ' />
                            </div>
                            <div className='text-xl text-primary font-semibold' >Apply For Job</div>
                        </div>


                        <div className='max-w-sm bg-white flex items-center space-x-3 p-3 rounded-md border shadow-lg w-full  lg:flex-col lg:gap-3' >
                            <div className='bg-[#FFD166] rounded-full w-12 h-12 flex justify-center items-center' >
                                <BsFillTelephoneOutboundFill className='text-xl ' />
                            </div>
                            <div className='text-xl text-primary font-semibold' >Contact HR Directly</div>
                        </div>
                    </div>

                </div >


                {/* REview */}



                <Swiper className={``}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={pic}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                >
                    {Images.map((img, index) => (

                        <SwiperSlide key={index} className="my-20 bottom-2 border-black text-white p-3 "  >
                            {/* slide */}
                            <div className='flex flex-col  sm:flex-row justify-center gap-6 items-center  bg-gradient-to-br from-[#000000] to-[#434343] p-5 rounded-lg ' >
                                {/* slide content */}

                                {/* userImage */}
                                <div className='h-40 shrink-0' >
                                    <img className='h-full rounded-lg ' src={img} alt="images" />
                                </div>
                                <div className='flex  flex-col justify-center items-center' >
                                    <h5 className='font-bold p-2'>Roshan Rana</h5>
                                    {/* user Testimonial */}
                                    <p className='text-sm' > <i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut architecto earum provident ducimus harum iste reprehenderit eos sequi illo id, vero animi ex nesciunt iusto eiusmagni.</i></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>



                {/* Apna for employers */}

                <div className=' text-white bbcolor p-5 my-12' >

                    <div className='grid grid-cols-1 lg:grid-cols-2' >

                        <div className='flex flex-col items-center justify-between gap-8' >
                            <div className='flex justify-center items-center text-white font-black lg:text-5xl text-3xl' >
                                OpenJob For Employer
                            </div>
                            <div className='flex flex-col items-center justify-center gap-3 text-xl' >
                                <div>Hire Staff whit in 24 to 48 Hrs for free</div>
                                <div>Best candidates reach out to you directly</div>
                            </div>

                            <Link to="/login" >
                                <button className='bg-btncolor text-xl p-3 px-8 text-bold rounded-md active:bg-white active:text-black' >Post A Job Now</button>
                            </Link>
                        </div>

                        {/* Img */}
                        <div className=' hidden lg:block' >
                            <div className=' justify-center items-center p-4 flex w-full h-full' >
                                <img className='text-center flex items-center top-[-20px]' src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQS */}

                {/* <div className='flex flex-col items-center shadow-2xl justify-center p-3 w-7/12 m-auto bg-white border font-semibold text-gray-600 rounded-xl' >

                    <div className='text-3xl font-black p-5' >
                        Frequently Asked Questions
                    </div>

                    <div className='border w-full border-gray-400 rounded-t-xl' >
                        <div className='cursor-pointer border  w-full p-4 items-center flex justify-between' onClick={() => { setFaq1(!faq1) }} >
                            <p>Is OpenJob app real?</p>
                            <span className={`${faq1 ? "rotate-[180deg]" : "null"}`} ><BsArrowDownCircleFill /></span>
                        </div>
                        <div className={`${faq1 ? "null" : "hidden"} duration-300`} >
                            <p className='text-center p-4' >OpenJob is India’s #1 Professional platform that connects job seekers with employers. It helps job seekers to apply for jobs & talk to the corresponding HRs of the companies directly and vice versa.</p>
                        </div>
                    </div>
                    <div className='border w-full border-gray-400 ' >
                        <div className='cursor-pointer border  w-full p-4 items-center flex justify-between' onClick={() => { setFaq2(!faq2) }} >
                            <p>Is OpenJob app real?</p>
                            <span className={`${faq2 ? "rotate-[180deg]" : "null"}`} ><BsArrowDownCircleFill /></span>
                        </div>
                        <div className={`${faq2 ? "null" : "hidden"} duration-300`} >
                            <p className='text-center p-4' >OpenJob is India’s #1 Professional platform that connects job seekers with employers. It helps job seekers to apply for jobs & talk to the corresponding HRs of the companies directly and vice versa.</p>
                        </div>
                    </div>
                    <div className='border w-full border-gray-400 ' >
                        <div className='cursor-pointer border  w-full p-4 items-center flex justify-between' onClick={() => { setFaq3(!faq3) }} >
                            <p>What is the use of OpenJob app?</p>
                            <span className={`${faq3 ? "rotate-[180deg]" : "null"}`} ><BsArrowDownCircleFill /></span>
                        </div>
                        <div className={`${faq3 ? "null" : "hidden"} duration-300`} >
                            <p className='text-center p-4' >OpenJob is India’s #1 Professional platform that connects job seekers with employers. It helps job seekers to apply for jobs & talk to the corresponding HRs of the companies directly and vice versa.</p>
                        </div>
                    </div>
                    <div className='border w-full border-gray-400 ' >
                        <div className='cursor-pointer border  w-full p-4 items-center flex justify-between' onClick={() => { setFaq4(!faq4) }} >
                            <p>How can an employer post a job on OpenJob?</p>
                            <span className={`${faq4 ? "rotate-[180deg]" : "null"}`} ><BsArrowDownCircleFill /></span>
                        </div>
                        <div className={`${faq4 ? "null" : "hidden"} duration-300`} >
                            <p className='text-center p-4' >OpenJob is India’s #1 Professional platform that connects job seekers with employers. It helps job seekers to apply for jobs & talk to the corresponding HRs of the companies directly and vice versa.</p>
                        </div>
                    </div>
                    <div className='border w-full border-gray-400 ' >
                        <div className='cursor-pointer border  w-full p-4 items-center flex justify-between' onClick={() => { setFaq5(!faq5) }} >
                            <p>What type of jobs are present on OpenJob?</p>
                            <span className={`${faq5 ? "rotate-[180deg]" : "null"}`} ><BsArrowDownCircleFill /></span>
                        </div>
                        <div className={`${faq5 ? "null" : "hidden"} duration-300`} >
                            <p className='text-center p-4' >OpenJob is India’s #1 Professional platform that connects job seekers with employers. It helps job seekers to apply for jobs & talk to the corresponding HRs of the companies directly and vice versa.</p>
                        </div>
                    </div>
                    <div className='border w-full border-gray-400 ' >
                        <div className='cursor-pointer border  w-full p-4 items-center flex justify-between' onClick={() => { setFaq6(!faq6) }} >
                            <p>What is the use of OpenJob app?</p>
                            <span className={`${faq6 ? "rotate-[180deg]" : "null"}`} ><BsArrowDownCircleFill /></span>
                        </div>
                        <div className={`${faq6 ? "null" : "hidden"} duration-300`} >
                            <p className='text-center p-4' >OpenJob is India’s #1 Professional platform that connects job seekers with employers. It helps job seekers to apply for jobs & talk to the corresponding HRs of the companies directly and vice versa.</p>
                        </div>
                    </div>
                    <div className='border w-full border-gray-400 ' >
                        <div className='cursor-pointer border  w-full p-4 items-center flex justify-between' onClick={() => { setFaq7(!faq7) }} >
                            <p>What is the use of OpenJob app?</p>
                            <span className={`${faq7 ? "rotate-[180deg]" : "null"}`} ><BsArrowDownCircleFill /></span>
                        </div>
                        <div className={`${faq7 ? "null" : "hidden"} duration-300`} >
                            <p className='text-center p-4' >OpenJob is India’s #1 Professional platform that connects job seekers with employers. It helps job seekers to apply for jobs & talk to the corresponding HRs of the companies directly and vice versa.</p>
                        </div>
                    </div>
                    <div className='border w-full border-gray-400  rounded-b-xl ' >
                        <div className='cursor-pointer border  w-full p-4 items-center flex justify-between' onClick={() => { setFaq8(!faq8) }} >
                            <p>For which categories can a job seeker apply?</p>
                            <span className={`${faq8 ? "rotate-[180deg]" : "null"}`} ><BsArrowDownCircleFill /></span>
                        </div>
                        <div className={`${faq8 ? "null" : "hidden"} duration-300`} >
                            <p className='text-center p-4' >OpenJob is India’s #1 Professional platform that connects job seekers with employers. It helps job seekers to apply for jobs & talk to the corresponding HRs of the companies directly and vice versa.</p>
                        </div>
                    </div>
                </div> */}

                {/* Footer */}


            </div>
        </>
    )
}

export default Home
