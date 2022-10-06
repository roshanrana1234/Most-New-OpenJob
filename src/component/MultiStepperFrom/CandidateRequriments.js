import React, { useState, useEffect } from 'react'

import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'

import { setcandidateInfo, unsetcandidateInfo } from '../../features/candidateSlice';
import { useDispatch } from 'react-redux';


const CandidateRequriments = () => {
    const [any, setAny] = useState(false)
    const [fresher, setFresher] = useState(false)
    const [exprienced, setExprienced] = useState(false)

    const [valueoption2, setvalue] = useState('')

    const [value1, setvalue1] = useState('')
    const dispatch = useDispatch()

    console.log(valueoption2);
    console.log(value1);

    const [experience, setexperience] = useState()
    const [experienceYear, setexprienceYear] = useState()
    const [Gender, setGender] = useState()
    const [FluentEnglish, setFluentEnglish] = useState()
    const [NoEnglish, setNoEnglish] = useState()
    const [ThodaEnglish, setThodaEnglish] = useState()
    const [EnglishLevel, setEnglishLevel] = useState()

    const [Female, setFemale] = useState()
    const [Both, setBoth] = useState()
    const [miniumEducation, setEducation] = useState()
    const [FresherOnly, setFresherOnly] = useState()
    const [ExperiencedOnly, setExperiencedOnly] = useState()
    const [description, setdescription] = useState()



    // console.log(Both);
    // console.log(miniumEducation);
    // console.log(All);
    const lol = { description, experienceYear, Gender, EnglishLevel, experience, miniumEducation, }

    console.log(lol)
    useEffect(() => {
        if (lol && valueoption2 && value1) {
            dispatch(setcandidateInfo(
                {
                    Candidate: lol,
                    assets: valueoption2,
                    skills: value1
                }
            ))
        }
    }

        , [lol, valueoption2, value1]);



    const handleOnchange = val => {
        setvalue(val)
    }

    const handleOnchange1 = val => {
        setvalue1(val)
    }
    const options = [
        { label: ' Aadhaar Card', value: 'Aadhaar Card' },
        { label: ' PAN Card', value: ' PAN Card' },
        { label: ' Two-wheeler Vehicle', value: 'Two-wheeler Vehicle' },
        { label: ' SmartPhone', value: 'SmartPhone' },
    ]

    const options1 = [
        { label: ' IncomTex', value: 'IncomTex' },
        { label: ' Book-Keeping', value: ' Book-Keeping' },
        { label: ' Basic Computer', value: 'Basic Computer' },
        { label: ' Email Drafting', value: 'Email Drafting' },
    ]

    const handleAny = () => {
        if (any === false) {
            setAny(true)
            setFresher(false)
            setExprienced(false)
        }
    }
    const handleFresher = () => {
        if (fresher === false) {
            setAny(false)
            setFresher(true)
            setExprienced(false)
        }
    }
    const handleExperienced = () => {
        if (exprienced === false) {
            setAny(false)
            setFresher(false)
            setExprienced(true)
        }
    }
    return (
        <>
            <div>
                <div className='text-2xl text-tcolor p-3' >Candidate Requirements</div>

                <div>
                    <div className='text-sm text-semibold' >Minimum education</div>
                    <select className='p-2 w-full border ' id="" value={miniumEducation} onChange={(e) => setEducation(e.target.value)} >
                        <option value="10th or Below 10th">10th or Below 10th </option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Graduate">Graduate</option>
                    </select>
                </div>


                <div>
                    <div className='text-tcolor font-bold p-3' >Gender</div>
                    <div className='flex gap-6' >
                        <div className='flex gap-3' >
                            <input type="radio" name='gender' value='Male' onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="">Male</label>
                        </div>
                        <div className='flex gap-3' >
                            <input type="radio" name='gender' value='Female' onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="">Female</label>
                        </div>
                        <div className='flex gap-3' >
                            <input type="radio" name='gender' value='Both' onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="">Both</label>
                        </div>
                    </div>
                </div>



                <div>
                    <div className='text-tcolor font-bold p-3' >Exprience required</div>
                    <div className='flex gap-6' >
                        <div className='flex gap-3' >
                            <input
                                onClick={handleAny}
                                type="radio" name='Exprience' value='Any' onChange={(e) => setexperience(e.target.value)} />
                            <label htmlFor="">Any</label>
                        </div>
                        <div className='flex gap-3' >
                            <input
                                onClick={handleFresher}

                                type="radio" name='Exprience' value='Fresher only' onChange={(e) => setexperience(e.target.value)} />
                            <label htmlFor="">Fresher only</label>
                        </div>
                        <div className='flex gap-3' >
                            <input
                                onClick={handleExperienced}
                                type="radio" name='Exprience' value='Experienced only' onChange={(e) => setexperience(e.target.value)} />
                            <label htmlFor="">Experienced only</label>
                        </div>
                    </div>
                </div>

                <div className={`${any ? "null" : "hidden"} p-2`} >
                    <div className='border border-blue-600 rounded-md p-1 font-bold bg-blue-100 text-tcolor text-sm' >Both fresher & experienced candidates will be able to apply.</div>
                </div>
                <div className={`${fresher ? "null" : "hidden"} p-2`} >
                    <div className='border border-blue-600 rounded-md p-1 font-bold bg-blue-100 text-tcolor text-sm' >Only candidates with upto 1 year of experience will be eligible to apply</div>
                </div>
                <div className={`${exprienced ? "null" : "hidden"} p-2`} >
                    <div>
                        <select className='p-2 w-full border rounded ' name="" id="" value={experienceYear} onChange={(e) => setexprienceYear(e.target.value)}>
                            <option value="Min 1 year">
                                Min 1 year
                            </option>
                            <option value="Min 3 year">
                                Min 3 year
                            </option>
                            <option value="Min 3 year">
                                Min 5 year
                            </option>
                            <option value="Min 10 year">
                                Min 10 year
                            </option>
                        </select>

                    </div>
                </div>

                <div>
                    <div className='text-tcolor font-bold p-3' >English level required</div>
                    <div className='flex flex-col gap-6' >
                        <div className='flex gap-3' >
                            <input type="radio" name='English' value="No eglish" onChange={(e) => setEnglishLevel(e.target.value)} />
                            <label htmlFor="">No English</label>
                        </div>
                        <div className='flex gap-3' >
                            <input type="radio" name='English' value="Thoda enlish" onChange={(e) => setEnglishLevel(e.target.value)} />
                            <label htmlFor="">Thoda English</label>
                        </div>
                        <div className='flex gap-3' >
                            <input type="radio" name='English' value="Good english" onChange={(e) => setEnglishLevel(e.target.value)} />
                            <label htmlFor="">Good English</label>
                        </div>
                        <div className='flex gap-3' >
                            <input type="radio" name='English' value="Fluent english" onChange={(e) => setEnglishLevel(e.target.value)} />
                            <label htmlFor="">Fluent English</label>
                        </div>
                    </div>
                </div>

                {/* Multiple values  */}
                <div className='' >
                    <div className='text-tcolor font-bold p-4 text-lg' >
                        Please select assets/documents required from candidates to apply
                    </div>
                    <div className='text-sm text-tcolor' >
                        We will ask questions to candidates as per your selection, and only those that qualify will be able to apply
                    </div>

                    <div className='p-3' >
                        <MultiSelect
                            onChange={handleOnchange}
                            options={options}
                        />
                    </div>
                    {valueoption2}
                </div>


                {/* Multiple values  */}
                <div className='' >
                    <div className='text-tcolor font-bold p-4 text-lg' >
                        Please select preferred skills you want OpenJob to Test candidates on
                    </div>
                    <div className='text-sm text-tcolor' >
                        We will ask questions to candidates as per your selection, and only those that qualify will be able to apply
                    </div>

                    <div className='p-3' >
                        <MultiSelect
                            onChange={handleOnchange1}
                            options={options1}
                        />
                    </div>
                    {value1}
                </div>


                {/* Text area */}

                <div>
                    <div className='text-tcolor font-bold p-3' >
                        Job description / Additional requirement *
                    </div>
                    <textarea
                        onChange={(e) => setdescription(e.target.value)}
                        placeholder=' Job description / Additional requirement *'
                        className='border p-2 w-full shadow-lg' name="" id="" cols="30" rows="5">
                    </textarea>
                    <div className='text-sm text-tcolor'  >
                        Please mention if you have any specific requirements here, we will check the candidates for you.
                    </div>
                </div>





            </div>
        </>
    )
}

export default CandidateRequriments