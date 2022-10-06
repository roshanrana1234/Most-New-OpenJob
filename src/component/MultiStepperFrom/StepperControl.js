import React from 'react'
// import { usePostjobMutation } from "../../services/profile"
// import { getToken, removeToken } from '../../services/LocalStorage';
// import { useSelector } from 'react-redux'

const StepperControl = ({ handleClick, currentStep, steps }) => {

    // const { basic, perks } = useSelector((state => state.user))
    // const { Interview } = useSelector((state => state.inter))
    // const { Candidate, assets, skills } = useSelector((state => state.candidate))
    // console.log(basic, Interview, Candidate, assets, skills);
    // let token = getToken('token')
    // const [postjob] = usePostjobMutation()


    // const SubmitEvent = async () => {
    //     const data = { perks, ...basic, ...Interview, ...Candidate, assets, skills, }
    //     await postjob({ data, token })

    //     handleClick("next")
    //     console.log("next");
    // }

    return (
        <>
            <div className='container flex justify-around mt-4 mb-8 ' >

                {/* Back button */}
                <button
                    onClick={() => handleClick()}
                    className={`${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}  bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-poiner border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out`} >
                    Back
                </button>

                {/* next button */}
                <button
                    onClick={() => handleClick("next")}
                    // onClick={SubmitEvent}
                    className={`bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-poiner hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out `}>
                    {currentStep === steps.length ? "Confirm" : "Next"}
                </button>

            </div>
        </>
    )
}

export default StepperControl