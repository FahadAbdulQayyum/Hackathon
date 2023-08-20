import React, { useContext, useEffect, useState } from 'react';
import globalContext from '../contextApi/GlobalContext';
import Link from 'next/link';

const Navbar = () => {


    const { login, Login, Signup, dashboard, Dashboard, showProfileFunc, user, signup } = useContext(globalContext);

    useEffect(() => {
        console.log('userDetaillll', user)
        user !== null && Dashboard()
    }, [])

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

                        {(login && dashboard) ? (
                            <span className='d-flex'>
                                <Link className="nav-link text-light font-weight" onClick={showProfileFunc} href="/profilePage">{user?.firstName + ' ' + user?.lastName}</Link>
                                <a className="nav-link text-light" onClick={Logout} href="javascript:void(0)"><strong>Logout</strong></a>
                            </span>
                        ) : !dashboard ? (
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Signup</strong></a>
                        ) : (
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Login</strong></a>
                        )}

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar