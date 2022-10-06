
import React from 'react'
import { useGetDetailsQuery } from '../../services/profile';
import { useGetjobsQuery } from '../../services/profile'
import { useGetUnderReviewjobsQuery, useDeletejobbyidMutation } from '../../services/profile';
import { getToken, removeToken } from '../../services/adminLocalStorage';
const AdmineUnderReview = () => {
    let token = getToken('token')
    const { data: Data } = useGetUnderReviewjobsQuery(token)
    const [deletepost] = useDeletejobbyidMutation()

    return (
        <>
            <div className='grid grid-cols-2 text-black' >


                {
                    !!Data && Data.map(({ jobRole, Minimum, Maximum, InterviewCity, JobActivation, _id }) => {
                        return <div className=' bg-bgcolor shadow border flex flex-col gap-2 p-3 my-5 rounded w-9/12 m-auto' key={_id} >
                            <div className='font-bold text-xl ' >
                                {jobRole}
                            </div>
                            <div>
                                ₹{Minimum} - ₹{Maximum}
                            </div>
                            <div>
                                {InterviewCity}
                            </div>
                            <div>
                                <button className='text-red-500 border p-1 px-2 font-bold text-sm border-red-500 rounded-sm'  >
                                    {JobActivation}
                                </button>
                            </div>
                            <div className='flex gap-4' >
                                <button className='p-2 text-white font-bold px-5 rounded bg-btncolor' >
                                    Edit
                                </button>
                                {/* <button className='p-2 text-white font-bold px-5 rounded bg-red-500' onClick={() => deletepost({ token, _id })}  >
                                Delete

                            </button> */}
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default AdmineUnderReview













// import React from 'react'

// const AdmineUnderReview = () => {
//     return (
//         <div>AdmineUnderReview</div>
//     )
// }

// export default AdmineUnderReview