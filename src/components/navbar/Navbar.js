import React, { useContext } from 'react';
import globalContext from '../contextApi/GlobalContext';
import Link from 'next/link';

const Navbar = () => {
    const { login, Login, dashboard, Dashboard, showProfileFunc } = useContext(globalContext);
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
                        {login ?
                            dashboard 
                            ?
                            <span className='d-flex'>
                            {/* <a className="nav-link text-light font-weight" onClick={showProfileFunc} href="#">Profile Name</a> */}
                            <Link className="nav-link text-light font-weight" onClick={showProfileFunc} href="/profilePage">Profile Name</Link>
                            <a className="nav-link text-light" onClick={Dashboard} href="javascript:void(0)"><strong>Logout</strong></a>
                            </span>
                            :
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Signup</strong></a>
                            :
                            <a className="nav-link text-light" onClick={Login} href="javascript:void(0)"><strong>Login</strong></a>

                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar