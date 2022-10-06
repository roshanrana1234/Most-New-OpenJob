import React, { useState, useEffect } from 'react'
import { setinterSliceInfo, unsetinterSliceInfo } from '../../features/interviewSlice'
import { useDispatch } from 'react-redux';

const InterViewerInfromation = () => {

    const dispatch = useDispatch()
    const [selfw, setSelfw] = useState(false)
    const [other, setOther] = useState(false)
    const [personal, setPersonal] = useState(false)
    const [online, setOnline] = useState(false)
    const [check, setcheck] = useState(false)




    // const [Interviewer, setInterviewer] = useState()
    const [managecandidates, setmanage] = useState()
    const [InterviewCity, setCity] = useState()
    const [Area, setArea] = useState()
    const [Email, setEmail] = useState()
    const [OtherRecruiter, setOtherRecruiter] = useState()
    const [RecruiterName, setRecruiterName] = useState()

    const [HRWhatsapp, setHRWhatsapp] = useState();

    const [Inpersoninterview, setInpersoninterview] = useState()
    const [interviewtype, setinterviewtype] = useState()
    const [Interviewer, setInterviewer] = useState()

    const [Callwhatsapp, setCallwhatsapp] = useState()
    const [whatsapp, setwhatsapp] = useState()
    const [whatsappwebsite, setwhatsappwebsite] = useState()



    const lol = {
        Interviewer,
        InterviewCity, Area, Email, RecruiterName, HRWhatsapp, interviewtype,

        managecandidates,
    }

    console.log(lol);
    useEffect(() => {
        if (lol) {
            dispatch(setinterSliceInfo(
                {
                    Interview: lol,

                }
            ))
        }
    }

        , [lol]);


    const handleSelf = () => {
        if (selfw === false) {
            setSelfw(true)
            setOther(false)
        }
    }
    const handleOthe = () => {
        if (other === false) {
            setSelfw(false)
            setOther(true)
        }
    }
    const handlePersonal = () => {
        if (personal === false) {
            setPersonal(true)
            setOnline(false)
        }
    }
    const handleOnline = () => {
        if (online === false) {
            setOnline(true)
            setPersonal(false)
        }
    }
    return (
        <>
            <div>
                <div className='text-tcolor text-3xl font-black' >Interviewer Details</div>
                <div className='text-gray-600 font-semibold ' >Who would be connecting with candidates for this job ?</div>

                <div className='flex gap-4 p-4' >
                    <div className='flex gap-3' >
                        <input
                            onClick={handleSelf}
                            type="radio" name='detail' value='Myself' onChange={(e) => setInterviewer(e.target.value)} />
                        <div className='text-tcolor font-semibold' >Myself</div>
                    </div>
                    <div className='flex gap-3' >
                        <input
                            onClick={handleOthe}
                            type="radio" name='detail'
                            value='Other Recruiter' onChange={(e) => setInterviewer(e.target.value)}
                        />
                        <div className='text-tcolor font-semibold' >Other Recruiter</div>
                    </div>

                </div>

                <div className={`${selfw ? "null" : "hidden"}`} >
                </div>
                <div className={`${other ? "null" : "hidden"}`} >
                    <div className='my-5' >
                        <input
                            onChange={(e) => setRecruiterName(e.target.value)}
                            className='p-2 w-full rounded border shadow-lg'
                            type="text" placeholder="Recruiter's Name " />
                    </div>
                    <div className='flex gap-5' >
                        <input
                            onChange={(e) => setHRWhatsapp(e.target.value)}
                            className='p-2 w-full rounded border shadow-lg'
                            type="text" placeholder="HR Whatsapp Number* " />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-2 w-full rounded border shadow-lg'
                            type="text" placeholder="Contact Email * " />
                    </div>
                </div>


                <div className='text-tcolor text-3xl font-black mt-9' >Interview method and address</div>
                <div className='text-gray-600 font-semibold ' >Let candidates know how interview will be conducted for this job.</div>


                <div className='flex gap-4 p-4' >
                    <div className='flex gap-3' >
                        <input
                            onClick={handlePersonal}
                            type="radio" name='method' value='In-person interview' onChange={(e) => setinterviewtype(e.target.value)} />
                        <div className='text-tcolor font-semibold' >In-person interview</div>
                    </div>
                    <div className='flex gap-3' >
                        <input
                            onClick={handleOnline}
                            type="radio" name='method' value='Telephonic/Online interview' onChange={(e) => setinterviewtype(e.target.value)} />
                        <div className='text-tcolor font-semibold' >Online interview</div>
                    </div>

                </div>


                <div className={`${personal ? "null" : "hidden"}`} >

                    <div className='p-5' >
                        <div className='flex gap-4' >
                            <input onClick={() => setcheck(!check)} type="checkbox" value="Interview address is same as Job location" onChange={(e) => setCity(e.target.value)} />
                            <div>Interview address is same as Job location
                            </div>
                        </div>
                        {/* Hidden */}
                        <div className={`${check ? "null" : "hidden"} p-4`} >
                            <div className='flex gap-3' >
                                <input
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder='Interview City'
                                    className='border rounded-md p-2 w-full shadow-xl' type="text" />
                                <input
                                    onChange={(e) => setArea(e.target.value)}
                                    placeholder='Area'
                                    className='border rounded-md p-2 w-full shadow-xl' type="text" />
                            </div>
                        </div>




                    </div>
                </div>

                <div className={`${online ? "null" : "hidden"}`} >
                </div>



                <div className='flex flex-col gap-3 p-3 mt-7' >
                    <div className='text-tcolor text-2xl font-black' > How would you like to manage candidates for this job?</div>

                    <div className='flex gap-3' >
                        <input

                            type="radio" name="meet" id="" value='Call + whatsapp' onChange={(e) => setmanage(e.target.value)} />
                        <div>Call + whatsapp</div>
                    </div>
                    <div className='flex gap-3' >
                        <input
                            type="radio" name="meet" id="" value='whatsapp' onChange={(e) => setmanage(e.target.value)} />
                        <div> whatsapp</div>
                    </div>
                    <div className='flex gap-3' >
                        <input
                            type="radio" name="meet" id="" value='whatsapp + website' onChange={(e) => setmanage(e.target.value)} />
                        <div> whatsapp + website</div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default InterViewerInfromation