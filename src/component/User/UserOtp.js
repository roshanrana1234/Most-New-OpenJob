import React from 'react'
import { Link } from 'react-router-dom'
const UserOtp = () => {
    return (
        <>

            <div className='flex m-auto flex-col gap-4 justify-center items-center p-5 btncolor rounded-lg ' >
                <form action="POST"
                    className='flex flex-col gap-3 '
                >
                    <label
                        className="lg:w-[200px]  p-2 text-white font-semibold  after:content-['*'] after:ml-2 after:text-red-600"
                        htmlFor="">Enter Your mobile Number</label>

                    <div className='flex gap-3 items-center' >
                        <div className='p-2 rounded bg-gray-200 font-bold' >+91</div>
                        <input className='p-2 border ' type="tel" />
                    </div>

                    <div className='bbcolor border-white border  active:bg-black p-2 rounded flex justify-center items-center text-white'>
                        <input className='w-full font-bold' type="submit" value="LogIn" />
                    </div>
                </form>

                <Link to="/userlogin/usersignup" >
                    <button
                        className=' font-bold text-white bbcolor p-2 px-5 rounded w-full mt-5'
                    >Varified
                    </button>
                </Link>
            </div>
        </>
    )
}

export default UserOtp