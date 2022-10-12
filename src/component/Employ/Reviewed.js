import React from 'react'
import { RiWhatsappFill } from 'react-icons/ri';
import { MdDangerous } from 'react-icons/md';
import { BsFillHandbagFill, BsFillPersonFill } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';
const Reviewed = () => {
    return (

        <>
            <div className='flex gap-7 border bg-white rounded-md border-gray-600 p-4 ' >
                <div className='w-16 h-16 rounded-full p-2 shrink-0' >
                    <img className='rounded-full h-full w-full' src="https://media.gq.com/photos/5e5ebddfdaeaac0009c5109f/16:9/w_1280,c_limit/burna-boy-gq-style-spring-summer-2020-social-16x9.jpg" alt="" />
                </div>
                <div className='w-full' >
                    <div className='flex w-full justify-between items-center' >
                        <div className='flex text-sm text-gray-600 flex-col' >
                            <div className='font-bold text-xl py-2' >Pradeep Yadav</div>
                            <div>Fresher</div>
                            <div> saketnagar , Bhopal</div>
                        </div>
                        <div>
                            <select className='border p-2 rounded focus:outline-none ' name="" id="">
                                <option value="">Select Status</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-1 text-sm text-gray-600 flex-col mt-4' >
                        <div className='flex items-center gap-2' > <span><BsFillHandbagFill className='text-xl' /></span> Fresher</div>
                        <div className='flex items-center gap-2' > <span><HiAcademicCap className='text-xl' /></span> 12th pass</div>
                        <div className='flex items-center gap-2'  > <span><BsFillPersonFill className='text-xl' /></span> Male , 28</div>
                    </div>
                    <div className='flex lg:items-center gap-2 mt-4 lg:flex-row flex-col items-start' >
                        <div className='font-bold ' >8087935765</div>
                        <button className=' flex gap-2 items-center border-b-4 active:text-black border border-green-500 text-gray-600  p-2 rounded font-bold' > <span><RiWhatsappFill className='text-green-600 text-xl'
                        /></span> Whatsapp</button>
                        <button className=' flex gap-2 items-center border-b-4 active:text-black border border-gray-500 text-gray-600 p-2 rounded font-bold' >
                            <span><MdDangerous className='text-gray-600 text-xl' /></span> Not Relavant</button>
                    </div>
                    <div className='flex w-full justify-between lg:items-center items-start flex-col lg:flex-row' >
                        <div className='text-gray-600 text-sm font-bold mt-4' >
                            Call from candidate answered 2 day ago
                        </div>
                        <div className='text-gray-600 text-sm font-bold mt-4' >
                            Applied in Oct 10, 2022 | 04:34 PM
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Reviewed