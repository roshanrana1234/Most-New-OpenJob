import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminAllJob from './component/AdminePanel/AdminAllJob'
import AdminDashBoard from './component/AdminePanel/AdminDashBoard'
import AdmineActivatedJob from './component/AdminePanel/AdmineActivatedJob'
import AdmineLogin from './component/AdminePanel/AdmineLogin'
import AdmineRLogin from './component/AdminePanel/AdmineRLogin'
import AdmineUnderReview from './component/AdminePanel/AdmineUnderReview'
import ApplyJob from './component/ApplyJob'
import DownloadApplicants from './component/DownloadApplicants'
import FirstFrom from './component/FirstFrom'
import Footer from './component/Footer'
import Home from './component/Home'
import Login from './component/Login'
import MultiStepper from './component/MultiStepperFrom/MultiStepper'
import NewLand from './component/NewLand'
import NewUser from './component/NewUser'
import Otp from './component/Otp'
import PostJob from './component/PostJob'
import Profile from './component/Profile'
import RLogin from './component/RLogin'
import SignUp from './component/SignUp'
import CompanyReview from './component/User/CompanyReview'
import JobDetailPage from './component/User/JobDetailPage'
import SalaryGuide from './component/User/SalaryGuide'
import UserFindJob from './component/User/UserFindJob'
import UserJobFeed from './component/User/UserJobFeed'
import UserLogin from './component/User/UserLogin'
import UserOtp from './component/User/UserOtp'
import UserPage from './component/User/UserPanel/UserPage'
import UserRLogin from './component/User/UserRLogin'
import UserSignup from './component/User/UserSignUp'
import logo from './images/main.png'

const App = () => {
  return (
    <>
      <Routes>

        {/* Employem signup login  */}
        <Route exact path='login' element={<Login />} >
          <Route index element={<RLogin />} />
          <Route exact path='rlogin' element={<RLogin />} />
          <Route exact path='signup' element={<SignUp />} />
          <Route exact path='otp' element={<Otp />} />
        </Route>
        {/* Employem signup login  */}


        {/* User signup login  */}
        <Route exact path='userlogin' element={<UserLogin />} >
          <Route index element={<UserRLogin />} />
          <Route exact path='Userrlogin' element={<UserRLogin />} />
          <Route exact path='usersignup' element={<UserSignup />} />
          <Route exact path='userotp' element={<UserOtp />} />
        </Route>
        {/* User Signup Ends */}


        {/* Admine Login Start */}
        <Route exact path='adminelogin' element={<AdmineLogin />} >
          <Route index element={<AdmineRLogin />} />
          <Route exact path='adminrlogin' element={<AdmineRLogin />} />
        </Route>
        {/* Admine Login End */}

        {/* Main */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='firstform' element={<FirstFrom />} />

        <Route exact path='newuser' element={<NewUser />} >
          <Route index element={<NewLand />} />
          <Route exact path='postjob' element={<MultiStepper />} />
          <Route exact path='profile' element={<Profile />} />
          <Route exact path='downloadapplicants' element={<DownloadApplicants />} />
        </Route>
        {/* Main ends */}


        {/* UserPages */}
        <Route exact path='userpage' element={<UserPage />} >
          <Route index element={<UserFindJob />} />

          <Route exact path='userfindjob' element={<UserFindJob />} >
            <Route index element={<UserJobFeed />} />
            <Route exact path='userjobfeed' element={<UserJobFeed />} />
            {/* <Route exact path={`applyjob/:applyId`} element={<ApplyJob />} /> */}
            {/* or */}
            <Route exact path={`/userpage/userfindjob/jobdetail/:detailId`} element={<JobDetailPage />} />
            <Route exact path={`/userpage/userfindjob/applyjob/:applyId`} element={<ApplyJob />} />

          </Route>

          <Route exact path='usercompanyreview' element={<CompanyReview />} />
          <Route exact path='usersalaryguide' element={<SalaryGuide />} />
        </Route>
        {/* UserPages ends */}

        {/* Admine Dashboard Start Here */}
        <Route exact path='adminedashboard' element={<AdminDashBoard />} >
          <Route exact path='adminealljob' element={<AdminAllJob />} />
          <Route exact path='admineunderreview' element={<AdmineUnderReview />} />
          <Route exact path='admineactivatejob' element={<AdmineActivatedJob />} />
        </Route>

        {/* Admine Dashboard End Here */}


      </Routes>
      <Footer />
    </>
  )
}

export default App