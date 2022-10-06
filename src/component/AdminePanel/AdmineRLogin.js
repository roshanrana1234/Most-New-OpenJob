import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAdminloginMutation } from "../../services/profile";
import { getToken, storeToken } from '../../services/adminLocalStorage';

import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdmineRLogin = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

    const navigate = useNavigate();
    const [login] = useAdminloginMutation()
    // console.log(useLoginProfileMutation(),"18")
    // console.log([login])
    // console.log("sjkhfijkdshfjk")

    const handleSendForm = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const actualData = {
            password: data.get('password'),
            phonenumber: data.get('phonenumber'),
            // otpcode: data.get('otpcode'),
        }
        if (actualData.password && actualData.phonenumber) {
            const res = await login(actualData)
            if (res?.data?.status === "success") {
                //toastify

                toast.success("You have login successfully")
                setTimeout(() => { navigate('/adminedashboard') }, 2000)
                storeToken(res?.data?.token)
                console.log(res?.data?.status)
                setError({ status: true, msg: res.data.message, type: 'success' })
                // navigate('/home')
            }
            if (res.data.status === "failed") {
                toast.error("something went wrong")
                setError({ status: true, msg: res.data.message, type: 'error' })
            }
        } else {
            // //toastify
            setError({ status: true, msg: "OTP Required", type: 'error' })
        }
    }
    return (
        <>

            <div className='flex m-auto flex-col  justify-center items-center p-5 bbbcolor rounded-lg border shadow-2xl' >
                <form action="POST" onSubmit={handleSendForm}
                    className='flex flex-col gap-3'
                >

                    <div className='flex flex-col lg:flex-row items-center gap-2' >
                        <label
                            className="lg:w-[200px] text-sm font-semibold  after:content-['*'] after:ml-2 after:text-red-600"
                            htmlFor="">Mobile Number</label>
                        <input
                            className='w-full border border-slate-300 p-2 placeholder-slate-400 bg-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded focus:bg-slate-700 focus:text-white placeholder:text-black focus:placeholder:text-white'
                            type="tel"
                            // minLength="10"
                            placeholder='Enter Mobile Number'
                            name='phonenumber'
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row' >
                        <label
                            className="lg:w-[200px]  p-2 text-sm font-semibold  after:content-['*'] after:ml-2 after:text-red-600"
                            htmlFor="">Password</label>
                        <input
                            className=' w-full border border-slate-300 p-2 placeholder-slate-400 bg-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded focus:bg-slate-700 focus:text-white placeholder:text-black focus:placeholder:text-white '
                            type="password"
                            name='password'
                            placeholder='Enter Your Password'
                        />
                    </div>

                    <div className='bg-btncolor p-2 rounded flex justify-center items-center text-white'>
                        <input className='w-full font-bold' type="submit" value="LogIn" />
                    </div>

                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
            />
        </>
    )
}

export default AdmineRLogin