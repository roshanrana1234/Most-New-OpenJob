import React from 'react'
import logo from '../../images/main.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';

const UserLogin = () => {
    return (
        <>
            <div className='bgcolor h-screen ' >

                <div className='flex lg:justify-between items-center bbcolor p-8 justify-center  w-full ' >
                    <div className='w-48 ml-10'>
                        <img className='p1' src={logo} alt="OPENJOB" />
                    </div>
                    {/* <div className='text-white font-bold btncolor p-3 rounded px-5 mr-10 hidden lg:block border-white border active:bg-white active:text-black ' >
                        <Link to="Userrlogin" >
                            <button className='' >
                                Employem Login / SignUp
                            </button>
                        </Link>
                    </div> */}
                </div>

                <div className='flex justify-center items-center' >
                    <div className='text-5xl font-black text-bbcolor p-5' >
                        Candidate Login
                    </div>

                </div>

                <div className='grid lg:grid-cols-2 place-items-center p-5 my-10  ' >
                    <div className='hidden lg:block' >
                        <div>
                            <div className='w-[400px]' >
                                <img src="https://welpmagazine.com/wp-content/uploads/2022/01/pexels-ketut-subiyanto-4962584-758x505.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div  >
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserLogin