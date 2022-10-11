import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import img from '../../images/main.png'


const AdmineLogin = () => {
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
                                <div className='text-[#4D3951] font-bold text-4xl' >
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
                        200 Top Companies Trust OpenJOb
                    </div>

                </div>


            </div>
        </>
    )
}

export default AdmineLogin