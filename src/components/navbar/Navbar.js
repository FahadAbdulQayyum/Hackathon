import React, { useContext, useEffect, useState } from 'react';
import globalContext from '../contextApi/GlobalContext';
import Link from 'next/link';
// import { useRouter, Router } from 'next/router';
import Router from 'next/router';

const Navbar = () => {

    // const router = useRouter

    const { login, Login, Signup, dashboard, Dashboard, showProfileFunc, user, signup } = useContext(globalContext);
    
    const [dashboardD, setDashboardD] = useState(false)

     useEffect(() => {
        // console.log('navrouterrr',router.query)
        console.log('userDetaillll', user)
        user!==null && Dashboard()
        console.log('userDetaillll dash', dashboard)

        const fetchDashboardData = async () => {
            // Assuming Dashboard() has async logic
            const dashboardData = await Dashboard();
            setDashboardD(true); // Update the dashboard state after the async action
            console.log('dash',dashboardData)
        };

        fetchDashboardData();
    },[])

    const Logout = () => {
        localStorage.removeItem("userDetail")
        window.location.replace('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light purple-clr">
            <div className="container">
                {/* <!-- Left side content --> */}
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <h3 className="text-light"><strong>Personal Blogging App</strong></h3>
                    </li>
                </ul>

                {/* <!-- Right side content --> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">

                        {/* {(dashboardD && !login ) &&
                            <span className='d-flex'>
                            <Link className="nav-link text-light font-weight" onClick={showProfileFunc} href="/profilePage">{user?.firstName+' '+user?.lastName}</Link>
                            <a className="nav-link text-light" onClick={Logout} href="javascript:void(0)"><strong>Logout</strong></a>
                            </span>}
                            {(!dashboardD && !login && signup) &&
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Login</strong></a>
                            }
                            {(dashboardD && !login && !signup) &&
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Signup</strong></a>
                        } */}


                        {/* {(login && dashboard) ?
                            <span className='d-flex'>
                            <Link className="nav-link text-light font-weight" onClick={showProfileFunc} href="/profilePage">{user?.firstName+' '+user?.lastName}</Link>
                            <a className="nav-link text-light" onClick={Logout} href="javascript:void(0)"><strong>Logout</strong></a>
                            </span>
                            :
                            !dashboard
                            ?
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Signup</strong></a>
                            :
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Login</strong></a>
                        } */}


{(login && dashboard) ? (
    <span className='d-flex'>
        <Link className="nav-link text-light font-weight" onClick={showProfileFunc} href="/profilePage">{user?.firstName+' '+user?.lastName}</Link>
        <a className="nav-link text-light" onClick={Logout} href="javascript:void(0)"><strong>Logout</strong></a>
    </span>
) : !dashboard ? (
    <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Signup</strong></a>
) : (
    <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Login</strong></a>
)}

                        {/* {login ?
                            <span className='d-flex'>
                            <Link className="nav-link text-light font-weight" onClick={showProfileFunc} href="/profilePage">{user?.firstName+' '+user?.lastName}</Link>
                            <a className="nav-link text-light" onClick={Logout} href="javascript:void(0)"><strong>Logout</strong></a>
                            </span>
                            :
                            dashboard
                            ?
                            <a className="nav-link text-light" onClick={Signup} href="javascript:void(0)"><strong>Signup</strong></a>
                            :
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Login</strong></a>
                        } */}

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar