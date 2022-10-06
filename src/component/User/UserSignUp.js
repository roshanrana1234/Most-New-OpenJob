import React, { useState, useEffect } from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useUserregisterMutation } from "../../services/profile";
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [singup] = useUserregisterMutation()

    const [usersDatas, setUsersDatas] = useState({ fullname: "", email: "", password: "", phonenumber: "" });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [eye, setEye] = useState("password")
    const handleInput = (e) => {
        const { name, value } = e.target
        setUsersDatas({ ...usersDatas, [name]: value })
        // console.log(usersDatas);
    }

    console.log(usersDatas)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Submited");
        console.log(usersDatas);

        const res = await singup(usersDatas)
        if (res?.data?.status === "succesfull") {
            navigate('/userlogin/Userrlogin')

            console.log(res?.data?.status, "33")

            // navigate('/home')
        }


        setFormErrors(validate(usersDatas));
        setIsSubmit(true);
        // singup(usersDatas)
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(usersDatas);
        }
    }, [formErrors])


    // Validation First Step
    const validate = (values) => {
        const errors = {}
        // for No Special Character
        // const sregex = new RegExp("^[a-zA-Z0-9]{4,10}$")

        // For Email
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        // For Password
        const Pregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        // For Space
        const Sregex = new RegExp("^[a-zA-Z]+\.[a-zA-Z]{4,10}^'")
        // const Sregex = new RegExp("\A(?=\D*\d)(?=[^A-Z]*[A-Z])\S{8,15}\z")
        if (!values.fullname) {
            errors.fullname = "User Name Is Required ";
        } else if (values.useName < 3) {
            errors.fullname = "user name requird minimum 3 Character"
        }
        //  else if (!sregex.test(values.fullname)) {
        //     errors.fullname = "user name should not contain any special Character"
        // }
        if (!values.email) {
            errors.email = "Email Is Required ";
        } else if (!regex.test(values.email)) {
            errors.email = "You have entered an invalid email address!";

        }
        if (!values.password) {
            errors.password = "Password Is Required ";
        }
        else if (values.password.length < 8) {
            errors.password = "Password must contain more than 8 Character"
        }
        else if (values.password.length > 32) {
            errors.password = "password cannot exced more than 32 Character"
        }
        else if (!Pregex.test(values.password)) {
            errors.password = "Contain at least one numeric character, one uppercase letter , one lowercase letter , one special character "
        }
        else if (Sregex.test(values.password)) {
            errors.password = "Password cannot contain white spaces."
        }
        return errors
    }

    const handleEye = () => {
        if (eye === "password") {
            setEye("text")
            return;
        }
        setEye("password")
    }
    return (
        <>
            <div className='flex m-auto flex-col  justify-center items-center p-5  rounded-lg border shadow-2xl' >
                <form
                    className=' flex flex-col gap-3 w-full'
                    onSubmit={handleSubmit}
                >

                    <div className='flex flex-col lg:flex-row' >
                        <label
                            className="lg:w-[200px]  p-2  font-semibold  after:content-['*'] after:ml-2 after:text-red-600"
                            htmlFor="">User Name</label>
                        <input
                            className='w-full border border-slate-300 p-2 placeholder-slate-400 bg-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md focus:bg-slate-700 focus:text-white placeholder:text-black focus:placeholder:text-white'
                            type="text"
                            minLength="4"
                            placeholder='Enter Your Name'
                            name="fullname"
                            onChange={handleInput}
                            value={usersDatas.fullname} />
                    </div>
                    <p className='text-orange-300 text-sm' >{formErrors.fullname}</p>

                    <div className='flex flex-col lg:flex-row' >
                        <label
                            className="lg:w-[200px]  p-2  font-semibold  after:content-['*'] after:ml-2 after:text-red-600"
                            htmlFor="">Mobile</label>
                        <input
                            className='w-full border border-slate-300 p-2 placeholder-slate-400 bg-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md focus:bg-slate-700 focus:text-white placeholder:text-black focus:placeholder:text-white'
                            type="tel"
                            minLength="10"
                            placeholder='Enter Number'
                            name="phonenumber"
                            onChange={handleInput}
                            value={usersDatas.phonenumber}

                        />
                    </div>

                    <div className='flex flex-col lg:flex-row' >
                        <label
                            className="lg:w-[200px]  p-2  font-semibold  after:content-['*'] after:ml-2 after:text-red-600"
                            htmlFor="">Email</label>
                        <input
                            className=' w-full border border-slate-300 p-2 placeholder-slate-400 bg-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md focus:bg-slate-700 focus:text-white placeholder:text-black focus:placeholder:text-white '
                            type="email"
                            name="email"
                            placeholder='Enter Your Email'
                            onChange={handleInput}
                            value={usersDatas.email} />
                    </div>
                    <p className='text-orange-300 text-sm'>{formErrors.email}</p>

                    <div className='flex flex-col lg:flex-row' >
                        <label
                            className="w-[200px]  p-2  font-semibold  after:content-['*'] after:ml-2 after:text-red-600"
                            htmlFor="">Password</label>
                        <input
                            className='w-full border border-slate-300 p-2 placeholder-slate-400 bg-white shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md focus:bg-slate-500 focus:text-white placeholder:text-black focus:placeholder:text-white'
                            type={eye}
                            maxLength={33}
                            name='password'
                            placeholder='Enter Your Password'
                            onChange={handleInput}
                            value={usersDatas.password} />

                    </div>
                    <div className='flex justify-end' >
                        <div onClick={handleEye}  >{eye === "password" ? <AiFillEye className='text-2xl text-red-500 cursor-pointer' /> : <AiFillEyeInvisible className='text-2xl text-green-500' />}</div>

                    </div>
                    <p className='text-orange-300 text-sm'>{formErrors.password}</p>

                    <input className='w-full text-white bg-btncolor rounded p-2 font-bold' type="submit" value="Sign Up" />

                </form>
            </div>
        </>
    )
}

export default SignUp



