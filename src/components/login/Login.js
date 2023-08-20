import React, { useContext, useEffect, useRef, useState } from 'react'
import globalContext from '../contextApi/GlobalContext'
import { message } from 'antd';
import { useRouter } from 'next/router';

const Login = () => {

    const router = useRouter();

    const { Dashboard, userDetail, user, Signup, DashboardFalse } = useContext(globalContext);

    const [isValidEmail, setIsValidEmail] = useState(false)
    const [emailV, setEmailV] = useState('')

    const emailRef = useRef();
    const passwordRef = useRef();


    useEffect(() => {
        emailRef.current.value = user?.email!==undefined ? user?.email : ""
        passwordRef.current.value = user?.password!==undefined ?  user?.password : ""
        console.log('login user if avaialbel',user);
        DashboardFalse();
        user!==null && onLogin()
        // user && (message.loading(), onLogin(), Login())
    },[])

    const emailValidFunc = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setIsValidEmail(emailRegex.test(emailV))
        return isValidEmail;
    }

    const onLogin = async e => {
        console.log('onLoginnn')
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        const res = await fetch('/api/login', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const jsonData = await res.json();
        if (!jsonData.success) {
            return message.error(jsonData.msg)
        }
        message.success(jsonData.msg)
        router.push('/dashboardPage')
        userDetail(jsonData.detail, formData)
        Dashboard();
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        const res = await fetch('/api/login', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const jsonData = await res.json();
        if (!jsonData.success) {
            return message.error(jsonData.msg)
        }
        message.loading()
        message.success(jsonData.msg)
        router.push('/dashboardPage')
        userDetail(jsonData.detail, formData)
        Dashboard();
    }


    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <div className="col">
                    <div className="col-sm">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <h3 className="text-dark"><strong>Login</strong></h3>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm w-50 p-5 mx-auto col-10 col-md-8 col-lg-6">
                        <form onSubmit={handleSubmit} className="m-auto d-flex flex-column justify-content-center align-items-center shadow py-5">


                            <div className="form-group m-3 w-75">
                            <input type="email" className={`form-control ${emailV.length > 0 && isValidEmail ? 'is-valid' : 'is-invalid'}`}
                                id="email" placeholder="Email" onChange={() => (setEmailV(emailRef.current.value), emailValidFunc())} required minLength={8} 
                                ref={emailRef}
                                />

                            </div>
                            <div className="form-group m-3 w-75">
                                <input type="password" className="form-control" id="email" placeholder="Password" ref={passwordRef} required />
                            </div>
                            <div className="form-group m-3">
                                <button type="submit" className="btn btn-purple" >Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Login