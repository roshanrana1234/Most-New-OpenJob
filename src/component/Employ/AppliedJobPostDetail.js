import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
const AppliedJobPostDetail = () => {
    return (
        <>
            <div className='bg-bg-color' >
                <div className='flex gap-1 items-center p-3 bg-white' >
                    <Link to="/newuser/viewjob/:postedId" >
                        <button className='text-xl ' ><BsArrowLeftShort /></button>
                    </Link>
                    <div> Back to candidates </div>
                </div>


                <div className='flex flex-col w-full gap-5 mt-5' >
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Company </div>
                        <div className='text-gray-600' > Workstar Manpower</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' > Job Id </div>
                        <div className='text-gray-600' > 777401772</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' > Created on </div>
                        <div className='text-gray-600' > 12-10-2022
                        </div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' > Description </div>
                        <div className='text-gray-600' >
                            <ul className='flex gap-3 flex-col' >
                                <li>*Urgent Hiring For Uber Bike Rider*</li>
                                <li>*Salary* Rs25000-30000</li>
                                <li>*Payment -* Daily And Weekly</li>
                                <li>*Work -* Customer Pickup And Drop</li>
                                <li>*Diwali /Joining Bonus* 7 Days M 30 Rides Krne Per Aap Ko 6000 Rupees</li>
                            </ul>
                        </div>
                    </div>

                    <br />   <hr /><br />

                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' > Gender</div>
                        <div className='text-gray-600' > Male</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' > Education</div>
                        <div className='text-gray-600' >10th Or Below 10th</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >English</div>
                        <div className='text-gray-600' >No English</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Experience</div>
                        <div className='text-gray-600' >Freshers Can Apply</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Job Type</div>
                        <div className='text-gray-600' >Both (Full-Time And Part-Time)</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Fee charged</div>
                        <div className='text-gray-600' >No</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Salary</div>
                        <div className='text-gray-600' >₹ 25,500 - ₹ 35,000 * ( Fixed: ₹ 25,500 - ₹ 30,000, Incentive: ₹ 5,000 )</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Perks</div>
                        <div className='text-gray-600' >Weekly Payout, Overtime Pay, Joining Bonus, Annual Bonus, Petrol Allowance, Health Insurance, Flexible Working Hours</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Screening req.</div>
                        <div className='text-gray-600' >PAN card,Aadhaar Card, Two-wheeler Vehicle, Two Wheeler Driving License</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Any other specific requirements</div>
                        <div className='text-gray-600' >No</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Area</div>
                        <div className='text-gray-600' >Pimpri Bus Stand</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >City</div>
                        <div className='text-gray-600' >Pune</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Application from</div>
                        <div className='text-gray-600' >WITHIN_10KM</div>
                    </div>
                    <div className='flex w-full ' >
                        <div className='font-semibold min-w-[150px]' >Work from Home</div>
                        <div className='text-gray-600' >No</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AppliedJobPostDetail