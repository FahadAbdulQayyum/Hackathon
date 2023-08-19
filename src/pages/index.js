import React, {useContext} from 'react';
import SignUp from '@/components/signup/signUp';
import Login from '@/components/login/Login';
import Navbar from '@/components/navbar/Navbar';
import globalContext from '@/components/contextApi/GlobalContext';
import Dashboard from '@/components/dashboard/Dashboard';
import Profile from '@/components/profile/Profile';
import Reader from '@/components/reader/Reader';

const Index = () => {

  const {login, dashboard, showProfile, reader} = useContext(globalContext)

  return (
      <div>
        <Navbar />
        {reader && <Reader/>}
        {
        (!reader && !login && !dashboard) ?
         <SignUp />
        :
        (!reader && login && !dashboard) &&
        <Login />}
        {dashboard && <Dashboard/>}
        {/* {showProfile && <Profile/>} */}
    </div>
  )
}

export default Index