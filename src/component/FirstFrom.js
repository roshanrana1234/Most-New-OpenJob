import React, { useState } from 'react'
import img from '../images/main.png'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { BsBuilding } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../services/LocalStorage';
// import { getToken, storeToken } from '../services/LocalStorage';
import { useGetDetailsQuery } from '../services/profile';
import { useAddFirstDetailsMutation } from '../services/profile'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});



const FirstFrom = () => {

    //     let token = getToken('token')
    //     const { data } = useGetDetailsQuery(token)
    // console.log(data)
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
    const [hiringFor, sethiringFor] = useState();
    const [companyName, setcompanyName] = useState();
    const [companyWeb, setcompanyWeb] = useState();
    const [employeesNumber, setemployeesNumber] = useState();
    const [hiringoption, sethiringoption] = useState();


    const [toggleState, setToggleState] = useState(1);

    const [first] = useAddFirstDetailsMutation()

    const toggleTab = (index) => {
        // console.log(index);+++
        setToggleState(index)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let token = getToken('token')
        const actualData = { hiringFor, companyWeb, employeesNumber, companyName, hiringoption }
        console.log(actualData)

        if (actualData.companyWeb && actualData.employeesNumber) {
            const res = await first({ actualData, token })

            if (res?.data?.status === "success") {
                navigate('/newuser')

                console.log(res?.data?.status)
                setError({ status: true, msg: res.data.message, type: 'success' })
            }
        }
    }
    let token = getToken('token')
    const { data } = useGetDetailsQuery(token)
    if (data) {
        console.log(data?.user?.firstfrom.length
        )
        if (data?.user?.firstfrom.length > 0) {
            navigate('/newuser')
        }
    }
    return (
        <>
            <div className='' ></div>
            <div className=' flex flex-col justify-center items-center gap-2 bbcolor' >
                <div className='my-4' >
                    <img className='w-64' src={img} alt="" />
                </div>
                <div className='text-stale-500 text-3xl font-bold text-white' >Welcom!</div>
                <div className='text-gray-200 p-2 ' >
                    Since this is Your first job posting,lets setup your company account
                </div>
            </div>
            <div className='p-8 border bg-[#F8F8F8] h-screen overflow-auto' >
                <form action="post" onSubmit={handleSubmit} >
                    <div className='bg-[#fff] shadow-xl p-8 w-10/12  m-auto' >

                        <div className='flex justify-center items-center flex-col' >
                            <div className='text-gray-400 p-3'  >
                                Choose any action belwo
                            </div>
                            <div className='w-9/12' >
                                <fieldset>
                                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-3' >
                                        <div className={`flex gap-3 p-6  border border-black rounded-xl ${toggleState === 1 ? "active-tabs" : "tabs"}`}
                                            onClick={() => toggleTab(1)}
                                        >
                                            {/* <input type="radio" name='hiring' value="myowncompnany"  /> */}
                                            <div className='flex flex-col justify-center items-center gap-1' >
                                                <div><BsBuilding className='text-4xl text-gray-500' /></div>
                                                <div className='text-lg font-bold' >My Own Company</div>
                                                <div className='text-sm text-gray-500' >I'm an owner/employee of a business or a company/ enterprise</div>
                                            </div>
                                        </div>
                                        <div
                                            className={`flex gap-3 p-6  border border-black rounded-xl ${toggleState === 2 ? "active-tabs" : "tabs"} `}
                                            onClick={() => toggleTab(2)}
                                        >
                                            {/* <input type="radio" name='hiring' value="myowncompnany" /> */}
                                            <div className='flex flex-col justify-center items-center gap-1' >
                                                <div><BsBuilding className='text-4xl text-gray-500' /></div>
                                                <div className='text-lg font-bold' >For Clients</div>
                                                <div className='text-sm text-gray-500' >I'm an owner/employee of a business or a company/ enterprise</div>
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>
                                <div className='border p-2 my-4 rounded-lg ' >
                                    <div className={`${toggleState === 1 ? "active-content" : "content"}`}
                                    >
                                        <div className='flex flex-col gap-4' >
                                            <div className='flex gap-3 text-gray-500 font-bold' >
                                                <input type="radio" name="company" id="" />
                                                <label htmlFor="">My Own Company <div className='text-red-300 font-bold text-sm' >Make sure you choose this! value="My own company"  onChange={(e) => sethiringoption(e.target.value)} </div> </label>
                                            </div>
                                            <CssTextField label="Your company name" onChange={(e) => setcompanyName(e.target.value)} />
                                            <CssTextField label="Company Website (optional)" onChange={(e) => setcompanyWeb(e.target.value)}
                                            />
                                            <div className='text-gray-500 font-bold' >Number of employees in your company</div>
                                            <select className='border border-green-400 p-4 focus:outline-none rounded' value={employeesNumber} id=""
                                                onChange={(e) => setemployeesNumber(e.target.value)}  >
                                                <option value="0-50">(0-50)</option>
                                                <option value="51-100">(51-100)</option>
                                                <option value="101-300">(101-300)</option>
                                                <option value="301-500">(301-500)</option>
                                                <option value="501-1000">(501-1000)</option>
                                                <option value="1000 above">(1000 above)</option>
                                                <option value="Not usre">(Not usre)</option>
                                            </select>
                                            <input className='bg-[#3B77B5] p-4 rounded-md  text-white' type="submit" value="Continue to post a Job" />
                                        </div>

                                    </div>
                                    <div className={`${toggleState === 2 ? "active-content" : "content"}`}
                                    >
                                        <div className='flex flex-col gap-4' >
                                            <div className='flex gap-3 text-gray-500 font-bold p-2' >
                                                <input type="radio" name="company" id="" />
                                                <label htmlFor="">For cliente value="My clients" <div className='text-red-300 font-bold text-sm' >Make sure you choose this!   onChange={(e) => sethiringoption(e.target.value)} </div> </label>
                                            </div>
                                            <CssTextField label="Client Which You Normally Hire For"
                                                onChange={(e) => sethiringFor(e.target.value)}
                                            />
                                            <CssTextField label="Your company name" onChange={(e) => setcompanyName(e.target.value)} />
                                            <CssTextField label="Company Website (optional)" onChange={(e) => setcompanyWeb(e.target.value)} />
                                            <div className='text-gray-500 font-bold' >Number of employees in your company</div>


                                            <select className='border border-green-400 p-4 focus:outline-none rounded' value={employeesNumber} id=""
                                                onChange={(e) => setemployeesNumber(e.target.value)} >
                                                <option value="0-50">(0-50)</option>
                                                <option value="51-100">(51-100)</option>
                                                <option value="101-300">(101-300)</option>
                                                <option value="301-500">(301-500)</option>
                                                <option value="501-1000">(501-1000)</option>
                                                <option value="1000 above">(1000 above)</option>
                                                <option value="Not usre">(Not usre)</option>
                                            </select>
                                            <input
                                                className='bg-btncolor p-4 rounded-md  text-white'
                                                type="submit"
                                                value="Continue to post a Job" />
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FirstFrom;



