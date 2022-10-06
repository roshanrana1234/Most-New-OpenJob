import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useApllyJobMutation } from "../services/profile"
import { getToken } from '../services/userLocalStorage';
import { NavLink, useNavigate } from 'react-router-dom';



//   {"fullName":"sarvinda",
// "Email":"sarvind@gmail.com",
// "number":"13212132132",
// "Jobtitle":"frontend",
// "relocate":"Yes, I can commute", 
//  "City": "bhopal",
// "resume": "gsdgfd",
//  "Company":"umpteen",
// "experience":"2",
// "interviewDate": "10-10-2022",
// "appliedTo":"32122465"
// }





const ApplyJob = () => {

    const navigate = useNavigate();
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

    const [saveProfile] = useApllyJobMutation()

    let { applyId } = useParams();
    const [appliedTo, setid] = useState()


    useEffect(() => {

        if (applyId) {
            setid(applyId)
        }
    }, [applyId]);


    const [fullName, setfullName] = useState()
    const [Email, setEmail] = useState()
    const [number, setnumber] = useState()
    const [Jobtitle, setJobtitle] = useState()
    const [relocate, setrelocate] = useState()
    const [Company, setCompany] = useState()
    const [experience, setexperience] = useState()
    const [interviewDate, setinterviewDate] = useState()
    const [City, setCity] = useState()
    //  const [appliedTo, setid] = useState()
    const [resume, setresume] = useState()

    console.log(Email)
    console.log(resume)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const actualData = new FormData()
        actualData.append('fullName', fullName)
        actualData.append('Email', Email)
        actualData.append('number', number)
        actualData.append('Jobtitle', Jobtitle)
        actualData.append('Company', Company)
        actualData.append('interviewDate', interviewDate)
        actualData.append('City', City)
        actualData.append('appliedTo', appliedTo)
        actualData.append('resume', resume)
        // console.log(actualData.get('fullName'))
        //   console.log(actualData.get('price'))
        //   console.log(actualData.get('description'))
        //   console.log(actualData.get('Category'))
        //   console.log(actualData.get('quantity'))
        //   console.log(actualData.get('pjl'))
        console.log(actualData.get('resume', "82"))
        //   console.log(actualData.get('rdoc'))


        if (Company && number && resume) {
            const token = getToken('token')
            const doc = await saveProfile({ actualData, token })


            console.log(doc)
            if (doc?.data?.status === "succesfull") {
                navigate('/userpage/userfindjob')
                //toastyfy

            }


            setError({ status: true, msg: "resume Uploaded Successfully", type: 'success' })
            // resetForm()
        } else {
            setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
    }








    return (

        <div className='bg-bgcolor p-6' >

            <div className=' place-items-center relative ' >
                {/* form */}
                <div className=' bg-white border w-9/12 m-auto rounded ' >
                    {/* first step */}
                    <form action="" onSubmit={handleSubmit} >
                        <div className='flex flex-col gap-4 items-center p-6 w-full' >
                            <div className='text-[#1A2025] font-black text-bold text-2xl ' >
                                Add Your Information
                            </div>
                            <div className='flex flex-col gap-1 w-full' >
                                <div>Enter full name</div>
                                <div>
                                    <input
                                        onChange={(e) => setfullName(e.target.value)}
                                        name='fullName'
                                        type="text" className='w-full border rounded p-2' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 w-full' >
                                <div>Email</div>
                                <div>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}

                                        name='Email'
                                        type="email" className='w-full border rounded p-2' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 w-full' >
                                <div>number</div>
                                <div>
                                    <input
                                        onChange={(e) => setnumber(e.target.value)}
                                        name='number'
                                        type="tel" className='w-full border rounded p-2' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 w-full' >
                                <div className='font-bold my-2' >Can you relocate for job</div>
                                <div >
                                    <div className='flex flex-col gap-2 ' value={relocate} onChange={(e) => setrelocate(e.target.value)} >
                                        <div className='flex gap-1  items-center'  >
                                            <input type="radio" name='relocate' value="Yes, I can commute" />
                                            <label htmlFor="">Yes, I can commute</label>
                                        </div>
                                        <div className='flex gap-1 items-center' >
                                            <input type="radio" name='relocate' value="Yes, I am planning to relocate" />
                                            <label htmlFor="">Yes, I am planning to relocate</label>
                                        </div>
                                        <div className='flex gap-1 items-center' >
                                            <input type="radio" name='relocate' value="No" />
                                            <label htmlFor="">No</label>
                                        </div>
                                        <div className='flex gap-1 items-center' >
                                            <input type="radio" name='relocate' value="Yes, but I need relocation assistance" />
                                            <label htmlFor="">Yes, but I need relocation assistance</label>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className='flex flex-col gap-1 w-full my-2' >
                                <div   >City You Belog To</div>
                                <div>
                                    <input onChange={(e) => setCity(e.target.value)}
                                        name='City'
                                        type="text" className='w-full border rounded p-2' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 w-full' >
                                <div className='text-xl font-bold ' >resume</div>
                                <div>
                                    <input
                                        accept="doc/*"
                                        onChange={(e) => setresume(e.target.files[0])}
                                        name='resume'
                                        type="file" className='w-full border rounded p-2' />
                                </div>
                            </div>


                            <div className='w-full' >

                                <div className='text-xl font-bold' >Enter a past job that shows relevant experience</div>
                                <div className='text-lg my-2 ' >Relevant experience</div>
                                <div className='flex flex-col  w-full' >
                                    <div >
                                        <label htmlFor="Company"> Jobtitle </label>
                                        <input onChange={(e) => setJobtitle(e.target.value)}
                                            name='Jobtitle'
                                            type="text" className='w-full border rounded p-2' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1 w-full' >
                                    <div>
                                        <label htmlFor="Company"> Company </label>
                                        <input
                                            onChange={(e) => setCompany(e.target.value)}
                                            name='Company'
                                            type="text" className='w-full border rounded p-2' />
                                    </div>
                                </div>
                            </div>


                            <div className='w-full'  >
                                <div className='font-bold text-xl my-2' >Employer question</div>
                                <div className='flex flex-col gap-1 w-full' >
                                    <div>How many years of  experience do you have?</div>
                                    <div className='w-full' value={experience} onChange={(e) => setexperience(e.target.value)}  >
                                        <select className='w-full p-2 border rounded' name="experience" id="">
                                            <option value="0">
                                                0
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="2">
                                                2
                                            </option>
                                            <option value="3">
                                                3
                                            </option>
                                            <option value="4">
                                                4
                                            </option>
                                            <option value="5">
                                                5
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col gap-1 w-full' >
                                <div>Choose Date of interview</div>
                                <div>
                                    <input

                                        onChange={(e) => setinterviewDate(e.target.value)}
                                        name='interviewDate'
                                        type="date" className='w-full border rounded p-2' />
                                </div>
                            </div>

                            <div>
                                <button
                                    className='text-white bg-btncolor font-bold active:text-black p-2 rounded px-4' >
                                    Submit
                                </button>
                            </div>

                        </div>
                    </form>

                </div>



            </div>
        </div>
    )
}

export default ApplyJob