// import React, { useContext, useState, useRef, useEffect } from 'react'
// import { StepperContext } from '../contexts/StepperContext'
// import { BsBuilding } from "react-icons/bs";
// import { BsExclamationTriangleFill } from "react-icons/bs";
// import { GrFormClose } from "react-icons/gr";
// import { useGetDetailsQuery } from '../../services/profile';
// import { getToken, removeToken } from '../../services/LocalStorage';
// import { Country, State, City } from 'country-state-city';

// import MultiSelect from 'react-multiple-select-dropdown-lite'
// import 'react-multiple-select-dropdown-lite/dist/index.css';
// import { useGetcitylistQuery, useGetstatelistQuery } from "../../services/profile";
// import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
// import { useDispatch } from 'react-redux';


// const BasicDetails = () => {


//     const { data: citylist } = useGetcitylistQuery()
//     const { data: statelist } = useGetstatelistQuery()

//     // console.log(citylist, "city")
//     // console.log(statelist, "state")
//     // console.log(City.getCitiesOfCountry("IN"), '25')
//     const [cityCode, setcityCode] = useState();
//     console.log(cityCode, "27")
//     const states = State.getStatesOfCountry("IN")
//     const cities = City.getCitiesOfState(cityCode)
//     console.log(cities, "30");
//     // if (states) {
//     //     console.log(states, '26')
//     // }


//     const [toggleState, setToggleState] = useState(1);
//     const { userData, setUserData } = useContext(StepperContext)
//     const [change, setChange] = useState(false)
//     const [fee, setFee] = useState(false)
//     const [fee1, setFee1] = useState(false)
//     const [office, setOffice] = useState(false)
//     const [home, setHome] = useState(false);
//     const [field, setField] = useState(false);
//     const [scity, setScity] = useState(false)
//     const [india, setIndia] = useState(false)
//     const [range10, setRange10] = useState(false)
//     const [range25, setRange25] = useState(false)
//     const [city, setCity] = useState(false)
//     const [allIndia, setAllIndia] = useState(false)
//     const [fixed, setFixed] = useState(false)
//     const [fInsentive, setFInsentive] = useState(false)
//     const [insentive, setinsentive] = useState(false)
//     const changeRef = useRef()


//     const dispatch = useDispatch()
//     const [valueoption, setvalue] = useState()
//     console.log(valueoption, "33");
//     const handleOnchange = val => {
//         setvalue(val)
//     }

//     const options = [
//         { label: 'overtime Pay', value: 'overtimepay' },
//         { label: 'PF', value: 'PF' },
//         { label: 'Weekly Payout', value: 'Weeklypayout' },
//         { label: 'Laptop', value: 'Laptop' },
//     ]

//     let token = getToken('token')
//     const { data } = useGetDetailsQuery(token)


//     const toggleTab = (index) => {
//         // console.log(index);
//         setToggleState(index)
//     }


//     useEffect(() => {
//         const handler = (e) => {
//             if (!changeRef.current.contains(e.target)) {
//                 setChange(false)
//             }
//         }
//         document.addEventListener("mousedown", handler)
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserData({ ...userData, [name]: value });
//     }
//     console.log(userData, "50")

//     useEffect(() => {
//         if (userData && valueoption) {
//             dispatch(setUserInfo(
//                 {
//                     basic: userData,
//                     perks: valueoption
//                 }
//             ))
//         }
//     }

//         , [userData, valueoption]);


//     const handleFee = () => {
//         if (fee == false) {
//             setFee(true)
//             setFee1(false)
//         }
//     }
//     const handleFee1 = () => {
//         if (fee1 === false) {
//             setFee(false)
//             setFee1(true)
//         }
//     }

//     const handleOffice = () => {
//         if (office === false) {
//             setOffice(true);
//             setHome(false)
//             setField(false)
//         }
//     }

//     const handleHome = () => {
//         if (home === false) {
//             setOffice(false)
//             setHome(true)
//             setField(false)
//         }
//     }
//     const handleField = () => {
//         if (field === false) {
//             setField(true)
//             setOffice(false)
//             setHome(false)
//         }
//     }
//     const handleScity = () => {
//         if (scity === false) {
//             setScity(true)
//             setIndia(false)
//         }
//     }
//     const handleIndia = () => {
//         if (india === false) {
//             setIndia(true)
//             setScity(false)
//         }
//     }

//     const hadle10range = () => {
//         if (range10 === false)
//             setRange10(true)
//         setRange25(false)
//         setCity(false)
//         setAllIndia(false)
//     }
//     const handle25range = () => {
//         if (range25 === false) {
//             setRange25(true)
//             setRange10(false)
//             setCity(false)
//             setAllIndia(false)
//         }
//     }
//     const handleCity = () => {
//         if (city === false) {
//             setCity(true)
//             setRange10(false)
//             setRange25(false)
//             setAllIndia(false)
//         }
//     }
//     const handleAllIndia = () => {
//         if (allIndia === false) {
//             setAllIndia(true)
//             setRange10(false)
//             setRange25(false)
//             setCity(false)
//         }
//     }

//     const handleFixed = () => {
//         if (fixed === false) {
//             setFixed(true)
//             setFInsentive(false)
//             setinsentive(false)
//         }
//     }
//     const handleFInsentive = () => {
//         if (fInsentive === false) {
//             setFInsentive(true)
//             setFixed(false)
//             setinsentive(false)
//         }
//     }
//     const handleInsentive = () => {
//         if (insentive === false) {
//             setFInsentive(false)
//             setFixed(false)
//             setinsentive(true)
//         }
//     }


//     return (
//         <>
//             <div>
//                 <div className='text-primary text-lg font-bold' >
//                     Job Details
//                 </div>
//                 <div
//                     className='text-gray-400'
//                 >We use this information to find the best candidates fot the job</div>
//             </div>

//             <div className='flex flex-col gap-2 justify-between my-10' >
//                 <div>{data && data?.user && data?.user?.firstfrom.map((e) =>
//                     e.companyName)
//                 } </div>
//                 <div ref={changeRef} >
//                     <button className='bg-btncolor p-2 rounded-md  font-bold active:bg-primary px-5 ' onClick={() => setChange(!change)} >Change</button>
//                     <div className={`${change ? "null" : "hidden"}`} >
//                         <div className='flex gap-3  justify-center text-center p-3 border border-gray-500 rounded' >
//                             <div className={`border p-1 rounded flex-1 ${toggleState === 1 ? "active-tabs" : "tabs"} font-bold`}
//                                 onClick={() => toggleTab(1)}
//                             >
//                                 I Changed my company
//                             </div>
//                             <div className={`border  p-1 rounded  flex-1 ${toggleState === 2 ? "active-tabs" : "tabs"} font-bold`}
//                                 onClick={() => toggleTab(2)}
//                             >
//                                 I want to post for another company/business/consultancy of my own
//                             </div>


//                             <div className={` border  p-1 rounded  flex-1 ${toggleState === 3 ? "active-tabs" : "tabs"} font-bold`}
//                                 onClick={() => toggleTab(3)}
//                             >
//                                 I am not a consultant
//                             </div>
//                         </div>

//                         <div className='p-4 border mt-3 shadow-xl ' >
//                             <div className={`${toggleState === 1 ? "active-content" : "content"} `}
//                             >
//                                 <div className='flex flex-col gap-3' >

//                                     <div
//                                         className='text-gray-400 text-sm' >You’re changing your company from SRR HR Services Pvt.Ltd. Please select/add company below:
//                                     </div>
//                                     <input type="text" placeholder='Your Company name *'
//                                         className='w-full m-auto p-2 border shadow-sm '
//                                     />
//                                     <div className='flex gap-3' >
//                                         <input type="checkbox" />
//                                         <span className='text-sm text-gray-400' >
//                                             This is a Consultancy (Hiring or Staffing agency)
//                                         </span>
//                                     </div>

//                                     <div className='flex flex-col gap-3 focus:outline-none' >
//                                         <div>Number of employees in your company*</div>
//                                         <select
//                                             className='w-full  border p-2 text-gray-400 rounded'
//                                             name="" id="">
//                                             <option value="0-50">
//                                                 0-50
//                                             </option>
//                                             <option value=" 51-100">
//                                                 51-100
//                                             </option>
//                                             <option value="101-300">
//                                                 101-300
//                                             </option>
//                                             <option value="301-500">
//                                                 301-500
//                                             </option>
//                                             <option value="501-1000">
//                                                 501-1000
//                                             </option>
//                                             <option value="1000above">
//                                                 1000above
//                                             </option>
//                                             <option value="Not sure">
//                                                 Not sure
//                                             </option>
//                                         </select>
//                                     </div>

//                                     {/* Radio button  */}
//                                     <div className='flex gap-5 items-center my-4' >
//                                         <input type="radio" name='change' value="I Changed my company"


//                                         />
//                                         <div
//                                             className='text-bold text-2xl font-bold'
//                                         >Are You Sure?</div>
//                                     </div>

//                                     <div className='flex justify-between p-3 '
//                                         onClick={() => setChange(!change)}
//                                     >
//                                         <div className='p-2 px-5 active:bg-white border rounded cursor-pointer bg-gray-200' >Cancle</div>
//                                         <div
//                                             className='p-2 px-5 bg-secondary text-white'
//                                         >Change</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className={`${toggleState === 2 ? "active-content" : "content"} `}
//                             >
//                                 <div className='flex flex-col gap-3' >

//                                     <div
//                                         className='text-gray-400 text-sm' >You’re changing your company from SRR HR Services Pvt.Ltd. Please select/add company below:
//                                     </div>
//                                     <input type="text" placeholder='I want to post for another company/business/consultancy of my own'
//                                         className='w-full m-auto p-2 border shadow-sm '

//                                     />
//                                     <div className='flex gap-3' >
//                                         <input type="checkbox" />
//                                         <span className='text-sm text-gray-400' >
//                                             This is a Consultancy (Hiring or Staffing agency)
//                                         </span>
//                                     </div>

//                                     <div className='flex flex-col gap-3 focus:outline-none' >
//                                         <div>Number of employees in your company*</div>
//                                         <select

//                                             className='w-full  border p-2 text-gray-400 rounded'
//                                             name="" id=""

//                                         >
//                                             <option value=" 0-50">
//                                                 0-50
//                                             </option>
//                                             <option value="51-100">
//                                                 51-100
//                                             </option>
//                                             <option value="101-300">
//                                                 101-300
//                                             </option>
//                                             <option value="301-500">
//                                                 301-500
//                                             </option>
//                                             <option value="501-1000">
//                                                 501-1000
//                                             </option>
//                                             <option value="1000above">
//                                                 1000above
//                                             </option>
//                                             <option value="Not sure">
//                                                 Not sure
//                                             </option>
//                                         </select>
//                                     </div>

//                                     {/* Radio button  */}
//                                     <div className='flex gap-5 items-center my-4' >
//                                         <input type="radio" name='change' value="I want to post for another company/business/consultancy of my own" />
//                                         <div
//                                             className='text-bold text-2xl font-bold'
//                                         >Are You Sure?</div>
//                                     </div>

//                                     <div className='flex justify-between p-3 '
//                                         onClick={() => setChange(!change)}
//                                     >
//                                         <div className='p-2 px-5 active:bg-white border rounded cursor-pointer bg-gray-200' >Cancle</div>
//                                         <button
//                                             className='p-2 px-5 bg-secondary text-white'
//                                         >Change</button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className={`${toggleState === 3 ? "active-content" : "content"} `}
//                             >
//                                 <div className='flex flex-col gap-3' >

//                                     <div
//                                         className='text-gray-400 text-sm' >You’re changing your company from SRR HR Services Pvt.Ltd. Please select/add company below:
//                                     </div>
//                                     <input type="text" placeholder='I am not a consultant *'
//                                         className='w-full m-auto p-2 border shadow-sm '
//                                     />
//                                     <div className='flex gap-3' >
//                                         <input type="checkbox" />
//                                         <span className='text-sm text-gray-400' >
//                                             This is a Consultancy (Hiring or Staffing agency)
//                                         </span>
//                                     </div>

//                                     <div className='flex flex-col gap-3 focus:outline-none' >
//                                         <div>Number of employees in your company*</div>
//                                         <select
//                                             className='w-full  border p-2 text-gray-400 rounded'
//                                             name="" id="">
//                                             <option value=" 0-50">
//                                                 0-50
//                                             </option>
//                                             <option value="51-100">
//                                                 51-100
//                                             </option>
//                                             <option value=" 101-300">
//                                                 101-300
//                                             </option>
//                                             <option value="301-500">
//                                                 301-500
//                                             </option>
//                                             <option value=" 501-1000">
//                                                 501-1000
//                                             </option>
//                                             <option value="1000above">
//                                                 1000above
//                                             </option>
//                                             <option value="Not sure">
//                                                 Not sure
//                                             </option>
//                                         </select>
//                                     </div>

//                                     {/* Radio button  */}
//                                     <div className='flex gap-5 items-center my-4' >
//                                         <input type="radio" name='change' value="I am not a consultant" />
//                                         <div
//                                             className='text-bold text-2xl font-bold'
//                                         >Are You Sure?</div>
//                                     </div>

//                                     <div className='flex justify-between p-3 '
//                                         onClick={() => setChange(!change)}
//                                     >
//                                         <div className='p-2 px-5 active:bg-white border rounded cursor-pointer bg-gray-200' >Cancle</div>
//                                         <div
//                                             className='p-2 px-5 bg-secondary text-white'
//                                         >Change</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Real form */}



//             <div className='flex flex-col gap-5 ' >
//                 <div className='flex flex-col' >
//                     <label className='p-2 text-tcolor font-semibold' >
//                         Company You're hiring for
//                     </label>
//                     <input
//                         require
//                         placeholder=" Company You're hiring for"
//                         className='border border-green-400  p-2 rounded-md '
//                         type="text"
//                         name="componayName"
//                         value={userData["componayName" || ""]}
//                         onChange={handleChange}

//                     />
//                 </div>
//                 <div className='flex flex-col' >
//                     <label className='p-2 text-tcolor font-semibold' >
//                         job role
//                     </label>
//                     <input
//                         required
//                         placeholder='Eg ; Accountant'
//                         className='border border-green-400  p-2 rounded-md '
//                         type="text"
//                         name="jobRole"
//                         value={userData["jobrole" || ""]}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className='flex gap-3' >
//                     <div className='flex flex-col w-full' >
//                         <label className='p-2 text-tcolor font-semibold' >
//                             Type of job *
//                         </label>
//                         <select
//                             className='p-2 border shadow'
//                             onChange={handleChange}
//                             value={userData["typeOfJob" || ""]} name="typeOfJob" id="">
//                             <option value="Full time">Full Time</option>
//                             <option value="Part time">Part Time</option>
//                         </select>
//                     </div>
//                     <div className='flex flex-col' >
//                         <label className='p-2 text-tcolor font-semibold' >
//                             NO. of openings
//                         </label>
//                         <input
//                             required
//                             placeholder='No. of openings'
//                             className='border border-green-400  p-2 rounded-md '
//                             type="number"
//                             name="vacncy"
//                             value={userData["vacncy" || ""]}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>
//                 <div className='flex gap-3 mt-2 ' >
//                     <input
//                         name="nightshift"
//                         value="nightshift"
//                         onClick={handleChange}
//                         type="checkbox" />
//                     <div className='text-gray-400' >This is a night shift job</div>
//                 </div>
//             </div>

//             <br /><hr /><br />

//             <div className='flex flex-col' >
//                 <div className='text-primary text-xl font-semibold' >Location</div>
//                 <div className='text-gray-500 ' >Let candidates know where they will be working from.</div>
//             </div>


//             <fieldset>
//                 <div className='grid lg:grid-cols-2 grid-cols-1 gap-3' >
//                     <div className={`flex gap-3 p-6  border border-black rounded-xl `}
//                     >
//                         <input
//                             onClick={handleOffice}
//                             onChange={handleChange}
//                             type="radio"
//                             name='WorkLocationType'
//                             value="Work from office"
//                         // value={userData["office" || ""]}
//                         />
//                         <div className='flex flex-col justify-center items-center gap-1' >
//                             <div><BsBuilding className='text-4xl text-gray-500' /></div>
//                             <div className='text-lg font-bold' >Work from office</div>
//                             <div className='text-sm text-gray-500 text-center' >Candidates would be required to work from a fixed location</div>
//                         </div>
//                     </div>
//                     <div className={`flex gap-3 p-6  border border-black rounded-xl `}
//                     >
//                         <input
//                             onClick={handleHome}
//                             onChange={handleChange}
//                             type="radio"
//                             name='WorkLocationType'
//                             value="Work from home" />
//                         <div className='flex flex-col justify-center items-center gap-1' >
//                             <div><BsBuilding className='text-4xl text-gray-500' /></div>
//                             <div className='text-lg font-bold' >Work from home</div>
//                             <div className='text-sm text-gray-500 text-center' >Candidates would be required to work from home (their own premises)</div>
//                         </div>
//                     </div>
//                     <div className={`flex gap-3 p-6  border border-black rounded-xl `}
//                     >
//                         <input
//                             onClick={handleField}
//                             onChange={handleChange}
//                             type="radio"
//                             name='WorkLocationType'
//                             value="Field jobs" />
//                         <div className='flex flex-col justify-center items-center gap-1' >
//                             <div><BsBuilding className='text-4xl text-gray-500' /></div>
//                             <div className='text-lg font-bold' >field jobs</div>
//                             <div className='text-sm text-gray-500 text-center' >Candidates would be required to work in the field, with minimal time spent in the office</div>
//                         </div>
//                     </div>
//                 </div>


//                 <div className={` ${office ? "null" : "hidden"} my-8 border`} >
//                     <div className='p-4' >
//                         <div className='flex gap-3' >
//                             <div className='w-full' >
//                                 <label htmlFor="" className='text-tcolor font-bold p-3 ' >job Location
//                                 </label>
//                                 <select
//                                     name="jobLocation"
//                                     value={userData["jobLocation" || ""]}
//                                     onChange={handleChange}
//                                     onClick={(l) => setcityCode(l.target.value)}
//                                     className='p-2 rounded border shadow-md w-full'
//                                 >
//                                     {states?.map((e) => {
//                                         return <option value={e.isoCode}>{e.name} </option>
//                                     })}
//                                     {/* <option value="agra">Agra</option>
//                                     <option value="bhopal">Bhopal</option>
//                                     <option value="delhi">Delhi</option> */}
//                                 </select>
//                             </div>
//                             <div className='w-full' >
//                                 <label htmlFor="" className='text-tcolor font-bold ' >City
//                                 </label>
//                                 <select
//                                     name="jobcity"
//                                     value={userData["jobcity" || ""]}
//                                     onChange={handleChange}
//                                     className='p-2 rounded border shadow-md w-full'
//                                 >
//                                     {cities?.map((e) => {
//                                         return <option value={e.name}>{e.name}</option>
//                                     })}
//                                     {/* <option value="agra">Agra</option>
//                                     <option value="bhopal">Bhopal</option>
//                                     <option value="delhi">Delhi</option> */}
//                                 </select>
//                             </div>
//                         </div>
//                         <div>
//                             <div className='txet-tcolor text-lg font-bold' >Recevi application from</div>
//                             <div>
//                                 <div className='p-4 flex flex-col gap-3' >
//                                     <div className='flex gap-3' >
//                                         <input
//                                             type="radio"
//                                             onClick={hadle10range}
//                                             name='applicationFrom'
//                                             value="Within 10KM"
//                                             onChange={handleChange}
//                                         />
//                                         <div className='text-tcolor font-bold ' >Within 10KM</div>
//                                     </div>
//                                     <div className='flex gap-3' >
//                                         <input
//                                             onClick={handle25range}

//                                             type="radio" name='applicationFrom'
//                                             value="Within 25km"
//                                             onChange={handleChange} />
//                                         <div className='text-tcolor font-bold ' >within 25KM</div>
//                                     </div>
//                                     <div className='flex gap-3' >
//                                         <input
//                                             onClick={handleCity}

//                                             type="radio" name='applicationFrom'
//                                             value="Entire City"
//                                             onChange={handleChange} />
//                                         <div className='text-tcolor font-bold ' >Entire City</div>
//                                     </div>
//                                     <div className='flex gap-3' >
//                                         <input
//                                             onClick={handleAllIndia}

//                                             type="radio" name='applicationFrom'
//                                             value="Entire India"
//                                             onChange={handleChange} />
//                                         <div className='text-tcolor font-bold ' >Entire India</div>
//                                     </div>

//                                 </div>

//                                 {/* Options */}
//                                 <div className={`${range10 ? "null" : "hidden"}`} >
//                                     <div>
//                                         <div className='text-tcolor text-xl p-3' >Compensation</div>
//                                         <div className='text-tcolor text-sm p-3' >Job postings with right salary & incentives will help you find the right candidates.</div>
//                                     </div>
//                                     {/* paytype */}

//                                     <div>
//                                         <div className='text-tcolor font-bold' >What is the pay type ?</div>
//                                     </div>

//                                     <div className='flex flex-col gap-3 p-3' >
//                                         <div className='flex gap-3 ' >
//                                             <input onClick={handleFixed} type="radio" name='paytype'
//                                                 value="Fixed only"
//                                                 onChange={handleChange} />
//                                             <div className='text-tcolor font-semibold ' >Fixed only</div>
//                                         </div>
//                                         <div className='flex gap-3' >
//                                             <input onClick={handleFInsentive} type="radio" name='paytype' value="Fixed + incentive"
//                                                 onChange={handleChange} />
//                                             <div className='text-tcolor font-semibold ' >Fixed + incentive</div>
//                                         </div>
//                                         <div className='flex gap-3' >
//                                             <input onClick={handleInsentive} type="radio" name='paytype' value='Incentive only'
//                                                 onChange={handleChange} />
//                                             <div className='text-tcolor font-semibold ' >Incentive only</div>
//                                         </div>
//                                     </div>
//                                     {/* Fixed salary per month */}
//                                     <div className={`${fixed ? "null" : "hidden"}`} >
//                                         <div className='flex flex-col' >
//                                             <div className='w-full' >
//                                                 <div className='text-tcolor font-bold ' >fixed salary per month</div>
//                                                 <input
//                                                     className='w-full p-2 rounded border '
//                                                     type="tel" placeholder='Minimum'
//                                                     name="Minimum"
//                                                     onChange={handleChange}

//                                                     value={userData["Minimum" || ""]} />
//                                             </div>

//                                             <div className='p-4 text-tcolor' >To</div>

//                                             <div className='w-full' >
//                                                 <div className='text-tcolor font-bold ' >fixed salary per month</div>
//                                                 <input
//                                                     className='w-full p-2 rounded border '
//                                                     type="tel"
//                                                     placeholder='Maximum'
//                                                     name="Maximum"
//                                                     onChange={handleChange}

//                                                     value={userData["Maximum" || ""]}

//                                                 />
//                                             </div>
//                                         </div>

//                                     </div>

//                                     <div className={`${fInsentive ? "null" : "hidden"}`} >
//                                         <div className='flex flex-col' >
//                                             <div className='w-full' >
//                                                 <div className='text-tcolor font-bold ' >fixed salary per month</div>
//                                                 <input
//                                                     className='w-full p-2 rounded border '
//                                                     type="tel" placeholder='Minimum' name="Minimum"
//                                                     value={userData["Minimum" || ""]} onChange={handleChange} />
//                                             </div>

//                                             <div className='p-4 text-tcolor' >To</div>

//                                             <div className='w-full' >
//                                                 <div className='text-tcolor font-bold ' >fixed salary per month</div>
//                                                 <input
//                                                     className='w-full p-2 rounded border '
//                                                     type="tel" placeholder='Maximum' name="Maximum"
//                                                     value={userData["Maximum" || ""]} onChange={handleChange} />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className='text-tcolor text-xl font-bold p-2' >
//                                                 Average Incentive per month
//                                             </div>
//                                             <div><input className=' border p-2 rounded w-full ' type="tel" placeholder='Average'
//                                                 name="Average"
//                                                 value={userData["Average" || ""]} onChange={handleChange}
//                                             /></div>
//                                         </div>
//                                     </div>

//                                     <div className={`${insentive ? "null" : "hidden"}`} >
//                                         <div>
//                                             <div className='text-tcolor text-xl font-bold p-2' >
//                                                 Average Incentive per month
//                                             </div>
//                                             <div><input className=' border p-2 rounded w-full ' type="number" placeholder='Average'
//                                                 name="Average"
//                                                 value={userData["Average" || ""]} onChange={handleChange}
//                                             /></div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className={`${range25 ? "null" : "hidden"}`} >
//                                     <div>
//                                         <div className='text-tcolor text-xl p-3' >Compensation</div>
//                                         <div className='text-tcolor text-sm p-3' >Job postings with right salary & incentives will help you find the right candidates.</div>
//                                     </div>
//                                     {/* paytype */}

//                                     <div>
//                                         <div className='text-tcolor font-bold' >What is the pay type ?</div>
//                                     </div>

//                                     <div className='flex flex-col gap-3 p-3' >
//                                         <div className='flex gap-3 ' >
//                                             <input onClick={handleFixed} type="radio" name='paytype'

//                                                 value="FixedOnly"
//                                                 onChange={handleChange}

//                                             />
//                                             <div className='text-tcolor font-semibold ' >Fixed only</div>
//                                         </div>
//                                         <div className='flex gap-3' >
//                                             <input onClick={handleFInsentive} type="radio" name='paytype'
//                                                 value="Fixed + incentive"
//                                                 onChange={handleChange}
//                                             />
//                                             <div className='text-tcolor font-semibold ' >Fixed + incentive</div>
//                                         </div>
//                                         <div className='flex gap-3' >
//                                             <input onClick={handleInsentive} type="radio" name='paytype'
//                                                 value='Incentive only'
//                                                 onChange={handleChange}
//                                             />
//                                             <div className='text-tcolor font-semibold ' >Incentive only</div>
//                                         </div>
//                                     </div>
//                                     {/* Fixed salary per month */}
//                                     <div className={`${fixed ? "null" : "hidden"}`} >
//                                         <div className='flex flex-col' >
//                                             <div className='w-full' >
//                                                 <div className='text-tcolor font-bold ' >fixed salary per month</div>
//                                                 <input

//                                                     className='w-full p-2 rounded border '
//                                                     type="tel"

//                                                     placeholder='Minimum' name="Minimum"
//                                                     value={userData["Minimum" || ""]} onChange={handleChange} />
//                                             </div>

//                                             <div className='p-4 text-tcolor' >To</div>

//                                             <div className='w-full' >
//                                                 <div className='text-tcolor font-bold ' >fixed salary per month</div>
//                                                 <input
//                                                     className='w-full p-2 rounded border '
//                                                     type="tel" placeholder='Maximum' name="Maximum"
//                                                     value={userData["Maximum" || ""]} onChange={handleChange} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className={`${fInsentive ? "null" : "hidden"}`} >
//                                         <div className='flex flex-col' >
//                                             <div className='w-full' >
//                                                 <div className='text-tcolor font-bold ' >fixed salary per month</div>
//                                                 <input
//                                                     className='w-full p-2 rounded border '
//                                                     type="tel"
//                                                     placeholder='Minimum' name="Minimum"
//                                                     value={userData["Minimum" || ""]} onChange={handleChange}
//                                                 />
//                                             </div>

//                                             <div className='p-4 text-tcolor' >To</div>

//                                             <div className='w-full' >
//                                                 <div className='text-tcolor font-bold ' >fixed salary per month</div>
//                                                 <input
//                                                     className='w-full p-2 rounded border '
//                                                     type="tel" placeholder='Maximum' name="Maximum"
//                                                     value={userData["Maximum" || ""]} onChange={handleChange} />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className='text-tcolor text-xl font-bold p-2' >
//                                                 Average Incentive per month
//                                             </div>
//                                             <div><input className=' border p-2 rounded w-full ' type="number" placeholder='Average'
//                                                 name="Average"
//                                                 value={userData["Average" || ""]} onChange={handleChange} /></div>
//                                         </div>
//                                     </div>

//                                     <div className={`${insentive ? "null" : "hidden"}`} >
//                                         <div>
//                                             <div className='text-tcolor text-xl font-bold p-2' >
//                                                 Average Incentive per month
//                                             </div>
//                                             <div><input className=' border p-2 rounded w-full ' type="number" placeholder='Average' name="Average"
//                                                 value={userData["Average" || ""]} onChange={handleChange} /></div>
//                                         </div>
//                                     </div>                                </div>
//                                 <div className={`${city ? "null" : "hidden"}`} >
//                                     City
//                                 </div>
//                                 <div className={`${allIndia ? "null" : "hidden"}`} >
//                                     All India
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={` ${home ? "null" : "hidden"}`} >
//                     <div className='p-3' >
//                         <div
//                             className='text-tcolor font-bold '
//                         >Receive application from</div>
//                         <div className='flex gap-4 p-3' >
//                             <button
//                                 onClick={handleScity}

//                                 className='bg-secondary text-white font-bold rounded  p-2 px-5 active:bg-green-500'
//                             >Specific City</button>
//                             <button
//                                 onClick={handleIndia}
//                                 className='bg-secondary text-white font-bold rounded  p-2 px-5 active:bg-green-500'
//                             >AnyWhere in india</button>
//                         </div>
//                     </div>
//                     <div className={`${scity ? "null" : "hidden"}`} >
//                         <input type="radio" name='Scity' value=' Specific City' onChange={handleChange} /> Specific City


//                         <select
//                             className='border w-full p-2 rounded'
//                             value={userData["city" || ""]}
//                             onChange={handleChange}
//                             name="SelectedCity" id="">

//                             {cities?.map((e) => {
//                                 return <option value={e.name}>{e.name}</option>
//                             })}
//                             {/* <option value="Bhopal">Bhopal</option>
//                             <option value="Delhi">Delhi</option>
//                             <option value="Indore">Indore</option> */}
//                         </select>
//                     </div>
//                     <div className={`${india ? "null" : "hidden"}`} >
//                         <input type="radio" name='Scity' value='AnyWhere in india' onChange={handleChange} />
//                         <span className='p-2' > AnyWhere in india</span>

//                         <div className='p-2 rounded border bg-blue-200 font-bold' >You will be receiving applications from Entire india</div>
//                     </div>
//                 </div>

//                 <div className={` ${field ? "null" : "hidden"}`} >
//                     field
//                 </div>
//             </fieldset>


//             {/* Multiple check box */}

//             <div className='' >
//                 <div className='text-tcolor font-bold p-4 text-2xl' >
//                     Do you offer any additional perks?
//                 </div>

//                 <div>
//                     <MultiSelect
//                         onChange={handleOnchange}
//                         options={options}
//                     />
//                 </div>
//                 {valueoption}
//             </div>



//             <div>
//                 <div className='text-tcolor text-xl my-5 font-bold ' >
//                     Is there any joining fee or deposit required from the candidate?
//                 </div>
//                 <div className='flex gap-4 items-center' >
//                     <input
//                         onClick={handleFee}
//                         type="radio"
//                         name='joining fee'
//                         value="Yes"
//                         onChange={handleChange}

//                     /> Yes
//                     <input
//                         type="radio"
//                         name='joining fee'

//                         onChange={handleChange}
//                         onClick={handleFee1}
//                         value="No" /> No
//                 </div>
//             </div>

//             <div className={`${fee ? "null" : "hidden"}`} >
//                 <div className='flex gap-3 justify-evenly my-6' >
//                     <div>
//                         <input
//                             name='amount'
//                             value={userData[" amount " || ""]}
//                             onChange={handleChange}
//                             className='placeholder:text-red-500 p-2 border rounded w-full border-primary'
//                             type="tel"
//                             placeholder='Fee amount *' />
//                     </div>
//                     <div >
//                         <select
//                             value={userData[" feeFor" || ""]}
//                             onChange={handleChange}
//                             name='feeFor'
//                             placeholder='what is this fee for?'
//                             className='placeholder:text-red-500 p-2 border rounded w-full border-primary'
//                         >
//                             <option value="Asset/ Inventory Charge">Asset/ Inventory Charge</option>
//                             <option value="Security deposit( Refundable)">Security deposit( Refundable)</option>
//                             <option value="Registration/ Training Fees">Registration/ Training Fees</option>
//                             <option value="Commission">Commission</option>
//                             <option value="Other Reason">Other Reason</option>

//                         </select>
//                     </div>

//                 </div>
//                 <div>
//                     <input
//                         className='border p-3 w-full shadow-md'
//                         type="text"
//                         name='reason'
//                         value={userData[" reason" || ""]}
//                         onChange={handleChange}
//                         placeholder='Mention your reason here' />
//                 </div>
//             </div>




//             <div className={` ${fee1 ? "null" : "hidden"} bg-red-200 mt-6 p-3 border border-red-600 flex gap-3`}  >
//                 <div><BsExclamationTriangleFill /></div>
//                 <div className=' flex-1 text-center'  >
//                     By selecting this option, you declare that a candidate applying to this job will not be charged any fee. A mismatch in this information will lead to an account suspension as per .
//                     <a href="" className='text-blue-500' >Open's code of Conduct</a>
//                 </div>
//                 <div><GrFormClose className='text-lg ' onClick={() => setFee1(false)} /></div>
//             </div>




//             <div className='text-gray-500 my-8 ' >
//                 <div className='text-bold text-primary p-3' >When should the fee be paid? *</div>
//                 <div className='grid lg:grid-cols-3 gap-3 ' >
//                     <div className='flex gap-3' >
//                         <input type="radio" name='paid'
//                             value="Before the interview"
//                             onChange={handleChange}
//                         />

//                         Before the interview
//                     </div>
//                     <div className='flex gap-3' >
//                         <input type="radio" name='paid'
//                             value="after job confirmation"
//                             onChange={handleChange}
//                         /> After job confirmation
//                     </div>
//                     <div className='flex gap-3'

//                     >
//                         <input type="radio" name='paid'
//                             value="deduct from salary"
//                             onChange={handleChange}
//                         /> Deducted from salary

//                     </div>

//                 </div>
//             </div>

//         </>
//     )
// }

// export default BasicDetails



import React, { useContext, useState, useRef, useEffect } from "react";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { StepperContext } from "../contexts/StepperContext";
import { BsBuilding } from "react-icons/bs";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useGetDetailsQuery } from "../../services/profile";
import { getToken, removeToken } from "../../services/LocalStorage";

import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import {
    useGetcitylistQuery,
    useGetstatelistQuery,
} from "../../services/profile";
import { setUserInfo, unsetUserInfo } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const BasicDetails = () => {
    const { data: citylist } = useGetcitylistQuery();
    const { data: statelist } = useGetstatelistQuery();

    // console.log(citylist, "city")
    // console.log(statelist, "state")

    const [toggleState, setToggleState] = useState(1);
    const { userData, setUserData } = useContext(StepperContext);
    const [change, setChange] = useState(false);
    const [fee, setFee] = useState(false);
    const [fee1, setFee1] = useState(false);
    const [office, setOffice] = useState(false);
    const [home, setHome] = useState(false);
    const [field, setField] = useState(false);
    const [scity, setScity] = useState(false);
    const [india, setIndia] = useState(false);
    const [range10, setRange10] = useState(false);
    const [range25, setRange25] = useState(false);
    const [city, setCity] = useState(false);
    const [allIndia, setAllIndia] = useState(false);
    const [fixed, setFixed] = useState(false);
    const [fInsentive, setFInsentive] = useState(false);
    const [insentive, setinsentive] = useState(false);
    const [fspecific, setFspecific] = useState(false)
    const [fAny, setFAny] = useState(false)
    const changeRef = useRef();

    const dispatch = useDispatch();
    const [valueoption, setvalue] = useState();
    console.log(valueoption, "33");
    const handleOnchange = (val) => {
        setvalue(val);
    };

    const options = [
        { label: "overtime Pay", value: "overtimepay" },
        { label: "PF", value: "PF" },
        { label: "Weekly Payout", value: "Weeklypayout" },
        { label: "Laptop", value: "Laptop" },
    ];

    let token = getToken("token");
    const { data } = useGetDetailsQuery(token);

    const toggleTab = (index) => {
        // console.log(index);
        setToggleState(index);
    };

    useEffect(() => {
        const handler = (e) => {
            if (!changeRef.current.contains(e.target)) {
                setChange(false);
            }
        };
        document.addEventListener("mousedown", handler);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    console.log(userData, "50");

    useEffect(() => {
        if (userData && valueoption) {
            dispatch(
                setUserInfo({
                    basic: userData,
                    perks: valueoption,
                })
            );
        }
    }, [userData, valueoption]);

    const handleFee = () => {
        if (fee == false) {
            setFee(true);
            setFee1(false);
        }
    };
    const handleFee1 = () => {
        if (fee1 === false) {
            setFee(false);
            setFee1(true);
        }
    };

    const handleOffice = () => {
        if (office === false) {
            setOffice(true);
            setHome(false);
            setField(false);
        }
    };

    const handleHome = () => {
        if (home === false) {
            setOffice(false);
            setHome(true);
            setField(false);
        }
    };
    const handleField = () => {
        if (field === false) {
            setField(true);
            setOffice(false);
            setHome(false);
        }
    };
    const handleScity = () => {
        if (scity === false) {
            setScity(true);
            setIndia(false);
        }
    };
    const handleIndia = () => {
        if (india === false) {
            setIndia(true);
            setScity(false);
        }
    };

    const hadle10range = () => {
        if (range10 === false) setRange10(true);
        setRange25(false);
        setCity(false);
        setAllIndia(false);
    };
    const handle25range = () => {
        if (range25 === false) {
            setRange25(true);
            setRange10(false);
            setCity(false);
            setAllIndia(false);
        }
    };
    const handleCity = () => {
        if (city === false) {
            setCity(true);
            setRange10(false);
            setRange25(false);
            setAllIndia(false);
        }
    };
    const handleAllIndia = () => {
        if (allIndia === false) {
            setAllIndia(true);
            setRange10(false);
            setRange25(false);
            setCity(false);
        }
    };

    const handleFields = () => {
        if (fspecific === false) {
            setFspecific(true)
            setFAny(false)
        }
    }
    const handleFieldsAny = () => {
        if (fAny === false)
            setFAny(true)
        setFspecific(false)

    }


    const handleFixed = () => {
        if (fixed === false) {
            setFixed(true);
            setFInsentive(false);
            setinsentive(false);
        }
    };
    const handleFInsentive = () => {
        if (fInsentive === false) {
            setFInsentive(true);
            setFixed(false);
            setinsentive(false);
        }
    };
    const handleInsentive = () => {
        if (insentive === false) {
            setFInsentive(false);
            setFixed(false);
            setinsentive(true);
        }
    };

    return (
        <>
            <div>
                <div className="text-primary text-lg font-bold">Job Details</div>
                <div className="text-gray-400">
                    We use this information to find the best candidates fot the job
                </div>
            </div>

            <div className="flex flex-col gap-2 justify-between my-10">
                <div>
                    {data &&
                        data?.user &&
                        data?.user?.firstfrom.map((e) => e.companyName)}{" "}
                </div>
                <div ref={changeRef}>
                    <button
                        className="bg-btncolor p-2 rounded-md  font-bold active:bg-primary px-5 "
                        onClick={() => setChange(!change)}
                    >
                        Change
                    </button>
                    <div className={`${change ? "null" : "hidden"}`}>
                        <div className="flex gap-3  justify-center text-center p-3 border border-gray-500 rounded">
                            <div
                                className={`border p-1 rounded flex-1 ${toggleState === 1 ? "active-tabs" : "tabs"
                                    } font-bold`}
                                onClick={() => toggleTab(1)}
                            >
                                I Changed my company
                            </div>
                            <div
                                className={`border  p-1 rounded  flex-1 ${toggleState === 2 ? "active-tabs" : "tabs"
                                    } font-bold`}
                                onClick={() => toggleTab(2)}
                            >
                                I want to post for another company/business/consultancy of my
                                own
                            </div>

                            <div
                                className={` border  p-1 rounded  flex-1 ${toggleState === 3 ? "active-tabs" : "tabs"
                                    } font-bold`}
                                onClick={() => toggleTab(3)}
                            >
                                I am not a consultant
                            </div>
                        </div>

                        <div className="p-4 border mt-3 shadow-xl ">
                            <div
                                className={`${toggleState === 1 ? "active-content" : "content"
                                    } `}
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="text-gray-400 text-sm">
                                        You’re changing your company from SRR HR Services Pvt.Ltd.
                                        Please select/add company below:
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Your Company name *"
                                        className="w-full m-auto p-2 border shadow-sm "
                                    />
                                    <div className="flex gap-3">
                                        <input type="checkbox" />
                                        <span className="text-sm text-gray-400">
                                            This is a Consultancy (Hiring or Staffing agency)
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-3 focus:outline-none">
                                        <div>Number of employees in your company*</div>
                                        <select
                                            className="w-full  border p-2 text-gray-400 rounded"
                                            name=""
                                            id=""
                                        >
                                            <option value="0-50">0-50</option>
                                            <option value=" 51-100">51-100</option>
                                            <option value="101-300">101-300</option>
                                            <option value="301-500">301-500</option>
                                            <option value="501-1000">501-1000</option>
                                            <option value="1000above">1000above</option>
                                            <option value="Not sure">Not sure</option>
                                        </select>
                                    </div>

                                    {/* Radio button  */}
                                    <div className="flex gap-5 items-center my-4">
                                        <input
                                            type="radio"
                                            name="change"
                                            value="I Changed my company"
                                        />
                                        <div className="text-bold text-2xl font-bold">
                                            Are You Sure?
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between p-3 "
                                        onClick={() => setChange(!change)}
                                    >
                                        <div className="p-2 px-5 active:bg-white border rounded cursor-pointer bg-gray-200">
                                            Cancle
                                        </div>
                                        <div className="p-2 px-5 bg-secondary text-white">
                                            Change
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${toggleState === 2 ? "active-content" : "content"
                                    } `}
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="text-gray-400 text-sm">
                                        You’re changing your company from SRR HR Services Pvt.Ltd.
                                        Please select/add company below:
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="I want to post for another company/business/consultancy of my own"
                                        className="w-full m-auto p-2 border shadow-sm "
                                    />
                                    <div className="flex gap-3">
                                        <input type="checkbox" />
                                        <span className="text-sm text-gray-400">
                                            This is a Consultancy (Hiring or Staffing agency)
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-3 focus:outline-none">
                                        <div>Number of employees in your company*</div>
                                        <select
                                            className="w-full  border p-2 text-gray-400 rounded"
                                            name=""
                                            id=""
                                        >
                                            <option value=" 0-50">0-50</option>
                                            <option value="51-100">51-100</option>
                                            <option value="101-300">101-300</option>
                                            <option value="301-500">301-500</option>
                                            <option value="501-1000">501-1000</option>
                                            <option value="1000above">1000above</option>
                                            <option value="Not sure">Not sure</option>
                                        </select>
                                    </div>

                                    {/* Radio button  */}
                                    <div className="flex gap-5 items-center my-4">
                                        <input
                                            type="radio"
                                            name="change"
                                            value="I want to post for another company/business/consultancy of my own"
                                        />
                                        <div className="text-bold text-2xl font-bold">
                                            Are You Sure?
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between p-3 "
                                        onClick={() => setChange(!change)}
                                    >
                                        <div className="p-2 px-5 active:bg-white border rounded cursor-pointer bg-gray-200">
                                            Cancle
                                        </div>
                                        <button className="p-2 px-5 bg-secondary text-white">
                                            Change
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${toggleState === 3 ? "active-content" : "content"
                                    } `}
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="text-gray-400 text-sm">
                                        You’re changing your company from SRR HR Services Pvt.Ltd.
                                        Please select/add company below:
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="I am not a consultant *"
                                        className="w-full m-auto p-2 border shadow-sm "
                                    />
                                    <div className="flex gap-3">
                                        <input type="checkbox" />
                                        <span className="text-sm text-gray-400">
                                            This is a Consultancy (Hiring or Staffing agency)
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-3 focus:outline-none">
                                        <div>Number of employees in your company*</div>
                                        <select
                                            className="w-full  border p-2 text-gray-400 rounded"
                                            name=""
                                            id=""
                                        >
                                            <option value=" 0-50">0-50</option>
                                            <option value="51-100">51-100</option>
                                            <option value=" 101-300">101-300</option>
                                            <option value="301-500">301-500</option>
                                            <option value=" 501-1000">501-1000</option>
                                            <option value="1000above">1000above</option>
                                            <option value="Not sure">Not sure</option>
                                        </select>
                                    </div>

                                    {/* Radio button  */}
                                    <div className="flex gap-5 items-center my-4">
                                        <input
                                            type="radio"
                                            name="change"
                                            value="I am not a consultant"
                                        />
                                        <div className="text-bold text-2xl font-bold">
                                            Are You Sure?
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between p-3 "
                                        onClick={() => setChange(!change)}
                                    >
                                        <div className="p-2 px-5 active:bg-white border rounded cursor-pointer bg-gray-200">
                                            Cancle
                                        </div>
                                        <div className="p-2 px-5 bg-secondary text-white">
                                            Change
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Real form */}

            <div className="flex flex-col gap-5 ">
                <div className="flex flex-col">
                    <label className="p-2 text-tcolor font-semibold">
                        Company You're hiring for
                    </label>
                    <input
                        require
                        placeholder=" Company You're hiring for"
                        className="border border-green-400  p-2 rounded-md "
                        type="text"
                        name="componayName"
                        value={userData["componayName" || ""]}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="p-2 text-tcolor font-semibold">job role</label>
                    <input
                        required
                        placeholder="Eg ; Accountant"
                        className="border border-green-400  p-2 rounded-md "
                        type="text"
                        name="jobRole"
                        value={userData["jobrole" || ""]}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex gap-3">
                    <div className="flex flex-col w-full">
                        <label className="p-2 text-tcolor font-semibold">
                            Type of job *
                        </label>
                        <select
                            className="p-2 border shadow"
                            onChange={handleChange}
                            value={userData["typeOfJob" || ""]}
                            name="typeOfJob"
                            id=""
                        >
                            <option value="Full time">Full Time</option>
                            <option value="Part time">Part Time</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="p-2 text-tcolor font-semibold">
                            NO. of openings
                        </label>
                        <input
                            required
                            placeholder="No. of openings"
                            className="border border-green-400  p-2 rounded-md "
                            type="number"
                            name="vacncy"
                            value={userData["vacncy" || ""]}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex gap-3 mt-2 ">
                    <input
                        name="nightshift"
                        value="nightshift"
                        onClick={handleChange}
                        type="checkbox"
                    />
                    <div className="text-gray-400">This is a night shift job</div>
                </div>
            </div>

            <br />
            <hr />
            <br />

            <div className="flex flex-col">
                <div className="text-primary text-xl font-semibold">Location</div>
                <div className="text-gray-500 ">
                    Let candidates know where they will be working from.
                </div>
            </div>

            <fieldset>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                    <div className={`flex gap-3 p-4  border border-black rounded-xl `}>
                        <input
                            onClick={handleOffice}
                            onChange={handleChange}
                            type="radio"
                            name="WorkLocationType"
                            value="Work from office"
                        // value={userData["office" || ""]}
                        />
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div>
                                <BsBuilding className="text-4xl text-gray-500" />
                            </div>
                            <div className="text-lg font-bold">Work from office</div>
                            {/* <div className='text-sm text-gray-500 text-center' >Candidates would be required to work from a fixed location</div> */}
                        </div>
                    </div>
                    <div className={`flex gap-3 p-4  border border-black rounded-xl `}>
                        <input
                            onClick={handleHome}
                            onChange={handleChange}
                            type="radio"
                            name="WorkLocationType"
                            value="Work from home"
                        />
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div>
                                <AddHomeWorkIcon fontSize="large" className="text-gray-500" />
                            </div>
                            <div className="text-lg font-bold">Work from home</div>
                            {/* <div className='text-sm text-gray-500 text-center' >Candidates would be required to work from home (their own premises)</div> */}
                        </div>
                    </div>
                    <div className={`flex gap-3 text-center p-4  border border-black rounded-lg `}>
                        <input
                            onClick={handleField}
                            onChange={handleChange}
                            type="radio"
                            name="WorkLocationType"
                            value="Field jobs"
                        />
                        <div className=" justify-center  gap-1 ">
                            <div className="text-center">
                                <TwoWheelerIcon
                                    fontSize="large"
                                    className="text-4xl text-gray-500"
                                />
                            </div>
                            <div className="text-lg font-bold text-center">field jobs</div>
                            {/* <div className='text-sm text-gray-500 text-center' >Candidates would be required to work in the field, with minimal time spent in the office</div> */}
                        </div>
                    </div>
                </div>

                <div className={` ${office ? "null" : "hidden"} my-8 border`}>
                    <div className="p-4">
                        <div className="flex gap-3">
                            <div className="w-full">
                                <label htmlFor="" className="text-tcolor font-bold p-3 ">
                                    job Location
                                </label>
                                <select
                                    name="jobLocation"
                                    value={userData["jobLocation" || ""]}
                                    onChange={handleChange}
                                    className="p-2 rounded border shadow-md w-full"
                                >
                                    {statelist?.map((e) => {
                                        return <option value={e.name}>{e.name}</option>;
                                    })}
                                    {/* <option value="agra">Agra</option>
                                    <option value="bhopal">Bhopal</option>
                                    <option value="delhi">Delhi</option> */}
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="" className="text-tcolor font-bold ">
                                    City
                                </label>
                                <select
                                    name="jobcity"
                                    value={userData["jobcity" || ""]}
                                    onChange={handleChange}
                                    className="p-2 rounded border shadow-md w-full"
                                >
                                    {citylist?.map((e) => {
                                        return <option value={e.name}>{e.name}</option>;
                                    })}
                                    {/* <option value="agra">Agra</option>
                                    <option value="bhopal">Bhopal</option>
                                    <option value="delhi">Delhi</option> */}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="txet-tcolor text-lg font-bold">
                                Recevi application from
                            </div>
                            <div>
                                <div className="p-4 flex flex-col gap-3">
                                    <div className="flex gap-3">
                                        <input
                                            type="radio"
                                            onClick={hadle10range}
                                            name="applicationFrom"
                                            value="Within 10KM"
                                            onChange={handleChange}
                                        />
                                        <div className="text-tcolor font-bold ">Within 10KM</div>
                                    </div>
                                    <div className="flex gap-3">
                                        <input
                                            onClick={handle25range}
                                            type="radio"
                                            name="applicationFrom"
                                            value="Within 25km"
                                            onChange={handleChange}
                                        />
                                        <div className="text-tcolor font-bold ">within 25KM</div>
                                    </div>
                                    <div className="flex gap-3">
                                        <input
                                            onClick={handleCity}
                                            type="radio"
                                            name="applicationFrom"
                                            value="Entire City"
                                            onChange={handleChange}
                                        />
                                        <div className="text-tcolor font-bold ">Entire City</div>
                                    </div>
                                    <div className="flex gap-3">
                                        <input
                                            onClick={handleAllIndia}
                                            type="radio"
                                            name="applicationFrom"
                                            value="Entire India"
                                            onChange={handleChange}
                                        />
                                        <div className="text-tcolor font-bold ">Entire India</div>
                                    </div>
                                </div>

                                {/* Options */}
                                <div className={`${range10 ? "null" : "hidden"}`}>
                                    <div>
                                        <div className="text-tcolor text-xl p-3">Compensation</div>
                                        <div className="text-tcolor text-sm p-3">
                                            Job postings with right salary & incentives will help you
                                            find the right candidates.
                                        </div>
                                    </div>
                                    {/* paytype */}

                                    <div>
                                        <div className="text-tcolor font-bold">
                                            What is the pay type ?
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 p-3">
                                        <div className="flex gap-3 ">
                                            <input
                                                onClick={handleFixed}
                                                type="radio"
                                                name="paytype"
                                                value="Fixed only"
                                                onChange={handleChange}
                                            />
                                            <div className="text-tcolor font-semibold ">
                                                Fixed only
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <input
                                                onClick={handleFInsentive}
                                                type="radio"
                                                name="paytype"
                                                value="Fixed + incentive"
                                                onChange={handleChange}
                                            />
                                            <div className="text-tcolor font-semibold ">
                                                Fixed + incentive
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <input
                                                onClick={handleInsentive}
                                                type="radio"
                                                name="paytype"
                                                value="Incentive only"
                                                onChange={handleChange}
                                            />
                                            <div className="text-tcolor font-semibold ">
                                                Incentive only
                                            </div>
                                        </div>
                                    </div>
                                    {/* Fixed salary per month */}
                                    <div className={`${fixed ? "null" : "hidden"}`}>
                                        <div className="flex flex-col">
                                            <div className="w-full">
                                                <div className="text-tcolor font-bold ">
                                                    fixed salary per month
                                                </div>
                                                <input
                                                    className="w-full p-2 rounded border "
                                                    type="tel"
                                                    placeholder="Minimum"
                                                    name="Minimum"
                                                    onChange={handleChange}
                                                    value={userData["Minimum" || ""]}
                                                />
                                            </div>

                                            <div className="p-4 text-tcolor">To</div>

                                            <div className="w-full">
                                                <div className="text-tcolor font-bold ">
                                                    fixed salary per month
                                                </div>
                                                <input
                                                    className="w-full p-2 rounded border "
                                                    type="tel"
                                                    placeholder="Maximum"
                                                    name="Maximum"
                                                    onChange={handleChange}
                                                    value={userData["Maximum" || ""]}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${fInsentive ? "null" : "hidden"}`}>
                                        <div className="flex flex-col">
                                            <div className="w-full">
                                                <div className="text-tcolor font-bold ">
                                                    fixed salary per month
                                                </div>
                                                <input
                                                    className="w-full p-2 rounded border "
                                                    type="tel"
                                                    placeholder="Minimum"
                                                    name="Minimum"
                                                    value={userData["Minimum" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="p-4 text-tcolor">To</div>

                                            <div className="w-full">
                                                <div className="text-tcolor font-bold ">
                                                    fixed salary per month
                                                </div>
                                                <input
                                                    className="w-full p-2 rounded border "
                                                    type="tel"
                                                    placeholder="Maximum"
                                                    name="Maximum"
                                                    value={userData["Maximum" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-tcolor text-xl font-bold p-2">
                                                Average Incentive per month
                                            </div>
                                            <div>
                                                <input
                                                    className=" border p-2 rounded w-full "
                                                    type="tel"
                                                    placeholder="Average"
                                                    name="Average"
                                                    value={userData["Average" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${insentive ? "null" : "hidden"}`}>
                                        <div>
                                            <div className="text-tcolor text-xl font-bold p-2">
                                                Average Incentive per month
                                            </div>
                                            <div>
                                                <input
                                                    className=" border p-2 rounded w-full "
                                                    type="number"
                                                    placeholder="Average"
                                                    name="Average"
                                                    value={userData["Average" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${range25 ? "null" : "hidden"}`}>
                                    <div>
                                        <div className="text-tcolor text-xl p-3">Compensation</div>
                                        <div className="text-tcolor text-sm p-3">
                                            Job postings with right salary & incentives will help you
                                            find the right candidates.
                                        </div>
                                    </div>
                                    {/* paytype */}
                                    <div>
                                        <div className="text-tcolor font-bold">
                                            What is the pay type ?
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 p-3">
                                        <div className="flex gap-3 ">
                                            <input
                                                onClick={handleFixed}
                                                type="radio"
                                                name="paytype"
                                                value="FixedOnly"
                                                onChange={handleChange}
                                            />
                                            <div className="text-tcolor font-semibold ">
                                                Fixed only
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <input
                                                onClick={handleFInsentive}
                                                type="radio"
                                                name="paytype"
                                                value="Fixed + incentive"
                                                onChange={handleChange}
                                            />
                                            <div className="text-tcolor font-semibold ">
                                                Fixed + incentive
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <input
                                                onClick={handleInsentive}
                                                type="radio"
                                                name="paytype"
                                                value="Incentive only"
                                                onChange={handleChange}
                                            />
                                            <div className="text-tcolor font-semibold ">
                                                Incentive only
                                            </div>
                                        </div>
                                    </div>
                                    {/* Fixed salary per month */}
                                    <div className={`${fixed ? "null" : "hidden"}`}>
                                        <div className="flex flex-col">
                                            <div className="w-full">
                                                <div className="text-tcolor font-bold ">
                                                    fixed salary per month
                                                </div>
                                                <input
                                                    className="w-full p-2 rounded border "
                                                    type="tel"
                                                    placeholder="Minimum"
                                                    name="Minimum"
                                                    value={userData["Minimum" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="p-4 text-tcolor">To</div>

                                            <div className="w-full">
                                                <div className="text-tcolor font-bold ">
                                                    fixed salary per month
                                                </div>
                                                <input
                                                    className="w-full p-2 rounded border "
                                                    type="tel"
                                                    placeholder="Maximum"
                                                    name="Maximum"
                                                    value={userData["Maximum" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${fInsentive ? "null" : "hidden"}`}>
                                        <div className="flex flex-col">
                                            <div className="w-full">
                                                <div className="text-tcolor font-bold ">
                                                    fixed salary per month
                                                </div>
                                                <input
                                                    className="w-full p-2 rounded border "
                                                    type="tel"
                                                    placeholder="Minimum"
                                                    name="Minimum"
                                                    value={userData["Minimum" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="p-4 text-tcolor">To</div>

                                            <div className="w-full">
                                                <div className="text-tcolor font-bold ">
                                                    fixed salary per month
                                                </div>
                                                <input
                                                    className="w-full p-2 rounded border "
                                                    type="tel"
                                                    placeholder="Maximum"
                                                    name="Maximum"
                                                    value={userData["Maximum" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-tcolor text-xl font-bold p-2">
                                                Average Incentive per month
                                            </div>
                                            <div>
                                                <input
                                                    className=" border p-2 rounded w-full "
                                                    type="number"
                                                    placeholder="Average"
                                                    name="Average"
                                                    value={userData["Average" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${insentive ? "null" : "hidden"}`}>
                                        <div>
                                            <div className="text-tcolor text-xl font-bold p-2">
                                                Average Incentive per month
                                            </div>
                                            <div>
                                                <input
                                                    className=" border p-2 rounded w-full "
                                                    type="number"
                                                    placeholder="Average"
                                                    name="Average"
                                                    value={userData["Average" || ""]}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                                <div className={`${city ? "null" : "hidden"}`}>City</div>
                                <div className={`${allIndia ? "null" : "hidden"}`}>
                                    All India
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Work From Home Portion */}
                <div className={` ${home ? "null" : "hidden"}`}>
                    <div className="p-3">
                        <div className="text-tcolor font-bold ">
                            Receive application from
                        </div>
                        <div className="flex gap-4 p-3">
                            <button
                                onClick={handleScity}
                                className="bg-btncolor text-white font-bold rounded  p-2 px-5 active:bg-green-500"
                            >
                                Specific City
                            </button>
                            <button
                                onClick={handleIndia}
                                className="bg-btncolor text-white font-bold rounded  p-2 px-5 active:bg-green-500"
                            >
                                AnyWhere in india
                            </button>
                        </div>
                    </div>
                    <div className={`${scity ? "null" : "hidden"}`}>
                        <input
                            type="radio"
                            name="Scity"
                            value=" Specific City"
                            onChange={handleChange}
                        />{" "}
                        <span className="ml-2" >
                            Specific City
                        </span>
                        <select
                            className="border w-full p-2 rounded mt-3"
                            value={userData["city" || ""]}
                            onChange={handleChange}
                            name="SelectedCity"
                            id=""
                        >
                            {citylist?.map((e) => {
                                return <option value={e.name}>{e.name}</option>;
                            })}
                            {/* <option value="Bhopal">Bhopal</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Indore">Indore</option> */}
                        </select>
                    </div>
                    <div className={`${india ? "null" : "hidden"}`}>
                        <input
                            type="radio"
                            name="Scity"
                            value="AnyWhere in india"
                            onChange={handleChange}
                        />
                        <span className="p-2"> AnyWhere in india</span>

                        <div className="p-2 rounded border bg-blue-200 font-bold">
                            You will be receiving applications from Entire india
                        </div>

                        <div className="text-xl font-bold  mt-3" >Compensation</div>
                        <div>Job postings with right salary & incentives will help you find the right candidates.</div>
                    </div>

                    <div className="mt-3" >
                        <div className="font-bold" >Whate is th pay type?</div>
                        <div className="flex gap-3" >
                            <input
                                value="Fixed only"
                                onChange={handleChange}
                                type="radio"
                                name="paytype" />Fixed only
                            <input
                                value="Fixed + Incentive"
                                onChange={handleChange}
                                type="radio" name="paytype" />Fixed +Incentive
                            <input
                                value="Incentive Only"
                                onChange={handleChange}
                                type="radio"
                                name="paytype" />Incentive Only
                        </div>
                    </div>
                </div>

                <div className={` ${field ? "null" : "hidden"}`}>
                    <div>
                        <div className="flex gap-3 items-center mt-3" >
                            <input onClick={handleFields} type="radio" name="Scity"
                                // name="applicationFrom"
                                value="one Specific area"
                                onChange={handleChange} /> one Specific area
                            <input onClick={handleFieldsAny} type="radio"

                                // name="applicationFrom"
                                value="Anywhere in india"
                                onChange={handleChange}

                                name="Scity" />Anywhere in india
                        </div>
                        {/* Speicfi city */}
                        <div className={`${fspecific ? "null" : "hidden"}`} >

                            <div className="p-4">
                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <label htmlFor="" className="text-tcolor font-bold p-3 ">
                                            job Location
                                        </label>
                                        <select
                                            name="jobLocation"
                                            value={userData["jobLocation" || ""]}
                                            onChange={handleChange}
                                            className="p-2 rounded border shadow-md w-full"
                                        >
                                            {statelist?.map((e) => {
                                                return <option value={e.name}>{e.name}</option>;
                                            })}
                                            {/* <option value="agra">Agra</option>
                                    <option value="bhopal">Bhopal</option>
                                    <option value="delhi">Delhi</option> */}
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="" className="text-tcolor font-bold ">
                                            City
                                        </label>
                                        <select
                                            name="jobcity"
                                            value={userData["jobcity" || ""]}
                                            onChange={handleChange}
                                            className="p-2 rounded border shadow-md w-full"
                                        >
                                            {citylist?.map((e) => {
                                                return <option value={e.name}>{e.name}</option>;
                                            })}
                                            {/* <option value="agra">Agra</option>
                                    <option value="bhopal">Bhopal</option>
                                    <option value="delhi">Delhi</option> */}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className="txet-tcolor text-lg font-bold">
                                        Recevi application from
                                    </div>
                                    <div>
                                        <div className="p-4 flex flex-col gap-3">
                                            <div className="flex gap-3">
                                                <input
                                                    type="radio"
                                                    onClick={hadle10range}
                                                    name="applicationFrom"
                                                    value="Within 10KM"
                                                    onChange={handleChange}
                                                />
                                                <div className="text-tcolor font-bold ">Within 10KM</div>
                                            </div>
                                            <div className="flex gap-3">
                                                <input
                                                    onClick={handle25range}
                                                    type="radio"
                                                    name="applicationFrom"
                                                    value="Within 25km"
                                                    onChange={handleChange}
                                                />
                                                <div className="text-tcolor font-bold ">within 25KM</div>
                                            </div>
                                            <div className="flex gap-3">
                                                <input
                                                    onClick={handleCity}
                                                    type="radio"
                                                    name="applicationFrom"
                                                    value="Entire City"
                                                    onChange={handleChange}
                                                />
                                                <div className="text-tcolor font-bold ">Entire City</div>
                                            </div>
                                            <div className="flex gap-3">
                                                <input
                                                    onClick={handleAllIndia}
                                                    type="radio"
                                                    name="applicationFrom"
                                                    value="Entire India"
                                                    onChange={handleChange}
                                                />
                                                <div className="text-tcolor font-bold ">Entire India</div>
                                            </div>
                                        </div>

                                        {/* Options */}
                                        <div className={`${range10 ? "null" : "hidden"}`}>
                                            <div>
                                                <div className="text-tcolor text-xl p-3">Compensation</div>
                                                <div className="text-tcolor text-sm p-3">
                                                    Job postings with right salary & incentives will help you
                                                    find the right candidates.
                                                </div>
                                            </div>
                                            {/* paytype */}

                                            <div>
                                                <div className="text-tcolor font-bold">
                                                    What is the pay type ?
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-3 p-3">
                                                <div className="flex gap-3 ">
                                                    <input
                                                        onClick={handleFixed}
                                                        type="radio"
                                                        name="paytype"
                                                        value="Fixed only"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Fixed only
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <input
                                                        onClick={handleFInsentive}
                                                        type="radio"
                                                        name="paytype"
                                                        value="Fixed + incentive"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Fixed + incentive
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <input
                                                        onClick={handleInsentive}
                                                        type="radio"
                                                        name="paytype"
                                                        value="Incentive only"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Incentive only
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Fixed salary per month */}
                                            <div className={`${fixed ? "null" : "hidden"}`}>
                                                <div className="flex flex-col">
                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Minimum"
                                                            name="Minimum"
                                                            onChange={handleChange}
                                                            value={userData["Minimum" || ""]}
                                                        />
                                                    </div>

                                                    <div className="p-4 text-tcolor">To</div>

                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Maximum"
                                                            name="Maximum"
                                                            onChange={handleChange}
                                                            value={userData["Maximum" || ""]}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`${fInsentive ? "null" : "hidden"}`}>
                                                <div className="flex flex-col">
                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Minimum"
                                                            name="Minimum"
                                                            value={userData["Minimum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="p-4 text-tcolor">To</div>

                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Maximum"
                                                            name="Maximum"
                                                            value={userData["Maximum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-tcolor text-xl font-bold p-2">
                                                        Average Incentive per month
                                                    </div>
                                                    <div>
                                                        <input
                                                            className=" border p-2 rounded w-full "
                                                            type="tel"
                                                            placeholder="Average"
                                                            name="Average"
                                                            value={userData["Average" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`${insentive ? "null" : "hidden"}`}>
                                                <div>
                                                    <div className="text-tcolor text-xl font-bold p-2">
                                                        Average Incentive per month
                                                    </div>
                                                    <div>
                                                        <input
                                                            className=" border p-2 rounded w-full "
                                                            type="number"
                                                            placeholder="Average"
                                                            name="Average"
                                                            value={userData["Average" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${range25 ? "null" : "hidden"}`}>
                                            <div>
                                                <div className="text-tcolor text-xl p-3">Compensation</div>
                                                <div className="text-tcolor text-sm p-3">
                                                    Job postings with right salary & incentives will help you
                                                    find the right candidates.
                                                </div>
                                            </div>
                                            {/* paytype */}
                                            <div>
                                                <div className="text-tcolor font-bold">
                                                    What is the pay type ?
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 p-3">
                                                <div className="flex gap-3 ">
                                                    <input
                                                        onClick={handleFixed}
                                                        type="radio"
                                                        name="paytype"
                                                        value="FixedOnly"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Fixed only
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <input
                                                        onClick={handleFInsentive}
                                                        type="radio"
                                                        name="paytype"
                                                        value="Fixed + incentive"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Fixed + incentive
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <input
                                                        onClick={handleInsentive}
                                                        type="radio"
                                                        name="paytype"
                                                        value="Incentive only"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Incentive only
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Fixed salary per month */}
                                            <div className={`${fixed ? "null" : "hidden"}`}>
                                                <div className="flex flex-col">
                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Minimum"
                                                            name="Minimum"
                                                            value={userData["Minimum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="p-4 text-tcolor">To</div>

                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Maximum"
                                                            name="Maximum"
                                                            value={userData["Maximum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${fInsentive ? "null" : "hidden"}`}>
                                                <div className="flex flex-col">
                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Minimum"
                                                            name="Minimum"
                                                            value={userData["Minimum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="p-4 text-tcolor">To</div>

                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Maximum"
                                                            name="Maximum"
                                                            value={userData["Maximum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-tcolor text-xl font-bold p-2">
                                                        Average Incentive per month
                                                    </div>
                                                    <div>
                                                        <input
                                                            className=" border p-2 rounded w-full "
                                                            type="number"
                                                            placeholder="Average"
                                                            name="Average"
                                                            value={userData["Average" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${insentive ? "null" : "hidden"}`}>
                                                <div>
                                                    <div className="text-tcolor text-xl font-bold p-2">
                                                        Average Incentive per month
                                                    </div>
                                                    <div>
                                                        <input
                                                            className=" border p-2 rounded w-full "
                                                            type="number"
                                                            placeholder="Average"
                                                            name="Average"
                                                            value={userData["Average" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                        </div>
                                        <div className={`${city ? "null" : "hidden"}`}>City</div>
                                        <div className={`${allIndia ? "null" : "hidden"}`}>
                                            All India
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${fAny ? "null" : "hidden"}`} >
                            <div className="p-4">
                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <label htmlFor="" className="text-tcolor font-bold p-3 ">
                                            job Location
                                        </label>
                                        <select
                                            name="jobLocation"
                                            value={userData["jobLocation" || ""]}
                                            onChange={handleChange}
                                            className="p-2 rounded border shadow-md w-full"
                                        >
                                            {statelist?.map((e) => {
                                                return <option value={e.name}>{e.name}</option>;
                                            })}
                                        </select>

                                        <div className="text-xl font-bold p-2" >Compensation</div>
                                        <div className="text-sm p-2" >Job postings with right salary & incentives will help you find the right candidates.</div>
                                        <div className="flex gap-4 w-full" >
                                            <div className="flex flex-col" >
                                                <div>Minimum Salary</div>
                                                <div><input className="p-2 rounded border"
                                                    name="Minimum"
                                                    value={userData["Minimum" || ""]}
                                                    onChange={handleChange}


                                                    type="text" /></div>
                                            </div>
                                            <div className="flex flex-col" >
                                                <div>Maximum Salary</div>
                                                <div><input className="p-2 rounded border" type="text"
                                                    name="Maximun"
                                                    value={userData["Maximun" || ""]}
                                                    onChange={handleChange}


                                                /></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div>

                                    <div>


                                        {/* Options */}


                                        <div className={`${range25 ? "null" : "hidden"}`}>
                                            <div>
                                                <div className="text-tcolor text-xl p-3">Compensation</div>
                                                <div className="text-tcolor text-sm p-3">
                                                    Job postings with right salary & incentives will help you
                                                    find the right candidates.
                                                </div>
                                            </div>
                                            {/* paytype */}
                                            <div>
                                                <div className="text-tcolor font-bold">
                                                    What is the pay type ?
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 p-3">
                                                <div className="flex gap-3 ">
                                                    <input
                                                        onClick={handleFixed}
                                                        type="radio"
                                                        name="paytype"
                                                        value="FixedOnly"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Fixed only
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <input
                                                        onClick={handleFInsentive}
                                                        type="radio"
                                                        name="paytype"
                                                        value="Fixed + incentive"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Fixed + incentive
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <input
                                                        onClick={handleInsentive}
                                                        type="radio"
                                                        name="paytype"
                                                        value="Incentive only"
                                                        onChange={handleChange}
                                                    />
                                                    <div className="text-tcolor font-semibold ">
                                                        Incentive only
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Fixed salary per month */}
                                            <div className={`${fixed ? "null" : "hidden"}`}>
                                                <div className="flex flex-col">
                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Minimum"
                                                            name="Minimum"
                                                            value={userData["Minimum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="p-4 text-tcolor">To</div>

                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Maximum"
                                                            name="Maximum"
                                                            value={userData["Maximum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${fInsentive ? "null" : "hidden"}`}>
                                                <div className="flex flex-col">
                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Minimum"
                                                            name="Minimum"
                                                            value={userData["Minimum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="p-4 text-tcolor">To</div>

                                                    <div className="w-full">
                                                        <div className="text-tcolor font-bold ">
                                                            fixed salary per month
                                                        </div>
                                                        <input
                                                            className="w-full p-2 rounded border "
                                                            type="tel"
                                                            placeholder="Maximum"
                                                            name="Maximum"
                                                            value={userData["Maximum" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-tcolor text-xl font-bold p-2">
                                                        Average Incentive per month
                                                    </div>
                                                    <div>
                                                        <input
                                                            className=" border p-2 rounded w-full "
                                                            type="number"
                                                            placeholder="Average"
                                                            name="Average"
                                                            value={userData["Average" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${insentive ? "null" : "hidden"}`}>
                                                <div>
                                                    <div className="text-tcolor text-xl font-bold p-2">
                                                        Average Incentive per month
                                                    </div>
                                                    <div>
                                                        <input
                                                            className=" border p-2 rounded w-full "
                                                            type="number"
                                                            placeholder="Average"
                                                            name="Average"
                                                            value={userData["Average" || ""]}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                        </div>
                                        <div className={`${city ? "null" : "hidden"}`}>City</div>
                                        <div className={`${allIndia ? "null" : "hidden"}`}>
                                            All India
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </fieldset >

            {/* Multiple check box */}

            <div div className="" >
                <div className="text-tcolor font-bold p-4 text-2xl">
                    Do you offer any additional perks?
                </div>

                <div>
                    <MultiSelect onChange={handleOnchange} options={options} />
                </div>
                {valueoption}
            </div >

            <div>
                <div className="text-tcolor text-xl my-5 font-bold ">
                    Is there any joining fee or deposit required from the candidate?
                </div>
                <div className="flex gap-4 items-center">
                    <input
                        onClick={handleFee}
                        type="radio"
                        name="joining fee"
                        value="Yes"
                        onChange={handleChange}
                    />{" "}
                    Yes
                    <input
                        type="radio"
                        name="joining fee"
                        onChange={handleChange}
                        onClick={handleFee1}
                        value="No"
                    />{" "}
                    No
                </div>
            </div>

            <div className={`${fee ? "null" : "hidden"}`}>
                <div className="flex gap-3 justify-evenly my-6">
                    <div>
                        <input
                            name="amount"
                            value={userData[" amount " || ""]}
                            onChange={handleChange}
                            className="placeholder:text-red-500 p-2 border rounded w-full border-primary"
                            type="tel"
                            placeholder="Fee amount *"
                        />
                    </div>
                    <div>
                        <select
                            value={userData[" feeFor" || ""]}
                            onChange={handleChange}
                            name="feeFor"
                            placeholder="what is this fee for?"
                            className="placeholder:text-red-500 p-2 border rounded w-full border-primary"
                        >
                            <option value="Asset/ Inventory Charge">
                                Asset/ Inventory Charge
                            </option>
                            <option value="Security deposit( Refundable)">
                                Security deposit( Refundable)
                            </option>
                            <option value="Registration/ Training Fees">
                                Registration/ Training Fees
                            </option>
                            <option value="Commission">Commission</option>
                            <option value="Other Reason">Other Reason</option>
                        </select>
                    </div>
                </div>
                <div>
                    <input
                        className="border p-3 w-full shadow-md"
                        type="text"
                        name="reason"
                        value={userData[" reason" || ""]}
                        onChange={handleChange}
                        placeholder="Mention your reason here"
                    />
                </div>

                {/* Yha */}
                <div className="text-gray-500 my-8 ">
                    <div className="text-bold text-primary p-3">
                        When should the fee be paid? *
                    </div>
                    <div className="grid lg:grid-cols-3 gap-3 ">
                        <div className="flex gap-3">
                            <input
                                type="radio"
                                name="paid"
                                value="Before the interview"
                                onChange={handleChange}
                            />
                            Before the interview
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="radio"
                                name="paid"
                                value="after job confirmation"
                                onChange={handleChange}
                            />{" "}
                            After job confirmation
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="radio"
                                name="paid"
                                value="deduct from salary"
                                onChange={handleChange}
                            />{" "}
                            Deducted from salary
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={` ${fee1 ? "null" : "hidden"
                    } bg-red-200 mt-6 p-3 border border-red-600 flex gap-3`}
            >
                <div>
                    <BsExclamationTriangleFill />
                </div>
                <div className=" flex-1 text-center">
                    By selecting this option, you declare that a candidate applying to
                    this job will not be charged any fee. A mismatch in this information
                    will lead to an account suspension as per .
                    <a href="" className="text-blue-500">
                        Open's code of Conduct
                    </a>
                </div>
                <div>
                    <GrFormClose className="text-lg " onClick={() => setFee1(false)} />
                </div>
            </div>


        </>
    );
};

export default BasicDetails;



