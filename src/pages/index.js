import React, {useContext} from 'react';
import SignUp from '@/components/signup/signUp';
import Login from '@/components/login/Login';
import Navbar from '@/components/navbar/Navbar';
import globalContext from '@/components/contextApi/GlobalContext';
import Dashboard from '@/components/dashboard/Dashboard';
import Profile from '@/components/profile/Profile';

const Index = () => {

  const {login, dashboard, showProfile} = useContext(globalContext)

  return (
      <div>
        <Navbar />
        {
        (!login && !dashboard) ?
         <SignUp />
        :
        (login && !dashboard) &&
        <Login />}
        {dashboard && <Dashboard/>}
        {/* {showProfile && <Profile/>} */}
    </div>
  )
}

export default Index