import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import img from '../images/main.png'

const Login = () => {
    return (
        <>
            <div className='max-h-screen bg-bgcolor' >

                <div className='h-screen bg-bgcolor ' >

                    <div className='flex lg:justify-between items-center bbcolor p-8 justify-center  w-full ' >
                        <div className='w-48 ml-10'>
                            <img className='p1' src={img} alt="OPENJOB" />
                        </div>
                    </div>

                    <div className='lg:hidden flex justify-center items-center mt-12' >
                        <div className='h-14 w-14' >
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 place-items-center p-10  ' >

                        <div className='hidden lg:block' >
                            <div>
                                <div className='text-bodycolor font-bold text-4xl' >
                                    Hire Staff in 24 to 48 hours.
                                    <span className='text-[#2BB793] font-bold text-4xl' > FOR FREE</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Outlet />
                        </div>
                    </div>

                    <div className='flex justify-center items-center text-gray-700 font-bold mt-10' >
                        100+ Top Companies Trust OpenJob
                    </div>

                </div>


            </div>
        </>
    )
}

export default Login





















































// import React, { useState } from 'react'
// import { GiPartyPopper } from "react-icons/gi";
// import { useLoginProfileMutation } from "../services/profile";
// // import { IconName } from "react-icons/gi";
// import { useVerifyOTPMutation } from "../services/profile";
// import { NavLink, useNavigate } from 'react-router-dom';
// import { getToken, storeToken } from '../services/LocalStorage';
// import img from '../images/main.png'

// const Login = () => {

//     const navigate = useNavigate();
//     const [authid, setAuthId] = useState(123)
//     const [number, setPhonenumber] = useState()
//     const [error, setError] = useState({
//         status: false,
//         msg: "",
//         type: ""
//     })


//     const [loginUser] = useLoginProfileMutation()
//     const [verifyOTP] = useVerifyOTPMutation()


//     const handleSendOTPForm = async (e) => {
//         e.preventDefault();
//         const data = new FormData(e.currentTarget)
//         setPhonenumber(data.get('phonenumber'))
//         const actualData = {
//             phonenumber: data.get('phonenumber'),
//         }
//         if (actualData.phonenumber) {
//             console.log(data.get('phonenumber'))
//             const res = await loginUser(actualData)
//             if (res?.data?.status === "success") {
//                 setAuthId(res.data.id)
//                 document.getElementById("login-form").reset()
//                 setError({ status: true, msg: res.data.message, type: 'success' })
//             }
//             if (res?.data?.status === "failed") {
//                 setError({ status: true, msg: res.data.message, type: 'error' })
//             }
//         } else {
//             setError({ status: true, msg: "Enter Valid Number", type: 'error' })
//         }
//     }


//     const handleVerifyOTPForm = async (e) => {
//         e.preventDefault();
//         const data = new FormData(e.currentTarget)
//         const actualData = {
//             otpcode: data.get('otpcode'),
//             id: authid,
//             phonenumber: number
//         }
//         if (actualData.otpcode && actualData.id) {
//             const res = await verifyOTP(actualData)
//             if (res.data.status === "success") {
//                 navigate('/home')
//                 storeToken(res?.data?.token)
//                 setError({ status: true, msg: res.data.message, type: 'success' })
//                 // navigate('/home')
//             }
//             if (res.data.status === "failed") {
//                 setError({ status: true, msg: res.data.message, type: 'error' })
//             }
//         } else {
//             setError({ status: true, msg: "OTP Required", type: 'error' })
//         }
//     }

//     return (
//         <>
//             <div className='max-h-screen overflow-hidden' >

//                 <div className='lg:block hidden' >
//                     <div className='flex gap-3 justify-center items-center  bg-[#4D3951] p-3 lg:block ' >
//                         <div className='flex gap-1 justify-center items-center text-white font-bold' >
//                             Launch Alert: apna has officially launched in Ahmednagar, Bareilly, Bhavnagar, Dhanbad, Gorakhpur, Jamnagar, Puducherry, Saharanpur, Ujjain and Warangal
//                             <span><GiPartyPopper className='text-yellow-300 text-xl' /></span>
//                         </div>
//                         <div>
//                             <a className='text-[#2BB793] font-bold' href="https://apna.co/blog/10-more-cities-join-apnas-mission-empowering-the-rising-workforce-and-accelerating-india/">LearnMore</a>
//                         </div>
//                     </div>
//                 </div>


//                 <div className='h-screen bg-[#ffffff] ' >

//                     <div className='hidden lg:block' >
//                         <div className='flex justify-between p-10 ' >
//                             <div className='h-14 w-14' >
//                                 <img src={img} alt="" />
//                             </div>
//                             <div>
//                                 <button className='text-[#2BB793]  border-[#2BB793] border-2 px-8 rounded-sm p-3 font-bold' >
//                                     Employer Login
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='lg:hidden flex justify-center items-center mt-12' >
//                         <div className='h-14 w-14' >
//                             <img src={img} alt="" />
//                         </div>
//                     </div>

//                     <div className='grid lg:grid-cols-2 place-items-center p-10  ' >

//                         <div className='hidden lg:block' >
//                             <div>
//                                 <div className='text-[#4D3951] font-bold text-4xl' >
//                                     Hire Staff in 48 hours.
//                                     <span className='text-[#2BB793] font-bold text-4xl' > FOR FREE</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {authid === null ?
//                             <div className='my-10' >
//                                 <form action="POST" onSubmit={handleSendOTPForm} >
//                                     <div className='flex flex-col gap-5 ' >
//                                         <div className='text-[#4D3951] text-xl font-bold' >
//                                             Employem Login / SignUp
//                                         </div>
//                                         <div className='flex gap-3'  >
//                                             <div className='text-gray-500 p-3 bg-gray-200 rounded font-bold ' >+91</div>
//                                             <input required type="tel" name='phonenumber' className='border p-3 ' placeholder='Enter Your Mobile Number' />
//                                         </div>

//                                         <button type='submit' className='text-white font-bold bg-[#2BB793] p-3 rounded' >
//                                             Login to post a Job
//                                         </button>

//                                     </div>
//                                 </form>
//                             </div> :
//                             <div className='my-10' >
//                                 <form action="POST" onSubmit={handleVerifyOTPForm} >
//                                     <div className='flex flex-col gap-5 ' >
//                                         <div className='text-[#4D3951] text-xl font-bold' >
//                                             Enter OTP
//                                         </div>
//                                         <div className='flex gap-3'  >
//                                             {/* <div className='text-gray-500 p-3 bg-gray-200 rounded font-bold ' >+91</div> */}
//                                             <input required type="tel" name='otpcode' className='border p-3 ' placeholder='OTP' />
//                                         </div>

//                                         <button type='submit' className='text-white font-bold bg-[#2BB793] p-3 rounded' >
//                                             submit
//                                         </button>

//                                     </div>
//                                 </form>
//                             </div>}
//                     </div>

//                     <div className='flex justify-center items-center text-gray-700 font-bold mt-10' >
//                         2,00,000+ Top Companies Trust Apna
//                     </div>

//                 </div>


//             </div>
//         </>
//     )
// }

// export default Login