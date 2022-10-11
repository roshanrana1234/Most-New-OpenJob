import React from 'react'
import { FcCalculator } from "react-icons/fc";
import { AiTwotoneMobile } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { HiThumbUp } from "react-icons/hi";
const NewLand = () => {
    return (
        <>
            <div className='bg-[#fff] grid grid-cols-2 lg:grid-cols-4 p-3 place-items-center shadow-xl rounded-md font-semibold' >

                <div className='flex flex-col justify-center items-center' >
                    <div className='bg-[#F8F8F8] h-18 w-18 rounded-full p-5 ' >
                        <FcCalculator className='text-7xl' />
                    </div>

                    <div className='text-gray-400 text-center  text-lg ' >
                        Post your job in under 3 minutes
                    </div>
                </div>


                <div className='flex flex-col justify-center items-center' >
                    <div className='bg-[#F8F8F8] h-18 w-18 rounded-full p-5 ' >
                        <AiTwotoneMobile className='text-7xl' />
                    </div>

                    <div className='text-gray-400 text-center  text-lg' >
                        Start conducting interviews instantly
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center' >
                    <div className='bg-[#F8F8F8] h-18 w-18 rounded-full p-5 ' >
                        <HiThumbUp className='text-7xl' />
                    </div>

                    <div className='text-gray-400 text-center  text-lg' >
                        Post up to 3 different jobs at a time
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center' >
                    <div className='bg-[#F8F8F8] h-18 w-18 rounded-full p-5 ' >
                        <HiUserGroup className='text-7xl' />
                    </div>
                    <div className='text-gray-400 text-center text-lg ' >
                        Be a kind employer follow the apna

                    </div>

                </div>

            </div>
            <div className='grid grid-cols-3 ' >
                <div className='bg-[#2BB793] h-2' > </div>
                <div className='bg-[#83BDE4] h-2' > </div>
                <div className='bg-[#FFD166] h-2' > </div>
            </div>



        </>
    )
}

export default NewLand