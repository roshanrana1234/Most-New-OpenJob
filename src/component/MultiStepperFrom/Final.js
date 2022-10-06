import React from 'react'
import { Link } from 'react-router-dom'
import { TiTick } from "react-icons/ti";
import { usePostjobMutation } from "../../services/profile"
import { getToken, removeToken } from '../../services/LocalStorage';
import { useSelector } from 'react-redux'


const Final = () => {
    const { basic, perks } = useSelector((state => state.user))
    const { Interview } = useSelector((state => state.inter))
    const { Candidate, assets, skills } = useSelector((state => state.candidate))
    console.log(basic, Interview, Candidate, assets, skills);
    let token = getToken('token')

    const [postjob, isSuccess, isLoading] = usePostjobMutation()

    console.log(isSuccess, "18")
    console.log(isLoading, "19")
    const SubmitEvent = async () => {
        const data = { perks, ...basic, ...Interview, ...Candidate, assets, skills, }
        await postjob({ data, token })

        // handleClick("next")
        console.log("next");
    }
    return (
        <>

            <div>
                <button onClick={SubmitEvent}
                    className='text-white bg-btncolor font-bold p-3 px-7 bbbcolor' >Confirm Post Job</button>
            </div>

            {/* <div className='container md:mt-10' >
                <div className='flex flex-col items-center  ' >
                    <div className='text-green-400 flex flex-col justify-center items-center' >
                        <div className='bg-gray-400 rounded-full h-20 w-20 flex justify-center items-center' >
                            <TiTick className='text-6xl text-green-500 ' />
                        </div>
                        <div className='mt-3 text-xl font-semibold uppercase text-green-500' >
                            Congratulation!
                        </div>
                        <div className='text-lg font-semibold text-gray-500 ' >
                            Your Account has been Created
                        </div>
                        <Link to="/cform"  >
                            <button className='h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100' >Close</button>
                        </Link>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Final