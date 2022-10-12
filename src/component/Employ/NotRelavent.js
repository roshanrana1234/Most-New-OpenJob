import React from 'react'
import { MdOutlineRestore } from 'react-icons/md';
import { BsFillHandbagFill, BsFillPersonFill, BsFillFilePersonFill } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';
import { FaLanguage } from 'react-icons/fa';
import { BiMedal } from 'react-icons/bi';
import { FcDocument } from 'react-icons/fc';

const NotRelavent = () => {
    return (
        <>
            <div className='flex flex-col  border bg-white rounded-md border-gray-600 p-4 ' >
                <div className='flex  gap-7 flex-col lg:flex-row   bg-white rounded-md border-gray-600 p-4  ' >
                    <div className='w-16 h-16 rounded-full p-2 shrink-0' >
                        <img className='rounded-full h-full w-full' src="https://media.gq.com/photos/5e5ebddfdaeaac0009c5109f/16:9/w_1280,c_limit/burna-boy-gq-style-spring-summer-2020-social-16x9.jpg" alt="" />
                    </div>
                    <div className='w-full' >
                        <div className='flex text-sm text-gray-600 flex-col' >
                            <div className='font-bold text-xl py-2' >Pradeep Yadav</div>
                            <div>Fresher</div>
                            <div> saketnagar , Bhopal</div>
                        </div>
                        <div className='flex gap-1 text-sm text-gray-600 flex-col mt-4' >
                            <div className='flex items-center gap-2' > <span><BsFillHandbagFill className='text-xl' /></span> Fresher</div>
                            <div className='flex items-center gap-2' > <span><HiAcademicCap className='text-xl' /></span> 12th pass</div>
                            <div className='flex items-center gap-2'  > <span><BsFillPersonFill className='text-xl' /></span> Male , 28</div>
                            <div className='flex items-center gap-2'  > <span  ><FaLanguage className='text-xl' /></span> English,Hindi</div>
                            <div className='flex items-center gap-2'  > <span  ><BiMedal className='text-xl' /></span> Knowlegd of Thoda English and Good Engish +24 more</div>
                            <div className='flex items-center gap-2'  > <span  ><BsFillFilePersonFill className='text-xl' /></span> Driving License Uploaded</div>
                            <div className='flex items-center gap-2'  > <span  ><FcDocument className='text-xl' /></span> show Resume</div>
                        </div>
                        <div>
                            <button className='border flex items-center gap-2 p-2 border-green-500 font-bold rounded border-b-4 mt-4' >
                                <span><MdOutlineRestore className='text-green-500 text-xl' /></span>
                                Restore</button>
                        </div>

                        <div className='flex w-full justify-end' >
                            <div className='text-gray-600 text-sm font-bold mt-4' >
                                Applied in Oct 10, 2022 | 04:34 PM
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-400 rounded-lg p-2 text-gray-600 font-bold ' >
                    Not intrested
                </div>
            </div>
        </>
    )
}

export default NotRelavent