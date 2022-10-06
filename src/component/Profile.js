import React from 'react';
import { useUseraboutQuery } from '../services/profile';
import { getToken } from '../services/userLocalStorage';

const Profile = () => {

    const token = getToken('token')
    const { data } = useUseraboutQuery(token)
    console.log(data);
    return (
        <>
            <div>
                <div className=' flex flex-col gap-7 border bg-white rounded shadow-xl p-6' >
                    <div className='flex justify-between' >
                        <div className='text-xl font-bold' >Profile</div>
                        <button className='bg-btncolor p-2 px-4 rounded text-white font-bold active:text-black' >Edit</button>
                    </div>

                    <div className='flex flex-col gap-3' >
                        <div className='font-bold text-xl' >Basic Details</div>
                        <div className='flex gap-3 w-full' >
                            <div className='flex flex-col w-full' >
                                <label htmlFor="">Name</label>
                                <input className='border shadow rounded p-2 w-full focus:border-b-4 box-border border-btncolor focus:outline-none ' type="text" />
                            </div>
                            <div className='flex flex-col w-full' >
                                <label htmlFor="">Email</label>
                                <input
                                    className='border shadow rounded p-2 w-full focus:border-b-4 box-border border-btncolor focus:outline-none '
                                    type="email" />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col' >
                                <label htmlFor="">Mobile</label>
                                <input
                                    className='border shadow rounded p-2 w-full focus:border-b-4 box-border border-btncolor focus:outline-none '
                                    type="tel" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col' >
                        <div>GST Details</div>
                        <div className='flex gap-2' >
                            <input
                                placeholder='GST No.'
                                className='border shadow rounded p-2  focus:border-b-4 box-border border-btncolor focus:outline-none '
                                type="tel" name="" id="" />
                            <button className='font-bold border p-2 px-5 rounded border-gray-600 border-r-4 active:text-green-600' >Verify</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile