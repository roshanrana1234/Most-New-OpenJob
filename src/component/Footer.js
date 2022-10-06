import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import logo from '../images/main.png'
const Footer = () => {
    return (
        <>
            {/* Footer */}

            <div className='bbcolor text-white text-sm mt-10' >
                <div className='lg:w-10/12  p-4 m-auto ' >
                    <div className='grid grid-cols-3 place-items-center' >

                        {/* First */}
                        <div>
                            <div className='font-bold py-2' >Links</div>
                            <div>
                                <ul className='flex flex-col ' >
                                    <li>Download OpenJob App  <span className='text-red-500'> Coming Soon</span></li>

                                    <li>Free job alerts</li>
                                    <li>Careers</li>
                                    <li>Contact Us</li>
                                    <li>Vulenrability Disclosure Policy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Second */}
                        <div>
                            <div className='font-bold py-2' >Legal</div>
                            <div>
                                <ul className='flex flex-col ' >
                                    <li>Privacy Policy</li>
                                    <li>User Terms & conditions</li>
                                    <li>Employer Terms of service</li>
                                    <li>Employer FAQS</li>
                                    <li>Community Guidelines</li>
                                </ul>
                            </div>
                        </div>
                        {/* Third */}
                        <div>
                            <div className='font-bold py-2' >Resources</div>
                            <div>
                                <ul className='flex flex-col ' >
                                    <li>Blog</li>
                                    <li>Sitemap</li>

                                </ul>
                            </div>
                        </div>



                    </div>



                </div>
            </div>

            {/* FooteEnd */}

            <div className='bg-white text-[#1A2025]  text-sm p-2' >
                <div className='  p-4 m-auto ' >
                    <div className='grid lg:grid-cols-2 grid-cols-1 place-items-center' >

                        {/* First Part */}
                        <div className='flex flex-col items-center gap-8' >

                            <div className='flex items-center justify-center gap-3 just h-full i' >
                                <div className='w-32 bbcolor p-2 rounded h-full flex items-center' >
                                    <img src={logo} alt="" />
                                </div>
                                <div className='flex items-center justify-center flex-col gap-4 text-2xl font-bold' >
                                    <div>Follow up on social media</div>
                                    <div className='flex w-full gap-3 text-2xl justify-center' >
                                        <FaFacebookSquare />
                                        <FaLinkedinIn />
                                        <BsTwitter />
                                        <BsInstagram />
                                        <AiFillYoutube />
                                    </div>
                                </div>
                            </div>
                            <div className='text-sm font-semibold text-gray-400 ' >
                                © 2022 OpenJob | All rights reserved.
                            </div>
                        </div>

                        {/* second part */}
                        <div className='p-4 hidden lg:block' >
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer